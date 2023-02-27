

var gameData = {
  azzip: 0,
  azzipPerClick: 1,
  azzipPerClickCost: 50,
  lastTick: Date.now(),
}
var savecounter = 0;
function saveGame() {
  localStorage.setItem("azzipMinerSave", JSON.stringify(gameData));
}
//console.log(JSON.stringify(gameData));
function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  document.getElementById("mineAzzipMenu").style.display = "none";
  document.getElementById("shopMenu").style.display = "none";
  document.getElementById(tab).style.display = "inline-block";
}
// go to a tab for the first time, so not all show
tab("mineAzzipMenu");


function mineAzzip() {
  if (savecounter == 0) {
    if (localStorage.azzipMinerSave === "undefined") {  
    } else {
      gameData = JSON.parse(localStorage.azzipMinerSave);
    }
    savecounter++;
  }
  gameData.azzip += gameData.azzipPerClick;
  document.getElementById("azzipMined").innerHTML =
    gameData.azzip + " Azzips Mined";
  update("azzipMined", gameData.azzip + " Azzips Mined");
}
function buyAzzipPerClick() {
  if (gameData.azzip >= gameData.azzipPerClickCost) {
    gameData.azzip -= gameData.azzipPerClickCost;
    gameData.azzipPerClick += 1;
    gameData.azzipPerClickCost *= 2;
    document.getElementById("azzipMined").innerHTML =
      gameData.azzip + " Azzips Mined";
    document.getElementById("perClickUpgrade").innerHTML =
      "Upgrade Nevo (Currently Level " +
      gameData.azzipPerClick +
      ") Cost: " +
      gameData.azzipPerClickCost +
      " Azzips";
  }
  update("azzipMined", gameData.azzip + " Azzips Mined");
  update(
    "perClickUpgrade",
    "Upgrade Nevo (Currently Level " +
      (gameData.azzipPerClick - 1) +
      ") Cost: " +
      gameData.azzipPerClickCost +
      " Azzips"
  );
}


function update(id, content) {
  document.getElementById(id).innerHTML = content;
}
function saveData() {
    localStorage.setItem("azzipMinerSave", JSON.stringify(gameData));
}


var mainGameLoop = window.setInterval(function () {
  var diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now();
  gameData.azzip += gameData.azzipPerClick * (diff / 1000);
  document.getElementById("azzipMined").innerHTML =
    gameData.azzip + " Azzips Mined";
  update("azzipMined", gameData.azzip + " Azzips Mined");
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