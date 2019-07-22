const express = require('express')
const drinkRouter = express.Router()

const Drink = require("../models/drink.js")

// Get ALL
drinkRouter.get("/", (req, res, next) => {
    // to include a query in the GET:
    // Drink.find({hasAlcohol: req.query.hasAlcohol}, (err, drinks) => {
    Drink.find((err, drinks) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(drinks)
    })
})

// GET One
drinkRouter.get("/:_id", (req, res, next) => {
    Drink.findOne,({ _id: req.params._id }, (err, foundDrink) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundDrink)
    })
})

// POST - insert one
drinkRouter.post("/", (req, res, next) => {
    const newDrink = new Drink(req.body)
    newDrink.save((err, savedDrink) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedDrink)
    })
})

drinkRouter.delete("/:_id", (req, res, next) => {
    Drink.findOneAndRemove({ _id: req.params._id }, (err, deletedDrink) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(
            {
                drink: deletedDrink,
                msg: `Successfully deleted ${deletedDrink.name}`
            })
    })
})

drinkRouter.put("/:_id", (req, res, next) => {
    Drink.findOneAndUpdate(
        { _id: req.params._id }, 
        req.body,
        {new: true},
        (err, updatedDrink) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedDrink)
        }
    )
})

module.exports = drinkRouter