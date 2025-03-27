let game = window.game;
let cheatMenuBtn = document.querySelector("#showCheats");
let cheatMenu = document.querySelector(".cheats");
let cheatGuide = document.querySelector("#cheatGuide");
let mainBtn = document.querySelector("#mainBtn");

// Cheat buttons
let autoClickerCheatBtn = document.querySelector(".autoClickerCheat");
let gainMoneyCheatBtn = document.querySelector(".gainMoney");

let runCheatBtn = document.querySelector("#runCheat");
let cheatGuideBtn = document.querySelector("#cheatGuideBtn");

// Close buttons
let closeCheatMenu = document.querySelector("#closeCheatMenu");
let closeCheatGuide = document.querySelector("#closeCheatGuide");

// Auto Clicker Cheat
autoClickerCheatBtn.addEventListener("click", () => {
  setInterval(() => {
    mainBtn.click();
    mainBtn.click();
    mainBtn.click();
    mainBtn.click();
    mainBtn.click();
  }, 10);
});

gainMoneyCheatBtn.addEventListener("click", () => {
  game.money += 100000
});

const buttonClicked = new Audio(
  "https://cdn.glitch.global/6ef22356-510c-42f2-98df-a959a784c146/ButtonClickSound?v=1742848002928"
);
// Show Cheat Menu (after watching ad)
cheatMenuBtn.addEventListener("click", () => {
  buttonClicked.play();

  let hasSeenAd = sessionStorage.getItem("viewedAd");
  if (hasSeenAd === "true") {
    cheatMenu.showModal();
  } else {
    let userConfirmed = confirm(
      "Watch an ad to unlock cheats! Click OK to continue."
    );
    if (userConfirmed) {
      let newWindow = window.open(
        "https://www.youtube.com/@death68093?sub_confirmation=1",
        "_blank"
      );
      if (!newWindow || newWindow.closed) {
        alert("Ad blocked. Please disable your pop-up blocker.");
      } else {
        sessionStorage.setItem("viewedAd", "true");
        alert("Cheats unlocked!");
        localStorage.setItem("usedCheats", "true");
        cheatMenu.showModal();
      }
    } else {
      alert("You must watch an ad to use cheats.");
    }
  }
});

// Run Cheat
runCheatBtn.addEventListener("click", () => {
  let useCheat = confirm(
    "*WARNING* Only use cheats you trust! Click 'OK' to use the cheat!"
  );

  if (useCheat) {
    let userCheat = document.querySelector("#cheatInput").value.trim();
    if (userCheat) {
      try {
        eval(userCheat);
        alert("Cheat executed!");
      } catch (error) {
        alert("Error in cheat: " + error.message);
      }
    } else {
      alert("No cheat saved!");
    }
  }
});

// Open Cheat Guide
cheatGuideBtn.addEventListener("click", () => {
  document.querySelector("#cheatVariables").textContent = `
game.money  - Player's money
game.clicks  - Total clicks
game.clickPower  - Click strength
game.autoPower  - Money per second
game.level  - Player level
game.timePlayed  - Time played (seconds)
game.upgrades.thickFinger.level  - Thick Finger upgrade level
game.upgrades.thickFinger.upCost  - Cost to upgrade Thick Finger
game.upgrades.junkPrinter.level  - Junk Printer level
game.upgrades.junkPrinter.upCost  - Cost to upgrade Junk Printer
game.upgrades.junkPrinter.power  - Junk Printer power (money/sec)
game.upgrades.secret.magicalPrinter.level  - Magical Printer level
game.upgrades.secret.magicalPrinter.upCost  - Cost to upgrade Magical Printer
game.upgrades.secret.magicalPrinter.powerMult  - Magical Printer multiplier
`;

  document.querySelector("#cheatFunctions").textContent = `
document.querySelector("#mainBtn").click();  - Simulate a click
setInterval(() => { /* code */ }, time);  - Run code every time ms
setTimeout(() => { /* code */ }, time);  - Run code once after time ms
alert("Message");  - Show a popup alert
console.log("Message");  - Log a message to the console
sessionStorage.setItem("key", "value");  - Save data for session
sessionStorage.getItem("key");  - Get saved session data
`;

  document.querySelector("#cheatExamples").textContent = `
game.money += 1000000;  - Infinite Money
setInterval(() => game.money += 100, 1000);  - Auto Money Every Second
setInterval(() => document.querySelector("#mainBtn").click(), 100);  - Auto Clicker
game.clickPower = 99999999;  - Max Click Strength
for (let upgrade in game.upgrades) { game.upgrades[upgrade].level = 100; game.upgrades[upgrade].upCost = 0; }  - Free Upgrades
`;

  cheatGuide.showModal();
});

// Close Cheat Guide
closeCheatGuide.addEventListener("click", () => {
  cheatGuide.close();
});

// Close Cheat Menu
closeCheatMenu.addEventListener("click", () => {
  cheatMenu.close();
});
