The website must contain the following:

A list displaying each baddie by type. Each list item must:
Have baddie image
Mario https://i.pinimg.com/564x/a7/87/88/a78788d285a647701307d615d5d2a08b.jpg
https://technology.inquirer.net/files/2017/11/Masthead_mario.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png
https://carwad.net/sites/default/files/mario-bros.-110977-3134862.jpg

Goombas https://www.mariowiki.com/images/7/76/MLSS%2BBM_Art_-_Big_Tail_Goomba.png
Bob-ombs https://www.mariowiki.com/images/9/9e/Bobomb_-_MarioPartyStarRush.png
Cheep-cheeps https://vignette.wikia.nocookie.net/newersupermariobroswii/images/4/49/Cheapcheaphalfofffish.png/revision/latest?cb=20180219002428

Have baddie name
Show price of that baddie
    Goombas: 5 Coins 
    Bob-ombs: 7 Coins
    Cheep-cheeps: 11 Coins
Have an input box to enter the total caught of that type
A total price at the bottom that adds sums the total cost of baddies caught
(must use Javascript for this math - no hard coded values)
A footer showing:
Mario's email address
Mario's company website url
Mario's physical address
A large title at the top of the page entitled "Mario Pest Control"
Passing Criteria: Visual Inspection by Instructor
Student demonstrated a solid understanding with the following levels of the skills tree:

Static Websites, Level 1
CSS Selectors
Colors in CSS
Fonts in CSS
Using external CSS stylesheets and JavaScript files
Deployment, Level 1
Opening an HTML document i
n browser
-------
    <button name="submit">Submit</button></p>
--------
<form name = "f1"> <!-- the "this" in GetSelectedItem(this) is the input -->
    <input type = "radio" Name = "r1" Value = "ON" onClick="GetSelectedItem(this)">On
    <input type = "radio" Name = "r1" Value = "OFF" onClick ="GetSelectedItem(this)">Off
</form>

<div id="output"></div>
Then change your script to this:

<script  type="text/javascript">
         // Grab the output eleent
    var output = document.getElementById('output');

       // "el" is the parameter that references the "this" argument that was passed
    function GetSelectedItem(el) {
        output.innerHTML = el.value; // set its content to the value of the "el"
    }
</script>

<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
<input type="number" id="a" value="50">100
+<input type="number" id="b" value="50">
=<output name="x" for="a b"></output>
</form>