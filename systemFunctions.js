// Change Version here
let version = "V1.5"
let versionShow = document.querySelector(".versionShow");
versionShow.textContent = `${version}`
let upShovelStrengthBtn = document.querySelector("#upgradeShovelStrength");
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
console.log(game);
let artifacts = game.digSite.artifacts;
let secrets = game.secrets;
console.log(secrets);
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
  };
  
  if (game.money >= shovel.strength.upCost) {
    upShovelStrengthBtn.classList.add("green");
    upShovelStrengthBtn.classList.remove("red");
  } else {
    upShovelStrengthBtn.classList.add("red");
    upShovelStrengthBtn.classList.remove("green");
  };

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
let shovel = game.digSite.shovel;
let shovelStrengthUpCostShow = document.querySelector(".shovelStrengthUpCostShow");
export function update() {
  updateInt = setInterval(() => {
    shovelStrengthUpCostShow.textContent = `${shovel.strength.upCost}`;
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
    game.money += game.autoPower / 10 * game.mult;
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
    game.timePlayed = 0;
    shovel.power = 100;
    for (let secret in secrets) {
      secrets[secret].found = false;
    };
    
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
    game = {
          money: 0,
          level: 0,
          timePlayed: 0,
          clicks: 0,
          clickPower: 1,
          autoPower: 0,
          mult: 1,
          secrets: {
            version: {
              found: false,
            },
          },

          rebirth: {
            cost: 5000000,
            level: 0,
            multi: 2,
            baseCost: 5000000,
          },

          upgrades: {
            thickFinger: {
              level: 1,
              upCost: 30,
              mult: 1.5,
              baseCost: 30,
            },
            junkPrinter: {
              level: 0,
              upCost: 100,
              power: 10,
              baseCost: 100,
            },
            badPrinter: {
              level: 0,
              upCost: 5000,
              power: 75,
              baseCost: 5000,
            },
            printer: {
              level: 0,
              upCost: 50000,
              power: 500,
              baseCost: 50000,
            },
            okPrinter: {
              level: 0,
              upCost: 500000,
              power: 2500,
              baseCost: 500000,
            },
            goodPrinter: {
              level: 0,
              upCost: 5000000,
              power: 10000,
              baseCost: 5000000,
            },
            greatPrinter: {
              level: 0,
              upCost: 50000000,
              power: 50000,
              baseCost: 50000000,
            },
            superPrinter: {
              level: 0,
              upCost: 500000000,
              power: 500000,
              baseCost: 500000000,
            },
            amazingPrinter: {
              level: 0,
              upCost: 5000000000,
              power: 2500000,
              baseCost: 5000000000,
            },
            bestPrinter: {
              level: 0,
              upCost: 100000000000,
              power: 50000000,
              baseCost: 100000000000,
            },
            secret: {
              magicalPrinter: {
                level: 0,
                upCost: 1000000000000,
                powerMult: 2,
                baseCost: 1000000000000,
              },
            },
          },

          digSite: {
            clicks: 0,
            artifacts: {
              quartz: {
                chance: 40,
                rarity: "common",
                mult: 1.1,
                count: 0,
                name: "Quartz",
              },
              emerald: {
                chance: 25,
                rarity: "uncommon",
                mult: 1.3,
                count: 0,
                name: "Emerald",
              },
              ruby: {
                chance: 15,
                rarity: "rare",
                mult: 1.8,
                count: 0,
                name: "Ruby",
              },
              bloodstone: {
                chance: 10,
                rarity: "epic",
                mult: 2.5,
                count: 0,
                name: "Bloodstone",
              },
              eternalRuby: {
                chance: 7,
                rarity: "legendary",
                mult: 3.4,
                count: 0,
                name: "Eternal Ruby",
              },
              voidDiamond: {
                chance: 3,
                rarity: "mythical",
                mult: 4.3,
                count: 0,
                name: "Void Diamond",
              },
            },
            shovel: {
              strength: {
                power: 100, // Lower is better
                upCost: 50000,
              },
              speed: {
                speed: 2000, // Lower is better
                upCost: 50000,
              },
            },
          },

          achievements: {
            gettingStarted: {
              name: "Getting Started",
              desc: "Click 10 times",
              requirement: 10,
              unlocked: false,
              message: "You clicked the dollar 10 times!",
            },
            easyEnough: {
              name: "Easy enough",
              desc: "Click 100 times",
              requirement: 100,
              unlocked: false,
              message: "How does your finger feel?",
            },
            clickAddiction: {
              name: "Click Addiction",
              desc: "Click 1,000 times",
              requirement: 1000,
              unlocked: false,
              message: "Are you not tired yet?",
            },
            ironFinger: {
              name: "Iron Finger",
              desc: "Click 10,000 times",
              requirement: 10000,
              unlocked: false,
              message: "You <em>probably</em> need to get a life...",
            },
            maniacClicker: {
              name: "Maniac Clicker",
              desc: "Click 100,000 times",
              requirement: 100000,
              unlocked: false,
              message:
                "Yeah.. You <strong>definitely</strong> need to get a life...",
            },
            firstUpgrade: {
              name: "You Faker!",
              desc: "Buy the first printer",
              requirement: 1,
              unlocked: false,
              message: "What? You're printing money?!",
            },
            officeSetup: {
              name: "Office Setup",
              desc: "Own 10 printers total",
              requirement: 10,
              unlocked: false,
              message: "Making some dough now!",
            },
            scamArtist: {
              name: "Scam Artist",
              desc: "Own 50 printers total",
              requirement: 50,
              unlocked: false,
              message: "You better watch out for the cops!",
            },
            noob: {
              name: "Noob",
              desc: "Play for 1 minute",
              requirement: 60,
              unlocked: false,
              message: "Thanks for playing!",
            },
            beginner: {
              name: "Beginner",
              desc: "Play for 10 minutes",
              requirement: 600,
              unlocked: false,
              message: "You're still here?",
            },
            intermediate: {
              name: "Intermediate Gamer",
              desc: "Play for 30 minutes",
              requirement: 1800,
              unlocked: false,
              message: "Wow, you must really like this game!",
            },
            player: {
              name: "Player",
              desc: "Play for 1 hour",
              requirement: 3600,
              unlocked: false,
              message: "The money must really be addicting...",
            },
            gamer: {
              name: "Gamer",
              desc: "Play for 2 hours",
              requirement: 7200,
              unlocked: false,
              message: "Ok now, you know you can take a break, right?",
            },
            hardcoreGamer: {
              name: "Hardcore Gamer",
              desc: "Play for 5 hours",
              requirement: 18000,
              unlocked: false,
              message: "I have an idea! GO TOUCH GRASS you bum!",
            },
            cheater: {
              name: "CHEATER!!!",
              desc: "You used cheats",
              unlocked: false,
              message: "I can't believe this... you lazy bum..",
            },
          },
          
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
