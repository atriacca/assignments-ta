app.get("/rangers/search", (req, res) => {
    const { weapon, color } = req.query

    if(color && weapon){
        const foundRangers = rangers.filter(ranger => {
            if(ranger.costumeColor === color && ranger.weapon === weapon){
                return ranger
            }
        })
        res.send(foundRangers)
    } else if(req.query.color){
        const foundRangers = rangers.filter(ranger => ranger.costumeColor === color)
        res.send(foundRangers)

    } else if(req.query.weapon){
        const foundRangers = rangers.filter(ranger => ranger.weapon === weapon)
        res.send(foundRangers)
    }

})