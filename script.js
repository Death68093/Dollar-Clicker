import { update, initialize } from "./systemFunctions.js";
import {
  upgradeThickFinger,
  upgradeJunkPrinter,
  upgradeBadPrinter,
  upgradePrinter,
  upgradeOkPrinter,
  upgradeGoodPrinter,
  upgradeGreatPrinter,
  upgradeSuperPrinter,
  upgradeAmazingPrinter,
  upgradeBestPrinter,
  upgradeMagicalPrinter,
} from "./upgradeButtons.js";
import {
  mainBtn,
  moneyShow,
  clicksShow,
  clickStrengthShow,
  autoPowerShow,
  upgradeClickBtn,
  buyJunkPrinterBtn,
  buyBadPrinterBtn,
  buyPrinterBtn,
  buyOkPrinterBtn,
  buyGoodPrinterBtn,
  buyGreatPrinterBtn,
  buySuperPrinterBtn,
  buyAmazingPrinterBtn,
  buyBestPrinterBtn,
  buyMagicalPrinterBtn,
  thickFingerCostShow,
  junkPrinterCostShow,
  badPrinterCostShow,
  printerCostShow,
  okPrinterCostShow,
  goodPrinterCostShow,
  greatPrinterCostShow,
  superPrinterCostShow,
  amazingPrinterCostShow,
  bestPrinterCostShow,
  magicalPrinterCostShow,
} from "./variables.js";

let game = window.game;

// Load saved data
let lastUpdate = localStorage.getItem("lastUpdate") ? parseInt(localStorage.getItem("lastUpdate"), 10) : Date.now();
if (localStorage.getItem("money")) {
  game.money = parseInt(localStorage.getItem("money"), 10);
}

// Calculate offline earnings
function calculateOfflineEarnings() {
  const now = Date.now();
  const elapsedTime = (now - lastUpdate) / 1000;
  const offlineEarnings = Math.floor(elapsedTime * game.autoPower / 2);
  game.money += offlineEarnings;
  moneyShow.textContent = game.money;
  console.log(`You earned ${offlineEarnings} money while away!`);
}

// Background generation
setInterval(() => {
  if (game.rebirth.level >= 1) {
    Math.round(game.money += game.autoPower * game.rebirth.level * game.mult);
  lastUpdate = Date.now();
  localStorage.setItem("money", game.money);
  localStorage.setItem("lastUpdate", lastUpdate);
  moneyShow.textContent = game.money;
    
  } else {
    Math.round(game.money += game.autoPower);
  lastUpdate = Date.now();
  localStorage.setItem("money", game.money);
  localStorage.setItem("lastUpdate", lastUpdate);
  moneyShow.textContent = game.money;
  };
  game.money = Math.round(game.money);
}, 1000);

// Detect when the user returns
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    calculateOfflineEarnings();
  }
});

upgradeClickBtn.addEventListener("click", () => {
  upgradeThickFinger(game, moneyShow, clickStrengthShow, thickFingerCostShow);
});

buyJunkPrinterBtn.addEventListener("click", () => {
  upgradeJunkPrinter(game, moneyShow, junkPrinterCostShow);
});

buyBadPrinterBtn.addEventListener("click", () => {
  upgradeBadPrinter(game, moneyShow, badPrinterCostShow);
});

buyPrinterBtn.addEventListener("click", () => {
  upgradePrinter(game, moneyShow, printerCostShow);
});

buyOkPrinterBtn.addEventListener("click", () => {
  upgradeOkPrinter(game, moneyShow, okPrinterCostShow);
});

buyGoodPrinterBtn.addEventListener("click", () => {
  upgradeGoodPrinter(game, moneyShow, goodPrinterCostShow);
});

buyGreatPrinterBtn.addEventListener("click", () => {
  upgradeGreatPrinter(game, moneyShow, greatPrinterCostShow);
});

buySuperPrinterBtn.addEventListener("click", () => {
  upgradeSuperPrinter(game, moneyShow, superPrinterCostShow);
});

buyAmazingPrinterBtn.addEventListener("click", () => {
  upgradeAmazingPrinter(game, moneyShow, amazingPrinterCostShow);
});

buyMagicalPrinterBtn.addEventListener("click", () => {
  upgradeMagicalPrinter(game, moneyShow, magicalPrinterCostShow);
});

const kaching = new Audio('https://cdn.glitch.global/6ef22356-510c-42f2-98df-a959a784c146/KaChing?v=1742847889460');

mainBtn.addEventListener("click", () => {
  kaching.pause();
  kaching.currentTime = 0;
  kaching.play();
  game.clicks++;
  clicksShow.forEach((cs) => (cs.textContent = game.clicks));

  console.log("Multiplier Before Click:", game.mult);
  console.log("Click Power:", game.clickPower);

  let multiplier = game.rebirth.level > 0 ? game.rebirth.level * game.mult : game.mult;
  game.money += Math.round(game.clickPower * multiplier); // Ensure multiplication

  console.log("Money After Click:", game.money);
  moneyShow.textContent = game.money;
});

let updateLogShow = document.querySelector(".updateLogShow");
let updateLog = document.querySelector("#updateLog");

updateLogShow.addEventListener("click", () => {
  updateLog.showModal();
});



window.onload = () => {
  initialize();
  calculateOfflineEarnings();
};
