// Foundation consts
const clickButton = document.getElementById("ClickButton");
const valueIndicator = document.getElementById("valueIndicator");
const multiplierIndicator = document.getElementById("multiplierIndicator");

// Get point button
const clickToEarn = document.getElementById("clickToEarn");

// Auto points
const autoPoints = document.getElementById("autoPoints");
const buyAutoPoints = document.getElementById("buyAutoPoints");

// Upgrades
const moreClicksButton = document.getElementById("moreClicksPurchase");
const moreClicksPrice = document.getElementById("moreClicksPrice");
const moreClicks = document.getElementById("moreClicks");

// Values
let starterValue = 0;
let multiplier = 1;
let clickAmount = 1;

// Autopoints section start
let autoPointsStatus = false;
let autoPointIsPurchased = false;

let APIntervalTime = 1000;

//Get point when clicking
function GetPoint(){
    starterValue += clickAmount * multiplier;
    valueIndicator.innerText = "Points: " + parseInt(starterValue);
}

clickButton.addEventListener("click", GetPoint)

//Turn on/off auto points
function autoPointsED(){

    function addPoints(){
        if(autoPointsStatus == true){
            starterValue += clickAmount * multiplier;
            valueIndicator.innerText = "Points: " + parseInt(starterValue);
        }
    }

    if (autoPointsStatus == true ){
        autoPointsStatus = false
        autoPoints.innerText = "Auto Points: Off";
        autoPoints.style.backgroundColor = "rgb(255, 0, 0)"
        clearInterval(autoPointInterval)
    }

    else if(autoPointsStatus == false){
        autoPointsStatus = true
        autoPoints.innerText = "Auto Points: On";
        autoPoints.style.backgroundColor = "rgb(0, 255, 0)"
        autoPointInterval = setInterval(addPoints, APIntervalTime)
    }

}

//Purchase auto points
function purchaseAutoPoints(){
    if(starterValue >= 50){
        autoPointIsPurchased = true;
        starterValue = starterValue - 50;
        valueIndicator.innerText = "Points: " + parseInt(starterValue);
        buyAutoPoints.style.display = "none";
        if(autoPointIsPurchased == true){
            autoPoints.addEventListener("click", autoPointsED)
            autoPoints.style.display = "inherit";
            autoPoints.style.backgroundColor = "rgb(255, 0, 0)"
        }
    }
    else{
        console.log("Cannot purchase auto points, not enough balance!")
    }
}

//Checks if player has Auto Points
if(autoPointIsPurchased == false){
    autoPoints.style.display = "none";
}

buyAutoPoints.addEventListener("click", purchaseAutoPoints)

//Upgrade clicks section

let clicksPrice = 10;

function upgradeClicks(){
    if(starterValue >= clicksPrice){
        multiplier += 0.25;
        starterValue = starterValue - clicksPrice
        clicksPrice = clicksPrice *= 1.75;
        moreClicksPrice.innerText = "Price: " + parseInt(clicksPrice);
        moreClicks.innerText = "Click Multiplier: " + (multiplier + 0.25) + "x";
        valueIndicator.innerText = "Points: " + parseInt(starterValue);
        multiplierIndicator.innerText = "Click Multiplier: " + multiplier + "x";

    }
    else{
        console.log("not enough points")
    }
}

moreClicksButton.addEventListener("click", upgradeClicks)
