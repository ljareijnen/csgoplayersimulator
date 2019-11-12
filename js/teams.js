var teams;
let teamInit = [
  new Team("Astralis", 817, 0, "Xyp9x", "dupreeh", "gla1ve", "device", "Magisk", 0),
  new Team("FaZe", 363, 1, "olofmeister", "NiKo", "rain", "coldzera", "broky", 1),
  new Team("Fnatic", 750, 2, "flusha", "JW", "KRIMZ", "Golden", "Brollan", 2),
  new Team("Avangar", 406, 3, "AdreN", "SANJI", "buster", "qikert", "Jame", 0),
  new Team("Evil Geniuses", 900, 4, "stanislaw", "tarik", "Brehze", "Ethan", "CeRq", 0),
  new Team("Liquid", 620, 5, "nitr0", "NAF", "EliGE", "Stewie2k", "Twistzz", 0),
  new Team("Vitality", 478, 6, "shox", "RpK", "apEC", "ALEX", "ZywOo", 0),
  new Team("NiP", 395, 7, "f0rest", "twist", "Lekr0", "REZ", "Plopski", 1),
  new Team("100 Thieves", 385, 8, "jks", "AZR", "jkaem", "Gratisfaction", "Liazz", 0),
  new Team("Furia", 359, 9, "HEN1", "arT", "yuurih", "VINI", "KSCERATO", 2),
  new Team("mousesports", 338, 10, "karrigan", "chrisJ", "woxic", "frozen", "ropz", 1),
  new Team("Natus Vincere", 336, 11, "GuardiaN", "flamie", "s1mple", "electornic", "Boombl4", 0),
  new Team("G2", 280, 12, "JaCkz", "huNter", "kennyS", "AmaNEk", "nexa", 1),
  new Team("ENCE", 266, 13, "allu", "Aerial", "suNny", "xseveN", "sergej", 0),
  new Team("MIBR", 250, 14, "FalleN", "kNgV-", "fer", "LUCAS1", "TACO", 1),
  new Team("forZe", 168, 15, "facecrack", "almacer", "FL1T", "xsepower", "jerry", 2),
  new Team("Heroic", 159, 16, "Snappi", "cadiaN", "es3tag", "b0RUP", "stavn", 2),
  new Team("CR4ZY", 145, 17, "emi", "LETN1", "ottoNd", "SHiPZ", "EspiranTo", 1),
  new Team("Grayhound", 139, 18, "Sico", "dexter", "INS", "malta", "DickStacy", 2),
  new Team("Tricked", 135, 19, "HUNDEN", "Bubzkji", "acoR", "sjuush", "roej", 2),
  new Team("North", 117, 19, "cajunb", "aizy", "Kjaerbye", "JUGi", "gade", 1),
  new Team("Virtus.pro", 83, 19, "Snax", "MICHU", "snatchi", "phr", "Vegi", 2),
  new Team("Sprout", 76, 19, "syrsoN", "Spiidi", "denis", "k1to", "faveN", 2),
  new Team("BIG", 74, 19, "tabseN", "tiziaN", "nex", "XANTARES", "smooya", 2),
  new Team("Illuminar", 72, 19, "innocent", "reatz", "oskarish", "mono", "STOMP", 2),
  new Team("Aristocracy", 63, 19, "TaZ", "MINISE", "rallen", "mouz", "dicha", 2),
  new Team("Sharks", 56, 19, "exit", "leo_druNky", "jnt", "meyern", "Luken", 2),
  new Team("Envy", 54, 19, "FugLy", "ANDROID", "Nifty", "ryann", "s0m", 2),
  new Team("Hard Legion", 53, 19, "kinqie", "svyat", "Krad", "speed4k", "Forester", 1),
  new Team("HAVU", 48, 19, "sAw", "ZOREE", "sLowi", "doto", "hoody", 2),
  new Team("team1", 48, 19, "a", "b", "c", "d", "e", 2),
  new Team("team2", 48, 19, "f", "g", "h", "i", "j", 2),
];

function Team(name, points, id, player1, player2, player3, player4, player5, legendStatus){
  this.name = name;
  this.points = points;
  this.id = id;
  this.player1 = player1;
  this.player2 = player2;
  this.player3 = player3;
  this.player4 = player4;
  this.player5 = player5;
  this.legendStatus = legendStatus
};

playTournament = function(){
  for (var i = 0; i < (teamInit.length / 2); i++){
    teamInit[i].points = (teamInit[i].points / 2);
    teamInit[19-i].points = (teamInit[19-i].points * 2);
  }
  rankTeams();
}

teamName = []; teamPoints = []; teamId = []; teamPlayer1 = []; teamPlayer2 = []; teamPlayer3 = []; teamPlayer4 = []; teamPlayer5 = []; legendStatus = [];
for (var i = 0; i < teamInit.length; i++){
  var t = teamInit[i];
  teamName.push(t.name)
  teamPoints.push(t.points)
  teamId.push(t.id)
  teamPlayer1.push(t.player1)
  teamPlayer2.push(t.player2)
  teamPlayer3.push(t.player3)
  teamPlayer4.push(t.player4)
  teamPlayer5.push(t.player5)
  legendStatus.push(t.legendStatus)
};



let sorted = teamInit.sort((a, b) => b.points - a.points);

rankTeams = function(){
  sorted = teamInit.sort((a, b) => b.points - a.points);
  for (var i = 0; i < teamInit.length; i++){
    $(".ranking").append("<li " + "id=" + i + " onclick=\"displayTeamStats(this.id)\">" + sorted[i].name + ": " + sorted[i].points + "</li>")
  }
  var rankList = document.getElementById("rankList").getElementsByTagName("li");


  //  for (var i = 0; i < teamInit.length; i++){
  //    rankList[i].addEventListener("click", displayTeamStats);
  //  }
}

var  displayTeamStats = function(id){
  $("#teamInfo").empty()
  $("#teamInfo").append("<p><b>" + sorted[id].name + ":</b> " + sorted[id].points +
                        "<br>" + "<b>This team consists of:</b> " +
                        "<br>-" + sorted[id].player1 +
                        "<br>-" + sorted[id].player2 +
                        "<br>-" + sorted[id].player3 +
                        "<br>-" + sorted[id].player4 +
                        "<br>-" + sorted[id].player5 +
                        "<br>" +
                        "</p>");
};

setupMajor = function(){
  sorted = teamInit.sort((a, b) => b.points - a.points);
  for (var i = 0; i < teamInit.length; i++){
    if(sorted[i].legendStatus === 0){
      console.log(sorted[i].name);
    };
  };
};

setupMinor = function(){

}


setupMinorQualifier = function(){
  sorted = teamInit.sort((a, b) => b.points - a.points);
  for (var i = 0; i < teamInit.length; i++){
    if(sorted[i].legendStatus === 2){
      let minorQualifierTeams = [];
      console.log(sorted[i].name);
      minorQualifierTeams.push(sorted[i]);
      $("#mqgs").append("a</br>" + minorQualifierTeams[i].name);
    };
  };
};


$(document).ready(function(){
  rankTeams();
})
