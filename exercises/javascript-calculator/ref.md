https://coursework.vschool.io/string-manipulation/

Exercise - String Manipulation, 12 MAY 2015 on Week 1, Exercise, Programming Principles, Problem Solving, Level 1

The purpose of this exercise is to get you comfortable using the terminal with node, npm, and your text editor. You will learn the basics of string manipulation and how to find things on the Internet.

Using the NodeJS package readline-sync, create an interactive program that asks you some personal information (name, age, favorite color, etc.) and reports back to you what you entered. Make sure to include the following string manipulations:

Make one of the inputs all uppercase (i.e., given the string “hello” prints “HELLO”)
Report back the number of characters in a given input
Concatenate (add) two separate strings together
Given a long message (more than twenty letters), return only the last half of the message
Using the same long message (but without making the user type it in again), have your program print it to the terminal for the user to read again, but specify from where it will print.
Example: If the long message given in #4 was hello my name is John and I'm 30 then the user could give any number. So if the user entered 14 it would print off s John and I'm 30
Program specifications:

You must use the readline-sync package.
Make sure to store all input from the user in a variable using the question method of the readline-sync package.
Use special string characters such as the newline character \n, or the tab character \t to make your output more readable.
Helpful hints:

Use Google to learn how to perform the appropriate string manipulations using Javascript methods.
Install the readline-sync package by running in your terminal: npm install readline-sync
An example interaction is given below:

string exercise

Boilerplate code:

var ask = require('readline-sync');
console.log('Hello! My name is Betty. Help me get to know you!\n');
var firstName = ask.question('What is your first name? ');