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
  timePlayedShow,
  settingsMenu,
} from "./variables.js";
let game = window.game;
let artifacts = game.digSite.artifacts;
export function updateButtons() {
  // Function to ensure buttons are only hidden once and never again
  function showButtonOnce(button, condition) {
    if (condition && button.classList.contains("hidden")) {
      button.classList.remove("hidden");
      switch (button) {
        case buyBadPrinterBtn:
          badPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.badPrinter.upCost);
          break;
        case buyPrinterBtn:
          printerCostShow.forEach(cs => cs.textContent = game.upgrades.printer.upCost);
          break;
        case buyOkPrinterBtn:
          okPrinterCostShow.forEach(cs => cs.textContent = game.upgrades.okPrinter.upCost);
          break;
        case buyGoodPrinterBtn:
          goodPrinterCostShow.forEach(cs => {cs.textContent = game.upgrades.goodPrinter.upCost});
          break;
        case buyGreatPrinterBtn:
          greatPrinterCostShow.forEach(cs => {cs.textContent = game.upgrades.greatPrinter.upCost});
          break;
        case buySuperPrinterBtn:
          superPrinterCostShow.forEach(cs => {cs.textContent = game.upgrades.superPrinter.upCost});
          break;
        case buyAmazingPrinterBtn:
          amazingPrinterCostShow.forEach(cs => {cs.textContent = game.upgrades.amazingPrinter.upCost});
          break;
        case buyBestPrinterBtn:
          bestPrinterCostShow.forEach(cs => {cs.textContent = game.upgrades.bestPrinter.upCost});
          break;
        case buyMagicalPrinterBtn:
          magicalPrinterCostShow.forEach(cs => {cs.textContent = game.upgrades.magicalPrinter.upCost});
          break;
      };
    }
  }

  // Thick Finger Upgrade
  if (game.money >= game.upgrades.thickFinger.upCost) {
    upgradeClickBtn.classList.add("green");
    upgradeClickBtn.classList.remove("red");
  } else {
    upgradeClickBtn.classList.add("red");
    upgradeClickBtn.classList.remove("green");
  }

  // Junk Printer Upgrade
  if (game.money >= game.upgrades.junkPrinter.upCost) {
    buyJunkPrinterBtn.classList.add("green");
    buyJunkPrinterBtn.classList.remove("red");
  } else {
    buyJunkPrinterBtn.classList.add("red");
    buyJunkPrinterBtn.classList.remove("green");
  }

  // Always show the first 3 upgrades
  showButtonOnce(
    buyJunkPrinterBtn,
    game.money >= game.upgrades.junkPrinter.upCost
  );
  showButtonOnce(
    buyBadPrinterBtn,
    game.money >= game.upgrades.badPrinter.upCost
  );
  showButtonOnce(buyPrinterBtn, game.money >= game.upgrades.printer.upCost);

  // Bad Printer Upgrade
  if (game.money >= game.upgrades.badPrinter.upCost) {
    buyBadPrinterBtn.classList.add("green");
    buyBadPrinterBtn.classList.remove("red");
  } else {
    buyBadPrinterBtn.classList.add("red");
    buyBadPrinterBtn.classList.remove("green");
  }

  // Printer Upgrade
  if (game.money >= game.upgrades.printer.upCost) {
    buyPrinterBtn.classList.add("green");
    buyPrinterBtn.classList.remove("red");
  } else {
    buyPrinterBtn.classList.add("red");
    buyPrinterBtn.classList.remove("green");
  }

  // OK Printer Upgrade
  if (game.money >= game.upgrades.okPrinter.upCost) {
    buyOkPrinterBtn.classList.add("green");
    buyOkPrinterBtn.classList.remove("red");
  } else {
    buyOkPrinterBtn.classList.add("red");
    buyOkPrinterBtn.classList.remove("green");
  }

  // Good Printer Upgrade
  if (game.money >= game.upgrades.goodPrinter.upCost) {
    buyGoodPrinterBtn.classList.add("green");
    buyGoodPrinterBtn.classList.remove("red");
  } else {
    buyGoodPrinterBtn.classList.add("red");
    buyGoodPrinterBtn.classList.remove("green");
  }

  // Great Printer Upgrade
  if (game.money >= game.upgrades.greatPrinter.upCost) {
    buyGreatPrinterBtn.classList.add("green");
    buyGreatPrinterBtn.classList.remove("red");
  } else {
    buyGreatPrinterBtn.classList.add("red");
    buyGreatPrinterBtn.classList.remove("green");
  }

  // Super Printer Upgrade
  if (game.money >= game.upgrades.superPrinter.upCost) {
    buySuperPrinterBtn.classList.add("green");
    buySuperPrinterBtn.classList.remove("red");
  } else {
    buySuperPrinterBtn.classList.add("red");
    buySuperPrinterBtn.classList.remove("green");
  }

  // Amazing Printer Upgrade
  if (game.money >= game.upgrades.amazingPrinter.upCost) {
    buyAmazingPrinterBtn.classList.add("green");
    buyAmazingPrinterBtn.classList.remove("red");
  } else {
    buyAmazingPrinterBtn.classList.add("red");
    buyAmazingPrinterBtn.classList.remove("green");
  }

  // Best Printer Upgrade
  if (game.money >= game.upgrades.bestPrinter.upCost) {
    buyBestPrinterBtn.classList.add("green");
    buyBestPrinterBtn.classList.remove("red");
  } else {
    buyBestPrinterBtn.classList.add("red");
    buyBestPrinterBtn.classList.remove("green");
  }

  // Magical Printer Upgrade
  if (game.money >= game.upgrades.secret.magicalPrinter.upCost) {
    buyMagicalPrinterBtn.classList.add("green");
    buyMagicalPrinterBtn.classList.remove("red");
  } else {
    buyMagicalPrinterBtn.classList.add("red");
    buyMagicalPrinterBtn.classList.remove("green");
  }

  // Make buttons visible if the player has enough money for the upgrade and the button hasn't been shown before
      
  showButtonOnce(buyBadPrinterBtn, game.money >= game.upgrades.badPrinter.upCost);
  showButtonOnce(buyPrinterBtn, game.money >= game.upgrades.printer.upCost);
  showButtonOnce(buyOkPrinterBtn, game.money >= game.upgrades.okPrinter.upCost);
  showButtonOnce(buyGoodPrinterBtn,game.money >= game.upgrades.goodPrinter.upCost);
  showButtonOnce(buyGreatPrinterBtn,game.money >= game.upgrades.greatPrinter.upCost);
  showButtonOnce(buySuperPrinterBtn, game.money >= game.upgrades.superPrinter.upCost);
  
  showButtonOnce(
    buyAmazingPrinterBtn,
    game.money >= game.upgrades.amazingPrinter.upCost
  );
  
  showButtonOnce(
    buyBestPrinterBtn,
    game.money >= game.upgrades.bestPrinter.upCost
  );
  
  showButtonOnce(
    buyMagicalPrinterBtn,
    game.money >= game.upgrades.secret.magicalPrinter.upCost
  );
}

