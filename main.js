var gameData = {
  azzip: 0,
  azzipPerClick: 1,
  azzipPerClickCost: 50,
  lastTick: Date.now(),
  nevoLevel: 0,
  eikooc: 0,
  eikoocPerClick: 1,
  eikoocPerClickCost: 2500,
  upgrade1UnlockCounter: 0,
  upgrade2UnlockCounter: 0,
  shop1OpenCode: 0,
  shop2OpenCode: 0
}
var savecounter = 0;
var upgrade1counter = 0;
var upgrade1UnlockCounter = 0;
var upgrade2UnlockCounter = 0;
var shop1OpenCode = 0;
var shop2OpenCode = 0;
function saveGame() {
  localStorage.setItem("azzipMinerSave", JSON.stringify(gameData));
}
function resetGame() {
  gameData = {
    azzip: 0,
    azzipPerClick: 1,
    azzipPerClickCost: 50,
    lastTick: Date.now(),
    nevoLevel: 0
  }
  document.getElementById("azzipMined").innerHTML = gameData.azzip + " Azzips Mined";
  document.getElementById("perClickUpgrade").innerHTML = "Unlock the Nevo - 50 Azzips";
  localStorage.removeItem("azzipMinerSave");
}
function importGameSave() {
  if (typeof localStorage.azzipMinerSave === "undefined") {  
  } else {
    gameData = JSON.parse(localStorage.azzipMinerSave);
  }
  savecounter++;
}
importGameSave();
//console.log(JSON.stringify(gameData));
function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  document.getElementById("mineAzzipMenu").style.display = "none";
  document.getElementById("shopMenu").style.display = "none";
  document.getElementById("shop2Menu").style.display = "none";
  document.getElementById(tab).style.display = "inline-block";
}
// go to a tab for the first time, so not all show
tab("mineAzzipMenu");


function mineAzzip() {
  if (savecounter == 0) {
    if (typeof localStorage.azzipMinerSave === "undefined") {  
    } else {
      gameData = JSON.parse(localStorage.azzipMinerSave);
    }
    savecounter++;
  }
  gameData.azzip += gameData.azzipPerClick;
  update("azzipMined", gameData.azzip);
  isShop1Unlocked();
  isShop2Unlocked();
}
function cookeikooc() {
  if (savecounter == 0) {
    if (typeof localStorage.azzipMinerSave === "undefined") {  
    } else {
      gameData = JSON.parse(localStorage.azzipMinerSave);
    }
    savecounter++;
  }
  gameData.eikoooc += gameData.eikoocPerClick;
  update("eikoocCooked", gameData.eikoooc);
  isShop1Unlocked();
  isShop2Unlocked();
}
function upgrade1() {
  if (gameData.azzip >= gameData.azzipPerClickCost) {
    if (upgrade1counter == 0) {
      gameData.azzip -= gameData.azzipPerClickCost;
    gameData.azzipPerClick += 1;
    gameData.azzipPerClickCost *= 2;
    gameData.nevoLevel = gameData.azzipPerClick - 1;
    document.getElementById("azzipMined").innerHTML =
    (format(gameData.azzip, "scientific")) + " Azzips Mined";
  document.getElementById("perClickUpgrade").innerHTML =
    "Upgrade Nevo (Currently Level " + gameData.nevoLevel +
    " Cost: " +
    gameData.azzipPerClickCost +
    " Azzips";
    update("azzipMined", gameData.azzip);
    upgrade1counter++;
    } else {
      gameData.azzip -= gameData.azzipPerClickCost;
    gameData.azzipPerClick += 1;
    gameData.azzipPerClickCost = (gameData.azzipPerClickCost)**1.27;
    gameData.nevoLevel = gameData.azzipPerClick - 1;
    document.getElementById("azzipMined").innerHTML = (format(gameData.azzip, "scientific")) + " Azzips Mined";
      update(
        "perClickUpgrade", gameData.azzipPerClickCost
      );
    document.getElementById("perClickUpgrade").innerHTML =
      "Upgrade the Nevo (Currently Level " +
      gameData.azzipPerClick +
      ") Cost: " +
      gameData.azzipPerClickCost +
      " Azzips";
      //update("azzipMined", gameData.azzip);
  }
}
  update("azzipMined", gameData.azzip);
  update(
    "perClickUpgrade", gameData.azzipPerClickCost
  );
  document.getElementById("perClickUpgrade").innerHTML = "Upgrade the Nevo (Currently Level " + (gameData.azzipPerClick - 1) + ") Cost: " + update("perClickUpgrade", gameData.azzipPerClickCost);
}
function upgrade2() {
  if (gameData.eikooc >= gameData.eikoocPerClickCost) {
    if (upgrade2counter == 0) {
      gameData.eikooc -= gameData.eikoocPerClickCost;
    gameData.eikoocPerClick += 1;
    gameData.eikoocPerClickCost *= 2;
    gameData.yrekab = gameData.eikoocPerClick - 1;
    document.getElementById("eikoocCooked").innerHTML =
    (format(gameData.eikooc, "scientific")) + " Eikooc Cooked";
  document.getElementById("perClickUpgrade").innerHTML =
    "Upgrade Yrekab (Currently Level " + gameData.yrekabLevel +
    " Cost: " +
    gameData.eikoocPerClickCost +
    " Eikooc";
    update("eikoocCooked", gameData.eikooc);
    upgrade2counter++;
    } else {
      gameData.eikooc -= gameData.eikoocPerClickCost;
    gameData.eikoocPerClick += 1;
    gameData.eikoocPerClickCost = (gameData.eikoocPerClickCost)**1.27;
    gameData.yrekabLevel = gameData.eikoocPerClick - 1;
    document.getElementById("eikoocCooked").innerHTML = (format(gameData.eikooc, "scientific")) + " Eikooc Cooked";
      update(
        "perClickUpgrade", gameData.eikoocPerClickCost
      );
    document.getElementById("perClickUpgrade").innerHTML =
      "Upgrade the Yrekab (Currently Level " +
      gameData.eikoocPerClick +
      ") Cost: " +
      gameData.eikoocPerClickCost +
      " Eikoocs";
      //update("azzipMined", gameData.azzip);
  }
}
  update("eikoocCooked", gameData.eikooc);
  update(
    "perClickUpgrade", gameData.eikoocPerClickCost
  );
  document.getElementById("perClickUpgrade").innerHTML = "Upgrade the Yrekab (Currently Level " + (gameData.eikoocPerClick - 1) + ") Cost: " + update("perClickUpgrade", gameData.eikoocPerClickCost);
}

