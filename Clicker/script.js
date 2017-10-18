var capital;
var pencilStock;
var pencilProdRatio;
var pencilSellRatio;
var pencilProdCost;
var pencilSellPrice;
var pencilProfit = pencilSellPrice - pencilProdCost

function setup() {
    capital = 10;
    pencilStock = 0;
    pencilProdRatio = 1;
    pencilSellRatio = 1;
    pencilProdCost = 1;
    pencilSellPrice = 1.01;
    UpdateMadeHTML();
    UpdateCapitalHTML();
    updateProdCostHTML();
    updateSellPriceHTML()
}
//Called when user click the add button
function addBtn() {
    if (CanRemoveFromCapital() == true) {
        addToPencilStock();
        removeFromCapital();
    } else {
        document.getElementById('addBtn').setAttribute('disabled', 'disabled');
    }
}
//called when user presses the sell putton
function sellBtn() {
    if (canRemoveFromStock() == true) {
        removeFromStock();
        addToCapital();
    } else {
        document.getElementById('sellBtn').setAttribute('disabled', 'disabled');
    }
}

//evaluates capital and pencilCost and returns true or false
function CanRemoveFromCapital() {
    if (capital >= pencilProdCost && capital > 0) {
        return true
    } else {
        return false
    }
}

function canRemoveFromStock() {
    if (pencilStock >= pencilSellRatio && pencilStock > 0) {
        return true
    } else {
        return false
    }
}

function addToPencilStock() {
    pencilStock += pencilProdRatio;
    UpdateMadeHTML();
}

function removeFromCapital() {
    capital -= pencilProdCost;
    UpdateCapitalHTML();
}

function removeFromStock() {
    pencilStock -= pencilSellRatio;
    UpdateMadeHTML();
}

function addToCapital() {
    capital += pencilSellPrice * pencilSellRatio;
    UpdateCapitalHTML();
}

function UpdateMadeHTML() {
    html = " ";
    html += pencilStock;
    document.getElementById('madeDiv').innerHTML = html;
}

function UpdateCapitalHTML() {
    html = " ";
    html += capital;
    document.getElementById('capitalDiv').innerHTML = html;
}

function updateProdCostHTML() {
    html = " ";
    html = pencilProdCost;
    document.getElementById('prodCost').innerHTML = html;
}

function updateSellPriceHTML() {
    html = " ";
    html = pencilSellPrice;
    html = document.getElementById('sellAt').innerHTML = html;
}