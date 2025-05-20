// Foundation consts
const clickButton = document.getElementById("ClickButton");
const valueIndicator = document.getElementById("valueIndicator");

// Get point button
const clickToEarn = document.getElementById("clickToEarn");

// Upgrades
const moreClicksButton = document.getElementById("moreClicksPurchase");
const moreClicksPrice = document.getElementById("moreClicksPrice");
const moreClicks = document.getElementById("moreClicks");

let starterValue = 0;

if(starterValue == 10){

}

function GetPoint(){
    starterValue += 1
    valueIndicator.innerText = "Points: " + starterValue
}

clickButton.addEventListener("click", GetPoint)

