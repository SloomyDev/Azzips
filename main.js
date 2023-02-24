var gameData = {
    azzip: 0,
    azzipPerClick: 1,
    azzipPerClickCost: 10,
    lastTick: Date.now(),
  };
  tab("mineAzzipMenu");
  function tab(tab) {
    // hide all your tabs, then show the one the user selected.
    document.getElementById("mineAzzipMenu").style.display = "none";
    document.getElementById("shopMenu").style.display = "none";
    document.getElementById(tab).style.display = "inline-block";
  }
  // go to a tab for the first time, so not all show
  tab("mineAzzipMenu");
  
  
  function mineAzzip() {
    gameData.azzip += gameData.azzipPerClick;
    document.getElementById("azzipMined").innerHTML =
      gameData.azzip + " Azzips Mined";
    update("azzipMined", gameData.azzip + " Azzips Mined");
  }
  function buyAzzipPerClick() {
    if (gameData.azzip >= gameData.azzipPerClickCost) {
      gameData.gold -= gameData.azzipPerClickCost;
      gameData.azzipPerClick += 1;
      gameData.azzipPerClickCost *= 2;
      document.getElementById("azzipMined").innerHTML =
        gameData.azzip + " Azzips Mined";
      document.getElementById("perClickUpgrade").innerHTML =
        "Upgrade Nevo (Currently Level " +
        gameData.azzipPerClick +
        ") Cost: " +
        (gameData.azzipPerClickCost - 1) +
        " Azzips";
    }
    update("azzipMined", gameData.azzip + " Azzips Mined");
    update(
      "perClickUpgrade",
      "Upgrade Nevo (Currently Level " +
        gameData.azzipPerClick +
        ") Cost: " +
        gameData.azzipPerClickCost +
        " Azzips"
    );
  }
  
  
  function update(id, content) {
    document.getElementById(id).innerHTML = content;
  }
  
  
  var mainGameLoop = window.setInterval(function () {
    diff = Date.now() - gameData.lastTick;
    gameData.lastTick = Date.now();
    gameData.azzip += gameData.azzipPerClick * (diff / 1000);
    document.getElementById("azzipMined").innerHTML =
      gameData.azzip + " Azzips Mined";
    update("azzipMined", gameData.azzip + " Azzips Mined");
    //  mineGold();
  }, 1000);
  var saveGameLoop = window.setInterval(function () {
    localStorage.setItem("azzipMinerSave", JSON.stringify(gameData));
  }, 15000);
  var saveGame = JSON.parse(localStorage.getItem("azzipMinerSave"));
  if (saveGame !== null) {
    gameData = saveGame;
  }
  if (typeof saveGame.azzip !== "undefined") gameData.azzip = saveGame.azzip;
  if (typeof saveGame.azzipPerClick !== "undefined")
    gameData.azzipPerClick = saveGame.azzipPerClick;
  if (typeof saveGame.azzipPerClickCost !== "undefined")
    gameData.azzipPerClickCost = saveGame.azzipPerClickCost;
  if (typeof saveGame.lastTick !== "undefined")
    gameData.lastTick = saveGame.lastTick;