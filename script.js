var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body =  document.getElementById("gradient");
var button =  document.querySelector("button");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "+ 
	color1.value +", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function generateRandomNumbers() {
	var array = [];
	for (var i = 0; i < 6;  i++){
		array[i] = Math.floor(Math.random() * 256);
	}
	return array;
}

function generateRandomColor() {
	var ca = generateRandomNumbers();
	body.style.background = 
	"linear-gradient(to right, " +
	"rgb(" + ca[0] + ", " + ca[1] + ", " + ca[2] + "), " +
	"rgb(" + ca[3] + ", " + ca[4] + ", " + ca[5] + "))";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandomColor);

