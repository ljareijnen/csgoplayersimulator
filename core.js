function playerSave(){
  this.wins = 0;
  this.faceitWins = 0;
  this.losses = 0;
  this.faceitLosses = 0;
  this.skins = 0;
  this.elo = 0;
  this.faceitElo = 0;
  this.money = 0;
  this.mouse = 0;
  this.keyboard = 0;
  this.screen = 0;
  this.gpu = 0;
  this.cpu = 0;
  this.aim = 1;
  this.gameSense = 1;
  this.movement = 1;
}

var Player = new playerSave();
var p = Player;

updateHTML = function(elmId, value) {
  var elem = document.getElementById(elmId);
  if(typeof elem !== 'undefined' && elem !== null) {
    document.getElementById(elmId).innerHTML = value;
  }
}

updateGear = function(){
  updateHTML("mouse", mouseName[p.mouse] + " $" + mousePrice[p.mouse]);
  updateHTML("keyboard", keyboardName[p.keyboard] + " $" + keyboardPrice[p.keyboard]);
  updateHTML("screen", screenName[p.screen] + ", $" + screenPrice[p.screen] + ", " + screenRefreshRate[p.screen] + "hz, " + screenInches[p.screen] + "hz");
  updateHTML("gpu", gpuName[p.gpu] + " $" + gpuPrice[p.gpu]);
  updateHTML("cpu", cpuName[p.cpu] + " $" + cpuPrice[p.cpu]);
}

playGame = function(){
  winOrLoss = Math.floor(Math.random() * 3);
  dropChance = Math.floor(Math.random() * 8);
  if(winOrLoss == 1 || winOrLoss == 2){
    p.wins += 1;
    p.elo += 20;
    document.getElementById("wins").innerHTML = p.wins;
  }
  else{
    p.losses += 1;
    p.elo -= 10;
    document.getElementById("losses").innerHTML = p.losses;
  }
  if(dropChance == 6){
    p.skins += 1;
    document.getElementById("skins").innerHTML = p.skins;
  }
  else{
    p.skins += 0;
    document.getElementById("skins").innerHTML = p.skins;
  }
  checkRank();
}

playPug = function(){
  winOrLoss = Math.floor(Math.random() * 3);
  if(winOrLoss == 1 || winOrLoss == 2){
    p.faceitWins += 1;
    p.faceitElo += 14;
    updateHTML("faceitWins", p.faceitWins);
    updateHTML("faceitElo", p.faceitElo);
  }
  else {
    p.faceitLosses += 1;
    p.faceitElo -= 9;
    updateHTML("faceitLosses", p.faceitLosses);
    updateHTML("faceitElo", p.faceitElo);
  }
  checkFaceitRank();
}

checkRank = function(){
  if(p.elo <= 100){
    rank = "Silver I";
  }
  else if(p.elo > 100 && p.elo <= 200){
    rank = "Silver II";
  }
  else if(p.elo > 200 && p.elo <= 300){
    rank = "Silver III";
  }
  else if(p.elo > 300 && p.elo <= 400){
    rank = "Silver IV";
  }
  else if(p.elo > 400 && p.elo <= 500){
    rank = "Silver Elite";
  }
  else if(p.elo > 500 && p.elo <= 600){
    rank = "Silver Elite Master";
  }
  else if(p.elo > 600 && p.elo <= 700){
    rank = "Gold Nova I";
  }
  else if(p.elo > 700 && p.elo <= 800){
    rank = "Gold Nova II";
  }
  else if(p.elo > 800 && p.elo <= 900){
    rank = "Gold Nova III";
  }
  else if(p.elo > 900 && p.elo <= 1000){
    rank = "Gold Nova Master";
  }
  else if(p.elo > 1000 && p.elo <= 1100){
    rank = "Master Guardian I";
  }
  else if(p.elo > 1100 && p.elo <= 1200){
    rank = "Master Guardian II";
  }
  else if(p.elo > 1200 && p.elo <= 1300){
    rank = "Master Guardian Elite";
  }
  else if(p.elo > 1300 && p.elo <= 1400){
    rank = "Distinguished Master Guardian";
  }
  else if(p.elo > 1400 && p.elo <= 1500){
    rank = "Legendary Eagle";
  }
  else if(p.elo > 1500 && p.elo <= 1600){
    rank = "Legendary Eagle Master";
  }
  else if(p.elo > 1600 && p.elo <= 1700){
    rank = "Supreme Master First Class";
  }
  else if(p.elo > 1700){
    rank = "The Global Elite";
  }
  updateHTML("rank", rank);
}

