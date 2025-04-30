const clickButton = document.getElementById("ClickButton");
const valueIndicator = document.getElementById("valueIndicator");

let starterValue = 0;

function GetPoint(){
    starterValue += 1
    valueIndicator.innerText = "Points: " + starterValue
}

clickButton.addEventListener("click", GetPoint)