function update(id, number) {
  document.getElementById(id).innerHTML = format(number, "scientific");
  return document.getElementById(id).innerHTML = format(number, "scientific");
}
function saveData() {
    localStorage.setItem("azzipMinerSave", JSON.stringify(gameData));
}


function enableButton(button, text) {
  document.getElementById(button).style = "background-color: rgb(230, 212, 250); height:60px; width:180px; font-size: 200%; position: relative; top: 10px;"
  document.getElementById(button).innerHTML = text
}


function checkTab (gotab) {
    if (gotab == "shopMenu") {  
  if (shop1OpenCode == 1) {
      tab(gotab);
    }
} else if (gotab == "shop2Menu") {
  if (shop2OpenCode == 1) {
    tab(gotab);
  }
}
}
function isShop1Unlocked () {
  if (upgrade1UnlockCounter == 0) {
    if (gameData.azzip >= 50) {
      document.getElementById("shopMenuButton").style = "background-color: rgb(230, 212, 250); height:70px; width:180px; font-size: 150%; position:relative; top:10px";
      document.getElementById("shopMenuButton").innerHTML = "Upgrades Shop";
      shop1OpenCode++;
      upgrade1UnlockCounter++;
    }
  }
}
 
function isShop2Unlocked () {
  if (upgrade2UnlockCounter == 0) {
    if (gameData.azzip >= 2000) {
      document.getElementById("shop2MenuButton").style = "background-color: rgb(230, 212, 250); height:70px; width:180px; font-size: 150%; position:relative; top:10px";
      document.getElementById("shop2MenuButton").innerHTML = "Yrekab";
      shop2OpenCode++;
      upgrade2UnlockCounter++;
    }
  }
}


var mainGameLoop = window.setInterval(function () {
  var diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now();
  gameData.azzip += gameData.azzipPerClick * (diff / 1000);
  gameData.eikooc += gameData.eikoocPerClick * (diff / 2000);
  document.getElementById("azzipMined").innerHTML =
    gameData.azzip + " Azzips Mined";
    document.getElementById("eikoocCooked").innerHTML =
    gameData.eikooc + " Eikooc Cooked";
  update("eikcookCooked", gameData.eikooc + " Eikooc Cooked");
  //  mineGold();
}, 1000);
setInterval();
var saveGameLoop;
saveGameLoop = window.setInterval(saveData(), 1000);
/*setInterval(function () {
  console.log("A");
}, 1000); */
setInterval(console.log("A"), 1000);
gameData = saveGame;




var format = function (number, type) {
  let exponent = Math.floor(Math.log10(number));
  let mantissa = number / Math.pow(10, exponent);
  if (exponent < 3) return number.toFixed(1);
  if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent;
  if (type == "engineering")
    return (
      (Math.pow(10, exponent % 3) * mantissa).toFixed(2) +
      "e" +
      Math.floor(exponent / 3) * 3
    );
    };
/*if (!saveGame) {
  gameData = saveGame;
}
if (typeof saveGame.azzip !== "undefined") {
  gameData.azzip = gameData.azzip.replace("\n", "")
  gameData.azzip = saveGame.azzip;
}
  if (typeof saveGame.azzipPerClick !== "undefined")
  gameData.azzipPerClick = saveGame.azzipPerClick;
if (typeof saveGame.azzipPerClickCost !== "undefined")
  gameData.azzipPerClickCost = saveGame.azzipPerClickCost;
if (typeof saveGame.lastTick !== "undefined")
  gameData.lastTick = saveGame.lastTick;
*/
