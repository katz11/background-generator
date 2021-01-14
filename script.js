var h3 = document.querySelector("h3");
var colorLeft = document.querySelector(".colorLeft");
var colorRight = document.querySelector(".colorRight");
var body = document.getElementById("gradient");

function changeBackground() {
	body.style.background = "linear-gradient(to right, " + colorLeft.value + ", "
	 + colorRight.value + ")";
	 h3.textContent = body.style.background + ";";
}

colorLeft.addEventListener("input", changeBackground)

colorRight.addEventListener("input", changeBackground)

