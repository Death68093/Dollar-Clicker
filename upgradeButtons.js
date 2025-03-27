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
  magicalPrinterCostShow 
} from './variables.js';
let game = window.game;

const purchase = new Audio('https://cdn.glitch.global/6ef22356-510c-42f2-98df-a959a784c146/Purchase?v=1742847967885');

export function upgradeThickFinger(game, moneyShow, clickStrengthShow, thickFingerCostShow) {
  const upgradeClickBtn = document.querySelector("#upgradeClick");
  upgradeClickBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.thickFinger.upCost) {
      purchase.play();
      game.money -= game.upgrades.thickFinger.upCost;
      game.upgrades.thickFinger.upCost = Math.round(game.upgrades.thickFinger.upCost * 2.4);
      game.clickPower = game.clickPower * game.upgrades.thickFinger.mult;
      
      clickStrengthShow.forEach(cs => cs.textContent = game.clickPower);
      thickFingerCostShow.forEach(cs => cs.textContent = game.upgrades.thickFinger.upCost);
      moneyShow.textContent = game.money;
    }
  });
}

export function upgradeJunkPrinter(game, moneyShow, junkPrinterCostShow) {
  const buyJunkPrinterBtn = document.querySelector("#buyJunkPrinter");
  buyJunkPrinterBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.junkPrinter.upCost) {
      purchase.play();
      
      game.money -= game.upgrades.junkPrinter.upCost;
      game.upgrades.junkPrinter.level++;
      game.autoPower += game.upgrades.junkPrinter.power;
      
      game.upgrades.junkPrinter.upCost = Math.round(game.upgrades.junkPrinter.upCost * 2.5);
      
      junkPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.junkPrinter.upCost);
      moneyShow.textContent = game.money;
    }
  });
}

export function upgradeBadPrinter(game, moneyShow, badPrinterCostShow) {
  const buyBadPrinterBtn = document.querySelector("#buyBadPrinter");
  buyBadPrinterBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.badPrinter.upCost) {
      purchase.play();
      
      game.money -= game.upgrades.badPrinter.upCost;
      game.upgrades.badPrinter.level++;
      game.autoPower += game.upgrades.badPrinter.power;
      
      game.upgrades.badPrinter.upCost = Math.round(game.upgrades.badPrinter.upCost * 2.5);
      
      badPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.badPrinter.upCost);
      moneyShow.textContent = game.money;
    }
  });
}

export function upgradePrinter(game, moneyShow, printerCostShow) {
  const buyPrinterBtn = document.querySelector("#buyPrinter");
  buyPrinterBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.printer.upCost) {
      purchase.play();
      
      game.money -= game.upgrades.printer.upCost;
      game.upgrades.printer.level++;
      game.autoPower += game.upgrades.printer.power;
      
      game.upgrades.printer.upCost = Math.round(game.upgrades.printer.upCost * 2.5);
      
      printerCostShow.forEach(cs => cs.textContent = game.upgrades.printer.upCost);
      moneyShow.textContent = game.money;
    }
  });
}

export function upgradeOkPrinter(game, moneyShow, okPrinterCostShow) {
  const buyOkPrinterBtn = document.querySelector("#buyOkPrinter");
  buyOkPrinterBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.okPrinter.upCost) {
      purchase.play();
      
      game.money -= game.upgrades.okPrinter.upCost;
      game.upgrades.okPrinter.level++;
      game.autoPower += game.upgrades.okPrinter.power;
      
      game.upgrades.okPrinter.upCost = Math.round(game.upgrades.okPrinter.upCost * 2.5);
      
      okPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.okPrinter.upCost);
      moneyShow.textContent = game.money;
    }
  });
}

