var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var activity = document.querySelector("#activity");
var kanye = document.querySelector("#kanye");
var ageAPI = document.querySelector("#age");
var norris = document.querySelector("#norris");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
	callName();
	callBored();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				callKanye();
				callBored();
				callNorris();
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}



function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


function callKanye() {
	//calls Kanye API, gets response through the fetch function
	var apiUrl = 'https://api.kanye.rest/';
    fetch(apiUrl).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
			kanye.textContent = "Here is a Kanye West quote for you pulled through the Kanye Quote API: \n" + "'" + data.quote + "'";
    }).catch(err => {

    });
}

function callName() {
	//calls Name API, gets response through the fetch function
	var userName = prompt("What is your name?");
	console.log(userName);
	var apiUrl = 'https://api.agify.io/?name=' + userName;
    fetch(apiUrl).then(response => {
      return response.json();
    }).then(data => {
			alert("Courtesy of the Age Guesser API, your predicted age is: " + data.age);
			ageAPI.textContent = "Name: " + data.name + ", Age: " + data.age;
      console.log(data);
    }).catch(err => {

    });
}

function callBored() {
	//calls Bored API, gets response through the fetch function
	var apiUrl = 'https://www.boredapi.com/api/activity';
		fetch(apiUrl).then(response => {
			return response.json();
		}).then(data => {
			console.log(data);
		activity.textContent = "Here is an activity to do, courtesy of the BoredApi: \n" + "'" + data.activity + "'";
		}).catch(err => {

		});
}

function callNorris() {
	//calls Norris API, gets response through the fetch function
	var apiUrl = 'https://api.chucknorris.io/jokes/random';
		fetch(apiUrl).then(response => {
			return response.json();
		}).then(data => {
			console.log(data);
		norris.textContent = "Here is an activity to do, courtesy of the Chuck Norris API: \n" + "'" + data.value + "'";
		}).catch(err => {

		});
}