let updateInt;
let showMult = document.querySelector(".showMult");
export function update() {
  updateInt = setInterval(() => {
    showMult.textContent = game.mult;
    moneyShow.textContent = Math.round(game.money);
    clicksShow.forEach((cs) => (cs.textContent = game.clicks));
    clickStrengthShow.forEach((cs) => (cs.textContent = game.clickPower));
    autoPowerShow.forEach((cs) => (cs.textContent = game.autoPower));
    thickFingerCostShow.forEach(
      (cs) => (cs.textContent = game.upgrades.thickFinger.upCost)
    );
    junkPrinterCostShow.forEach(
      (cs) => (cs.textContent = game.upgrades.junkPrinter.upCost)
    );
    timePlayedShow.forEach((cs) => (cs.textContent = game.timePlayed));
    updateButtons();
  }, 100);

  setInterval(() => {
    game.money += game.autoPower / 10;
    moneyShow.textContent = Math.round(game.money);
  }, 100);

  setInterval(() => {
    game.timePlayed++;
  }, 1000);
}

export function initialize() {
  thickFingerCostShow.forEach(
    (cs) => (cs.textContent = game.upgrades.thickFinger.upCost)
  );
  junkPrinterCostShow.forEach(
    (cs) => (cs.textContent = game.upgrades.junkPrinter.upCost)
  );
  autoPowerShow.forEach((cs) => (cs.textContent = game.autoPower));
  moneyShow.textContent = game.money;
  update();
}

let settingsBtn = document.querySelector("#showSettings");
settingsBtn.addEventListener("click", () => {
  settingsMenu.showModal();
});

let showAchievementsBtn = document.querySelector("#showAchievements");
let achievementMenu = document.querySelector("#achievementMenu");

showAchievementsBtn.addEventListener("click", () => {
  achievementMenu.showModal();
});

let resetBtn = document.querySelector("#resetGame");
resetBtn.addEventListener("click", () => {
  let restart = confirm(
    "Are you sure you want to reset ALL your progress! This can only be undone with HARD WORK!"
  );

  if (restart) {
    let viewedAd;
    clearInterval(updateInt);

    if (sessionStorage.getItem("viewedAd") === "true") {
        viewedAd = true;
    }

    localStorage.clear();
    sessionStorage.clear();

    if (viewedAd) {
        sessionStorage.setItem("viewedAd", "true");
    }
    
    game.money = 0;
    game.clicks = 0;
    game.clickPower = 1;
    game.autoPower = 0;
    game.mult = 1;
    
    for (let artifact in artifacts) {
      artifacts[artifact].count = 0;
      console.log(artifacts[artifact]);
    }
    for (let key in game.upgrades) {
      let upgrade = game.upgrades[key];

      upgrade.level = 0;
      upgrade.upCost = upgrade.baseCost;

      console.log(upgrade);
    }
    for (let achievement in game.achievements) {
      game.achievements[achievement].unlocked = false;
    };



    console.log(game);

    localStorage.setItem("save", JSON.stringify(game));
    console.log("save:", game);
    window.location.reload();
}

});

let saveInt = setInterval(() => {
  localStorage.setItem("save", JSON.stringify(window.game));
}, 300);
