let game = window.game;
let achievements = {
  // Click achievements
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
    name: "Click Addiciton",
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
    message: `You <em>probably</em> need to get a life...`
  },
  maniacClicker: {
    name: "Maniac Clicker",
    desc: "Click 100,000",
    requirement: 100000,
    unlocked: false,
    message: "Yeah.. You <strong>definetly</strong> need to get a life..."
  },
  
  // Printer achievements
  firstUpgrade: {
    name: "You Faker!",
    desc: "Buy the first printer",
    requirement: 1,
    unlocked: false,
    message: "What you're printing money?!?!",
  },
  officeSetup: {
    name: "Office Setup",
    desc: "Own 10 printers total",
    requirement: 10,
    unlocked: false,
    message: "Making some dough now!"
  },
  
  
  // Misc
  cheater: {
    name: "CHEATER!!!",
    desc: "You used cheats",
    unlocked: false,
    message: "I can't believe this you lazy bum.."
  },
  
};

let achievementList = document.querySelector("#achievementList");
let achievementsUnlocked = document.querySelector(".achievementsUnlocked");
let achievementMenu = document.querySelector("#achievementMenu");

let notification = document.querySelector("#achievementNotification");
let achievementName = document.querySelector(".achievementName");
let showMessage = document.querySelector("#achievementMessage");

function checkAchievements() {
  // Check and unlock achievements
  
  // Click Achievements
  if (!achievements.gettingStarted.unlocked && game.clicks >= achievements.gettingStarted.requirement) {
    achievements.gettingStarted.unlocked = true;
    unlockAchievement(achievements.gettingStarted);
  }
  if (!achievements.easyEnough.unlocked && game.clicks >= achievements.easyEnough.requirement) {
    achievements.easyEnough.unlocked = true;
    unlockAchievement(achievements.easyEnough);
  }
  if (!achievements.clickAddiction.unlocked && game.clicks >= achievements.clickAddiction.requirement) {
    achievements.clickAddiction.unlocked = true;
    unlockAchievement(achievements.clickAddiction);
  }
  if (!achievements.ironFinger.unlocked && game.clicks >= achievements.ironFinger.requirement) {
    achievements.ironFinger.unlocked = true;
    unlockAchievement(achievements.ironFinger);
  }
  if (!achievements.maniacClicker.unlocked && game.clicks >= achievements.maniacClicker.requirement) {
    achievements.maniacClicker.unlocked = true;
    unlockAchievement(achievements.maniacClicker);
  }
  
  // Printer Achievements
  if (!achievements.firstUpgrade.unlocked && game.upgrades.junkPrinter.level >= achievements.firstUpgrade.requirement) {
    achievements.firstUpgrade.unlocked = true;
    unlockAchievement(achievements.firstUpgrade);
  }
  if (!achievements.officeSetup.unlocked) {
    
    let totalUpgradeLevels = 0;
Object.values(game.upgrades).forEach(upgrade => {
    if (typeof upgrade.level === 'number') { 
        totalUpgradeLevels += upgrade.level;
    } else {
        // Check nested upgrades (like secret.magicalPrinter)
        Object.values(upgrade).forEach(nestedUpgrade => {
            if (typeof nestedUpgrade.level === 'number') {
                totalUpgradeLevels += nestedUpgrade.level;
            }
        });
    }
});

// Check if total levels are >= 10
if (totalUpgradeLevels >= 10) {
    achievements.officeSetup.unlocked = true;
    unlockAchievement(achievements.officeSetup);
}
}

if (localStorage.getItem("usedCheats") === "true" && !achievements.cheater.unlocked) {
  achievements.cheater.unlocked = true;
  setTimeout(() => {
  unlockAchievement(achievements.cheater);
  }, 500);
};
}


function unlockAchievement(achievement) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `
    <div class="achievement-card">
      <h3>${achievement.name}</h3>
      <p><strong>Message:</strong> ${achievement.message}</p>
      <p><strong>Description:</strong> ${achievement.desc}</p>
    </div>
  `;
  achievementList.appendChild(listItem);

  achievementsUnlocked.textContent = `${Object.values(achievements).filter(a => a.unlocked).length} Unlocked`;

  achievementName.textContent = achievement.name;
  showMessage.textContent = achievement.message;
  notification.classList.remove("hidden");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 2500);
}


let achievementInterval = setInterval(() => {
  checkAchievements();
}, 100); 
