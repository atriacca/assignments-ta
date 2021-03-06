https://coursework.vschool.io/dice-react-state/

Rolling Dice with React State, 19 NOVEMBER 2018 on React

Using what you have just learned about state in React, you are going to create a <DiceBox /> component that renders 5 dice numbers for the user to view.

You Must
Create a class component called <DiceBox />
Write a method in that class that produces 5 random numbers between 1 and 6 and saves them in state.
Display the 5 random numbers in your <DiceBox /> JSX.
Provide a button the user can click on that will redo step 2 and present the new numbers to the user.
Take it further
Create a <Die /> component that receives a random number as a prop and displays it (rather than just displaying the 5 numbers in the <DiceBox /> JSX).
Allow the user to click on a given <Die /> to select it, and that number will not change until the dice reset (resetting is done in the next step).
Have the dice reset (de-selecting all previously selected die and setting their numbers back to 0) after every 3rd roll.
Hints:
Consider starting your state off with 5 numbers like this:

class App extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
    }

With this set up, you then need to write a method that uses this.setState to randomly change the 5 numbers to a number between 1 - 6.
Ex: Math.floor(Math.random() * 6;
From there its all about how you want to display those numbers in your return statement.

Resources
React State

1: https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-8934238.gif
2: https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-8031082.gif
3: https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-1664244.gif
4: https://cdn.clipart.email/1cee826afbbf9c6ff82faf17147ffe9b_dice-clipart-_900-901.gif
5: https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif
6: https://dumielauxepices.net/sites/default/files/dice-clipart-six-502642-5779813.gif