checkFaceitRank = function(){
  if(p.faceitElo <= 800){
    faceitRank = "FaceIt Level 1";
    updateHTML("faceitRank", faceitRank);
  }
  else if(p.faceitElo > 800 && p.faceitElo <= 950){
    faceitRank = "FaceIt Level 2";
    updateHTML("faceitRank", faceitRank);
  }
  else if(p.faceitElo > 950 && p.faceitElo <= 1100){
    faceitRank = "FaceIt Level 3";
    updateHTML("faceitRank", faceitRank);
  }
  else if(p.faceitElo > 1100 && p.faceitElo <= 1250){
    faceitRank = "FaceIt Level 4";
    updateHTML("faceitRank", faceitRank);
  }
  else if(p.faceitElo > 1250 && p.faceitElo <= 1400){
    faceitRank = "FaceIt Level 5";
    updateHTML("faceitRank", faceitRank);
  }
  else if(p.faceitElo > 1400 && p.faceitElo <= 1550){
    faceitRank = "FaceIt Level 6";
    updateHTML("faceitRank", faceitRank);
  }
  else if(p.faceitElo > 1550 && p.faceitElo <= 1700){
    faceitRank = "FaceIt Level 7";
    updateHTML("faceitRank", faceitRank);
  }
  else if(p.faceitElo > 1700 && p.faceitElo <= 1850){
    faceitRank = "FaceIt Level 8";
    updateHTML("faceitRank", faceitRank);
  }
  else if(p.faceitElo > 1850 && p.faceitElo <= 2000){
    faceitRank = "FaceIt Level 9";
    updateHTML("faceitRank", faceitRank);
  }
  else if(p.faceitElo > 2000){
    faceitRank = "FaceIt Level 10";
    updateHTML("faceitRank", faceitRank);
  }
  if(p.faceitElo < 1100){
    faceitLeague = "Bronze League";
    updateHTML("faceitLeague", faceitLeague);
  }
  else if(p.faceitElo >= 1100 && p.faceitElo < 1500){
    faceitLeague = "Silver League";
    updateHTML("faceitLeague", faceitLeague);
  }
  else if(p.faceitElo >= 1500 && p.faceitElo < 1850){
    faceitLeague = "Gold League";
    updateHTML("faceitLeague", faceitLeague);
  }
  else if(p.faceitElo >= 1850 && p.faceitElo < 2000){
    faceitLeague = "Diamond League";
    updateHTML("faceitLeague", faceitLeague);
  }
  else if(p.faceitElo >= 2000){
    faceitLeague = "Master League";
    updateHTML("faceitLeague", faceitLeague);
  }
}

sellSkin = function(){
  if(p.skins > 0){
  skin = Math.floor(Math.random() * 20)
  if(skin <= 10){
    p.money += 0.1;
    p.skins -= 1;
    document.getElementById("money").innerHTML = p.money.toFixed(2);
    document.getElementById("skins").innerHTML = p.skins;
  }
  else if(skin > 10 && skin < 18){
    p.money += 1.00;
    p.skins -= 1;
    document.getElementById("money").innerHTML = p.money.toFixed(2);
    document.getElementById("skins").innerHTML = p.skins;
  }
  else if(skin > 18){
    p.money += 5.00;
    p.skins -= 1;
    document.getElementById("money").innerHTML = p.money.toFixed(2);
    document.getElementById("skins").innerHTML = p.skins;
  }
}
}

$(document).ready(function(){
  load();
})

updateStats = function(){
  $(".progress-bar-aim").animate({
    width: p.aim + "%"
  }, 0);
  $(".progress-bar-gameSense").animate({
    width: p.gameSense + "%"
  }, 0);
  $(".progress-bar-movement").animate({
    width: p.movement + "%"
  }, 0);
  updateHTML("aim", p.aim);
  updateHTML("gameSense", p.gameSense);
  updateHTML("movement", p.movement);
}

trainStat = function(stat){
  if(p.stat < 100){
    p.stat += 1;
    updateHTML2(stat, p.stat);
    updateStats();
  }
}

trainAim = function(){
  if(p.aim < 100){
    p.aim += 1;
    updateHTML("aim", p.aim);
    updateStats();
  }
};

trainGameSense = function(){
  if(p.gameSense < 100){
    p.gameSense += 1;
    updateHTML("gameSense", p.gameSense);
    updateStats();
  }
};

trainMovement = function(){
  if(p.movement < 100){
    p.movement += 1;
    updateHTML("movement", p.movement);
    updateStats();
  }
};


$(document).ready(function(){
  load();
  checkRank();
  checkFaceitRank();
  updateGear();
  updateStats();
});

window.setInterval(function(){
  save();
}, 1000);
