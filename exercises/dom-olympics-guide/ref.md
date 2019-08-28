https://coursework.vschool.io/dom-olympics-guide/

DOM Olympics Guide
12 MARCH 2019
Make sure you understand the DOM and methods before getting into this exercise or guide. You'll want to be familiar with at least document.getElementById()

You will be expected to write your own event listeners.

There are many properties and methods associated with the DOM, but if you think of the DOM as a tree of elements, each element with it's own properties that make it what is is (the text inside it, it's class names, id, and style properties) it starts to get easier.

Preliminaries
The first thing we want to do is create an h1, give it a class and some text and put it in the DOM.

const h1 = document.createElement("h1");
document.createElement() will create an element with the tag name of what's passed it. We'll also have a variable to call it and add properties to it.

.textContent is one of the things we can add to the h1

h1.textContent = "JavaScript made this!!";
This will give the h1 some text. We can't see it yet. It only excists in memory. We need to append it to the DOM.

document.getElementById("header").appendChild(h1);
This line selects something that exists in the DOM, and appends our h1 as the last child. In this case the only child.

It's not styled quite yet. Let's add the class header to our h1

Before we append it, let's do the following:

h1.className = "header";
Make sure that you understand those lines and that they are working before moving to the subtitle.

Attempt the subtitle by yourself. A sometimes usefull property of an element is .innerHTML. It's a bit like textContent was for the first step.

once you've created a subtitle element, you could say something like,

subTitle.innerHTML = '<span class="name">Eric</span> wrote the JavsScript`;
Make sure you append the subTitle and give it any classes it needs.

Bronze
We need to change those divs, but are only given a class to select them with. There is a method called, document.getElementsByClassName()

This will return a list of the elements. It's essentially an array.

I was to select all the divs with class message and assign the variable messages to it. Plural variable names for arrays are a must.

const messages = document.getElementsByClassName("message");
We can select the first message like messages[0] and the rest using thier respective indexes.

Change all the messages .textContent to something pleasant.

Now we can clear them. Our code from the first challenge may look like this:

const messages = document.getElementsByClassName("message");

messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";
We could also loop over all the messages and clear them out.

Use either method with a button to clear out the messages.

Silver
For this one, you'll have to setup an event on that drop down.

Use the change event.

We want to edit the classList or className property to add the class theme-two or remove it.

We can use the .toggle() method to do that.

element.classList.toggle("theme-two");
If you wanted to write a for loop to add that to every message, you could use our  messages variable from before and do this:

for(let i = 0; i < messages.length; i++) {
    messages[i].classList.toggle("theme-two");
}
You may have to write an if in there to see what classes are applied, or what the e.target.value is in the event listener. Especially if you add more themes.

Gold
For this, you'll need to use several of your skills you've practiced on other medals.

For every new message submission, you'll need to create a div

You'll need to get at the .value of the input box inside of an event handler.

You'll need to take that value, and assign it your newly created elements .textContent

Then give your div class names the same as the ones in the HTML

Append that to the appropriate spot in the DOM, and you're on your way to making everyone around you happy and making yourself rich.