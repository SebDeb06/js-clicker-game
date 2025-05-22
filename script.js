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

let starterValue = 0;
let multiplier = 1;
let clickAmount = 1;

// Autopoints section start
let autoPointsStatus = false;
let autoPointIsPurchased = false;

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
        clearInterval(autoPointInterval)
    }

    else if(autoPointsStatus == false){
        autoPointsStatus = true
        autoPoints.innerText = "Auto Points: On";
        autoPointInterval = setInterval(addPoints, 1000)
    }

}

function purchaseAutoPoints(){
    if(starterValue >= 50){
        autoPointIsPurchased = true;
        starterValue = starterValue - 50;
        valueIndicator.innerText = "Points: " + parseInt(starterValue);
        buyAutoPoints.style.display = "none";
        if(autoPointIsPurchased == true){
            autoPoints.addEventListener("click", autoPointsED)
        }
    }
    else{
        console.log("Cannot purchase auto points, not enough balance!")
    }
}

buyAutoPoints.addEventListener("click", purchaseAutoPoints)


//Autopoints section end

function GetPoint(){
    starterValue += clickAmount * multiplier;
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