export function upgradeGoodPrinter(game, moneyShow, goodPrinterCostShow) {
  const buyGoodPrinterBtn = document.querySelector("#buyGoodPrinter");
  buyGoodPrinterBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.goodPrinter.upCost) {
      purchase.play();
      
      game.money -= game.upgrades.goodPrinter.upCost;
      game.upgrades.goodPrinter.level++;
      game.autoPower += game.upgrades.goodPrinter.power;
      
      game.upgrades.goodPrinter.upCost = Math.round(game.upgrades.goodPrinter.upCost * 2.5);
      
      goodPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.goodPrinter.upCost);
      moneyShow.textContent = game.money;
    }
  });
}

export function upgradeGreatPrinter(game, moneyShow, greatPrinterCostShow) {
  const buyGreatPrinterBtn = document.querySelector("#buyGreatPrinter");
  buyGreatPrinterBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.greatPrinter.upCost) {
      purchase.play();
      
      game.money -= game.upgrades.greatPrinter.upCost;
      game.upgrades.greatPrinter.level++;
      game.autoPower += game.upgrades.greatPrinter.power;
      
      game.upgrades.greatPrinter.upCost = Math.round(game.upgrades.greatPrinter.upCost * 2.5);
      
      greatPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.greatPrinter.upCost);
      moneyShow.textContent = game.money;
    }
  });
}

export function upgradeSuperPrinter(game, moneyShow, superPrinterCostShow) {
  const buySuperPrinterBtn = document.querySelector("#buySuperPrinter");
  buySuperPrinterBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.superPrinter.upCost) {
      purchase.play();
      
      game.money -= game.upgrades.superPrinter.upCost;
      game.upgrades.superPrinter.level++;
      game.autoPower += game.upgrades.superPrinter.power;
      
      game.upgrades.superPrinter.upCost = Math.round(game.upgrades.superPrinter.upCost * 2.5);
      
      superPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.superPrinter.upCost);
      moneyShow.textContent = game.money;
    }
  });
}

export function upgradeAmazingPrinter(game, moneyShow, amazingPrinterCostShow) {
  const buyAmazingPrinterBtn = document.querySelector("#buyAmazingPrinter");
  buyAmazingPrinterBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.amazingPrinter.upCost) {
      purchase.play();
      
      game.money -= game.upgrades.amazingPrinter.upCost;
      game.upgrades.amazingPrinter.level++;
      game.autoPower += game.upgrades.amazingPrinter.power;
      
      game.upgrades.amazingPrinter.upCost = Math.round(game.upgrades.amazingPrinter.upCost * 2.5);
      
      amazingPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.amazingPrinter.upCost);
      moneyShow.textContent = game.money;
    }
  });
}

export function upgradeBestPrinter(game, moneyShow, bestPrinterCostShow) {
  const buyBestPrinterBtn = document.querySelector("#buyBestPrinter");
  buyBestPrinterBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.bestPrinter.upCost) {
      purchase.play();
      
      game.money -= game.upgrades.bestPrinter.upCost;
      game.upgrades.bestPrinter.level++;
      game.autoPower += game.upgrades.bestPrinter.power;
      
      game.upgrades.bestPrinter.upCost = Math.round(game.upgrades.bestPrinter.upCost * 2.5);
      
      bestPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.bestPrinter.upCost);
      moneyShow.textContent = game.money;
    }
  });
}

export function upgradeMagicalPrinter(game, moneyShow, magicalPrinterCostShow) {
  const buyMagicalPrinterBtn = document.querySelector("#buyMagicalPrinter");
  buyMagicalPrinterBtn.addEventListener("click", () => {
    if (game.money >= game.upgrades.secret.magicalPrinter.upCost) {
      purchase.play();
      
      game.money -= game.upgrades.secret.magicalPrinter.upCost;
      game.upgrades.secret.magicalPrinter.level++;
      game.autoPower *= game.upgrades.secret.magicalPrinter.powerMult;
      
      game.upgrades.secret.magicalPrinter.upCost = Math.round(game.upgrades.secret.magicalPrinter.upCost * 2.5);
      
      magicalPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.secret.magicalPrinter.upCost);
      moneyShow.textContent = Math.round(game.money);
    }
  });
}

setInterval(() => {
  game.money = Math.round(game.money);
}, 0);