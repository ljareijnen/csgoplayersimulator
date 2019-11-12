var mouseOwned;
var mouseInit = [
  new Mouse("VicTsing MM057", 11.00),
  new Mouse("Logitech G300s", 20.00),
  new Mouse("Trust GXT 148", 29.00),
  new Mouse("HyperX Pulsefire Surge: $41.00", 41.00),
  new Mouse("Coller Master MasterMouse MM520", 44.00),
  new Mouse("Logitech G502 Hero", 58.00),
  new Mouse("Roccat Kain 120 AIMO", 70.00),
  new Mouse("SteelSeries Rival 710", 78.00),
  new Mouse("Razer Naga Trinity", 94.00),
];

function Mouse(name, price){
  this.name = name;
  this.price = price;
};

mouseName = []; mousePrice = [];
for (var i = 0; i < mouseInit.length; i++){
  var m = mouseInit[i];
  mouseName.push(m.name)
  mousePrice.push(m.price)
};

var screenOwned;
var screenInit = [
  new Screen("Acer KG221Qbmix", 80.00, 75, 21.5),
  new Screen("LG 24MP59G-P", 120.00, 75, 24),
  new Screen("ViewSonic VX2457-MHD", 150.00, 75, 24),
  new Screen("ASUS VG248QE", 204.00, 144, 24),
  new Screen("BenQ EL2870U", 300.00, 60, 28),
  new Screen("ASUS MG279Q", 424.00, 144, 27),
  new Screen("ASUS ROG Swift PG279Q", 610.00, 144, 27),
  new Screen("AOC Agon AG271QG", 667.00, 165, 27),
  new Screen("Acer Predator XB273K", 900.00, 144, 27),
]

function Screen(name, price, refreshRate, inches){
  this.name = name;
  this.price = price;
  this.refreshRate = refreshRate;
  this.inches = inches;
}

screenName = []; screenPrice = []; screenRefreshRate = []; screenInches = [];
for (var i = 0; i < screenInit.length; i++){
  var s = screenInit[i];
  screenName.push(s.name);
  screenPrice.push(s.price);
  screenRefreshRate.push(s.refreshRate);
  screenInches.push(s.inches);
}

var keyboardOwned;
var keyboardInit = [
  new Keyboard("VARR Fighter 2", 39.95),
  new Keyboard("Andromeda RGB", 58.99),
  new Keyboard("Trust GXT 890 Cada", 72.99),
  new Keyboard("Corsair K63 Compact", 82.90),
  new Keyboard("Razer Huntsman Chroma", 109.00),
  new Keyboard("Corsair K68 RGB", 118.00),
  new Keyboard("Logitech G PRO", 127.90),
  new Keyboard("Corsair K95 RGB", 167.90),
  new Keyboard("Logitech G915", 249.00),
];

function Keyboard(name, price){
  this.name = name;
  this.price = price;
};

keyboardName = []; keyboardPrice = [];
for (var i = 0; i < keyboardInit.length; i++){
  var k = keyboardInit[i];
  keyboardName.push(k.name)
  keyboardPrice.push(k.price)
};

var gpuOwned;
var gpuInit = [
  new GPU("Sapphire Radeon RX580 4GB Pulse", 214.00),
  new GPU("EVGA GeForce GTX 1660 Ti XC", 310.00),
  new GPU("MSI 8GB Radeon RX 5700 8G", 400.00),
  new GPU("GiBy8GB D6 RTX 2060 Super Gaming OC", 505.00),
  new GPU("Gigabyte Radeon RX VEGA 64 GAMING OC 8GB", 607.38),
  new GPU("Zotac GeForce GTX 1070 AMP Extreme", 684.99),
  new GPU("HP AMD Radeon Pro WX 7100 8-GB", 751.90),
  new GPU("MSI GeForce RTX 2080 SUPER GAMING X TRIO", 880.81),
  new GPU("MSI GeForce RTX 2080 AERO 8G", 981.89),
];

function GPU(name, price){
  this.name = name;
  this.price = price;
};

gpuName = []; gpuPrice = [];
for (var i = 0; i < gpuInit.length; i++){
  var g = gpuInit[i];
  gpuName.push(g.name)
  gpuPrice.push(g.price)
};

var cpuOwned;
var cpuInit = [
  new CPU("Intel Core i3-9100F processor 3,6 GHz", 101.70),
  new CPU("Intel Core i5-9400F processor 2,9 GHz", 165.00),
  new CPU("Intel Core i5-9600KF processor 3,7 GHz", 231.40),
  new CPU("Intel Core i7-6800K", 333.70),
  new CPU("Intel Core i7-9700KF processor 3,6 GHz", 421.88),
  new CPU("Intel Core i7-5820K processor 3,3 GHz", 525.89),
  new CPU("AMD Ryzen Threadripper 1950X processor 3,4 GHz", 625.90),
  new CPU("Intel Xeon E5-2430 v2 processor 2,5 GHz", 753.89),
  new CPU("Intel Core i7-6900K processor 3,2 GHz", 862.89),
];

function CPU(name, price){
  this.name = name;
  this.price = price;
};

cpuName = []; cpuPrice = [];
for (var i = 0; i < cpuInit.length; i++){
  var c = cpuInit[i];
  cpuName.push(c.name)
  cpuPrice.push(c.price)
};

function upgradeMouse(){
  if(mouseName[p.mouse + 1] !== undefined){
    if(p.money >= mousePrice[p.mouse + 1]){
      p.money -= mousePrice[p.mouse + 1];
      p.mouse += 1;
      updateHTML("money", p.money.toFixed(2));
      updateHTML("mouse", mouseName[p.mouse] + " $" + mousePrice[p.mouse]);
    }
    else(
      alert("You do not have enough money to upgrade your mouse")
    )
  }
  else(
    alert("No better mouse is available (yet)")
  )
}

function upgradeKeyboard(){
  if(p.money >= keyboardPrice[p.keyboard + 1]){
    p.money -= keyboardPrice[p.keyboard + 1];
    p.keyboard += 1;
    updateHTML("money", p.money.toFixed(2));
    updateHTML("keyboard", keyboardName[p.keyboard] + " $" + keyboardPrice[p.keyboard]);
  }
  else(
    alert("You do not have enough money to upgrade your keyboard")
  )
}

function upgradeScreen(){
  if(p.money >= screenPrice[p.screen + 1]){
    p.money -= screenPrice[p.screen + 1];
    p.screen += 1;
    updateHTML("money", p.money.toFixed(2));
    updateHTML("screen", screenName[p.screen] + ", $" + screenPrice[p.screen] + ", " + screenRefreshRate[p.screen] + "hz, " + screenInches[p.screen] + "hz");
  }
  else(
    alert("You do not have enough money to upgrade your screen")
  )
}

function upgradeGPU(){
  if(p.money >= gpuPrice[p.gpu + 1]){
    p.money -= gpuPrice[p.gpu + 1];
    p.gpu += 1;
    updateHTML("money", p.money.toFixed(2));
    updateHTML("gpu", gpuName[p.gpu] + " $" + gpuPrice[p.gpu]);
  }
  else(
    alert("You do not have enough money to upgrade your gpu")
  )
}

function upgradeCPU(){
  if(p.money >= cpuPrice[p.cpu + 1]){
    p.money -= cpuPrice[p.cpu + 1];
    p.cpu += 1;
    updateHTML("money", p.money.toFixed(2));
    updateHTML("cpu", cpuName[p.cpu] + " $" + cpuPrice[p.cpu]);
  }
  else(
    alert("You do not have enough money to upgrade your cpu")
  )
}
