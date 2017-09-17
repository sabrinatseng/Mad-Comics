numberOfSelects = 9;
var imageSources = new Array(numberOfSelects);
var optionsSelected = new Array(numberOfSelects);
//document.getElementById("box").style.display = "none";

function show() {
   var imageSources = new Array(numberOfSelects);
   for (i = 0; i < numberOfSelects; i++) {
   		imageSources[i] = document.getElementById("option" + i.toString()).options[document.getElementById("option" + i.toString()).selectedIndex].value; //get the selected value
   		optionsSelected[i] = document.getElementById("option" + i.toString()).options[document.getElementById("option" + i.toString()).selectedIndex].text;
   		if (imageSources[i] == "none") {
   			document.getElementById("test").innerHTML = 'Error: Please fill in all blanks before creating the comic!';
   			return;
   		}
   }

   document.getElementById("test").innerHTML = "";

   var text = "<b>" + optionsSelected[0] + "</b> punches a ninja out of the air, knocking the sword from his hand. As two other ninjas race towards him, ready to attack, someone in the background calls out, <b>" + optionsSelected[1] + "</b> The second ninja is easily defeated, yelling out <b>" + optionsSelected[2] + "</b> while falling <b>" + optionsSelected[3] + "</b> to the ground. The main character continues to demolish the enemy, breaking the third ninja's <b>" + optionsSelected[4] + "</b> on his knee. The remaining ninjas begin <b>" + optionsSelected[5] + "</b> and run away. Meanwhile, a response can be heard in the background, <b>" + optionsSelected[6] + "</b> Three schoolgirls watch the fight from behind a <b>" + optionsSelected[7] + "</b>. One of them says to the other two, <b>" + optionsSelected[8] + "</b>";
   document.getElementById("story").innerHTML = text;

   document.getElementById("foreground").src = imageSources[1];
   //document.getElementByName("foreground2").src = imageSources[2];
   document.getElementById("box").removeAttribute("hidden");
   //document.getElementByName("box2").removeAttribute("hidden");
}