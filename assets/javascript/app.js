//This function shows the questions and hides the start button and objective
function checkOne(){
	//Tester
	//alert("You're a wizard harry!");
	document.getElementById("questions").style.visibility = "visible";
	document.getElementById("words").style.visibility = "hidden";
	document.getElementById("wordstwo").style.visibility = "hidden";
	document.getElementById("buttonOne").style.visibility = "hidden";

}


//This function hides the questions and rest of the document and displays the score
function checkTwo(){
	//Tester
	//alert("You're a wizard harry!");

//These variables refer back to the values in the html and this is where I initialize the variables
var question1= document.questions.question1.value;
var question2= document.questions.question2.value;
var question3= document.questions.question3.value;
var question4= document.questions.question4.value;
var question5= document.questions.question5.value;
var question6= document.questions.question6.value;
var question7= document.questions.question7.value;
var question8= document.questions.question8.value;
var question9= document.questions.question9.value;
var question10= document.questions.question10.value;
var question11= document.questions.question11.value;
var question12= document.questions.question12.value;
var correct= 0;
//These if statements determine the correct answer, and adds to the number of questions answered correctly by 1
	if (question1 == "eleven") {
		correct++;
}
	if (question2 == "six") {
		correct++;
}
	if (question3 == "Lily") {
		correct++;
}
	if (question4 == "Stag") {
		correct++;
}
	if (question5 == "Black") {
		correct++;
}
	if (question6 == "pltNine") {
		correct++;
}
	if (question7 == "Snape") {
		correct++
}
	if (question8 == "Hedgwig") {
		correct++
}
	if (question9 == "Quidditch") {
		correct++
}
	if (question10 == "Parseltounge"){
		correct++
}
	if (question11 == "sixs"){
		correct++
}
	if (question12 == "Sock"){
		correct++
}
// These variables and if statements determine how well you did and applies an image
var messages= ["Here's your acceptance letter to Hogwarts!", "You're a wizard Harry!", "You're a Muggle!"];
var pictures= ["assets/images/win.jpg", "assets/images/wizard.gif", "assets/images/lose.jpg"];
var range;
	if (correct >= 0 && correct < 6) {
		range = 2;
	}
	if (correct > 6 && correct <= 10) {
		range = 1;
	}
	if (correct > 10) {
		range = 0;
	}
//This covers up the questions and shows the results as well as the images
document.getElementById("questions").style.visibility = "hidden";

document.getElementById("message").innerHTML = messages [range];
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
document.getElementById("picture").src = pictures[range];
}