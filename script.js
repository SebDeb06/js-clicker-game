// Foundation consts
const clickButton = document.getElementById("ClickButton");
const valueIndicator = document.getElementById("valueIndicator");
const multiplierIndicator = document.getElementById("multiplierIndicator");

// Get point button
const clickToEarn = document.getElementById("clickToEarn");

// Upgrades
const moreClicksButton = document.getElementById("moreClicksPurchase");
const moreClicksPrice = document.getElementById("moreClicksPrice");
const moreClicks = document.getElementById("moreClicks");

let starterValue = 0;
let multiplier = 1;

let clickAmount = 1;

if(starterValue == 10){

}

function GetPoint(){
    starterValue += clickAmount * multiplier
    valueIndicator.innerText = "Points: " + parseInt(starterValue);
}

clickButton.addEventListener("click", GetPoint)

let clicksPrice = 10;

function upgradeClicks(){
    if(starterValue >= clicksPrice){
        multiplier += 0.25;
        starterValue = starterValue - clicksPrice
        clicksPrice = clicksPrice *= 1.75;
        moreClicksPrice.innerText = "Price: " + parseInt(clicksPrice);
        valueIndicator.innerText = "Points: " + parseInt(starterValue);
        multiplierIndicator.innerText = "Click Multiplier: " + multiplier + "x";

    }
    else{
        console.log("not enough points")
    }
}

moreClicksButton.addEventListener("click", upgradeClicks)

