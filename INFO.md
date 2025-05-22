RUNE KODE
const inventory = [];

class UpgradeItemBase {

    avaliable = true; 
    element;
    itemName = "UpgradeItem";

    constructor() {
        this.element = document.createElement('div');
        this.element.innerHTML = `<div>Dette er en item du kan kjøpe</div>`;
        console.log('Upgrade created');
    }

    buyItem() {
        this.avaliable = false;
        this.element.style.display = "none";
        console.log('Upgrade was bought');
    }

    getElement() {
        console.log(this.itemName + ' ble hentet');
        return this.element;
    }

}

class ShieldItem extends UpgradeItemBase {

    itemName = 'ShieldItem';

}

document.body.innerHTML = "";

inventory.push(new UpgradeItemBase());
inventory.push(new ShieldItem());

inventory.forEach(item=> {
    document.body.appendChild(item.getElement());
    // item.buyItem();
});


NEW MINE 
class UpgradeItem {

    constructor(item, price){
        this.item = item;
        this.price = price;
    }
    
}

const UpgradeOne = new UpgradeItem("Multiplier 1.25x", 10);
document.getElementById("moreClicks").innerHTML = UpgradeOne.item;
document.getElementById("moreClicksPrice").innerHTML = UpgradeOne.price;
