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

let clickAmount = 1;

if(starterValue == 10){

}

function GetPoint(){
    starterValue += clickAmount
    valueIndicator.innerText = "Points: " + starterValue
}

clickButton.addEventListener("click", GetPoint)

let clicksPrice = 10;

function upgradeClicks(){
    if(starterValue == clicksPrice){
        clickAmount += 0.25;
        starterValue = starterValue - clicksPrice
        clicksPrice = clicksPrice *= 2.5;
        moreClicksPrice.innerText = "Price: " + clicksPrice;
        valueIndicator.innerText = "Points: " + starterValue;
    }
    else{
        console.log("not enough points")
    }
}

moreClicksButton.addEventListener("click", upgradeClicks)