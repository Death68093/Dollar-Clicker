let achievementMenu = document.querySelector("#achievementMenu");
let cheatMenu = document.querySelector(".cheats");
let settingsMenu = document.querySelector("#settingsMenu");
let cheatGuide = document.querySelector("#cheatGuide");
let updateLog = document.querySelector("#updateLog");


document.querySelector(".closeAchievements").addEventListener("click", () => {
  achievementMenu.close();
});

document.querySelector(".closeCheats").addEventListener("click", () => {
  cheatMenu.close();
});

document.querySelector(".closeSettings").addEventListener("click", () => {
  settingsMenu.close();
});

document.querySelector(".closeCheatGuide").addEventListener("click", () => {
  cheatGuide.close();
});

document.querySelector(".closeUpdates").addEventListener("click", () => {
  updateLog.close();
});