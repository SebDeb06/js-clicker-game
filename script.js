// Foundation consts
const clickButton = document.getElementById("ClickButton");
const valueIndicator = document.getElementById("valueIndicator");
const multiplierIndicator = document.getElementById("multiplierIndicator");
const APIntervalIndicator = document.getElementById("APIntervalIndicator");

// Auto points
const autoPoints = document.getElementById("autoPoints");
const buyAutoPoints = document.getElementById("buyAutoPoints");

// Upgrades
const moreClicksButton = document.getElementById("moreClicksPurchase");
const moreClicksPrice = document.getElementById("moreClicksPrice");
const moreClicks = document.getElementById("moreClicks");
const UpgradeAP = document.getElementById("UpgradeAP");
const UpdateAPprice = document.getElementById("UpdateAPprice");

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
            UpgradeAP.style.display = "inherit";
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
    if(multiplier < 10){
        if(starterValue >= clicksPrice){
            multiplier += 0.25;
            starterValue = starterValue - clicksPrice
            clicksPrice = clicksPrice *= 1.35 / 1.04;
            moreClicksPrice.innerText = "Price: " + parseInt(clicksPrice) + " Points";
            moreClicks.innerText = "Click Multiplier: " + (multiplier + 0.25) + "x";
            valueIndicator.innerText = "Points: " + parseInt(starterValue);
            multiplierIndicator.innerText = "Click Multiplier: " + multiplier + "x";

        }
        else{
            console.log("not enough points")
        }
    }
    else{
        console.log("You've max upgraded your clicks!");
        moreClicks.innerText = "MAX UPGRADED";
        moreClicksPrice.style.display = "none";
    }
}

moreClicksButton.addEventListener("click", upgradeClicks)

//Decrease Interval Time on Auto Points

let intervalPrice = 100;

function decreaseAutoPointsInterval(){
    if(APIntervalTime >= 0){
        if(starterValue >= intervalPrice){
            starterValue = starterValue - intervalPrice;
            APIntervalTime = APIntervalTime - 100
            intervalPrice = intervalPrice * 1.35 / 1.03;
            valueIndicator.innerText = "Points: " + parseInt(starterValue);
            UpdateAPprice.innerText = "Price: " + parseInt(intervalPrice) + " Points";
            APIntervalIndicator.innerText = parseInt(APIntervalTime) + "ms";
        }
    }
    else{
        console.log("You can't upgrade more than you have!")
        UpdateAPprice.innerText = "MAX UPGRADE"
    }
}

UpgradeAP.addEventListener("click", decreaseAutoPointsInterval)
