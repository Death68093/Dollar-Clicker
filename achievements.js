let game = window.game;

// Define achievements in categories
const achievementCategories = {
    clicks: [
        { id: "gettingStarted", name: "Getting Started", desc: "Click 10 times", requirement: 10, message: "You clicked the dollar 10 times!" },
        { id: "easyEnough", name: "Easy enough", desc: "Click 100 times", requirement: 100, message: "How does your finger feel?" },
        { id: "clickAddiction", name: "Click Addiction", desc: "Click 1,000 times", requirement: 1000, message: "Are you not tired yet?" },
        { id: "ironFinger", name: "Iron Finger", desc: "Click 10,000 times", requirement: 10000, message: "You <em>probably</em> need to get a life..." },
        { id: "maniacClicker", name: "Maniac Clicker", desc: "Click 100,000", requirement: 100000, message: "Yeah.. You <strong>definitely</strong> need to get a life..." }
    ],
    printers: [
        { id: "firstUpgrade", name: "You Faker!", desc: "Buy the first printer", requirement: 1, message: "What? You're printing money?!?!" },
        { id: "officeSetup", name: "Office Setup", desc: "Own 10 printers total", requirement: 10, message: "Making some dough now!"},
        { id: "scamArtist", name: "Scam Artist", desc: "Own 25 printers total", requirement: 25, message: "You better watch out for the cops!"},
    ],
    playTime: [
        { id: "noob", name: "Noob", desc: "Play for 1 minute", requirement: 60, message: "Thanks for playing!" },
        { id: "beginner", name: "Beginner", desc: "Play for 10 minutes", requirement: 600, message: "You're still here?" },
        { id: "intermediate", name: "Intermediate Gamer", desc: "Play for 30 minutes", requirement: 1800, message: "Wow, you must really like this game!" },
        { id: "player", name: "Player", desc: "Play for 1 hour", requirement: 3600, message: "The money must really be addicting.." },
        { id: "gamer", name: "Gamer", desc: "Play for 2 hours", requirement: 7200, message: "Ok now, you know you can take a break right?" },
        { id: "hardcoreGamer", name: "Hardcore Gamer", desc: "Play for 5 hours", requirement: 18000, message: "I have an idea! GO TOUCH GRASS you bum!" }
    ],
    misc: [
        { id: "cheater", name: "CHEATER!!!", desc: "You used cheats", requirement: null, message: "I can't believe this you lazy bum.." }
    ]
};

// Convert structured categories into a single object for easier lookup
let achievements = {};
for (const category in achievementCategories) {
    achievementCategories[category].forEach(ach => {
        achievements[ach.id] = { ...ach, unlocked: false };
    });
}

let achievementList = document.querySelector("#achievementList");
let achievementsUnlocked = document.querySelector(".achievementsUnlocked");
let achievementMenu = document.querySelector("#achievementMenu");
let notification = document.querySelector("#achievementNotification");
let achievementName = document.querySelector(".achievementName");
let showMessage = document.querySelector("#achievementMessage");

// Generalized function to check and unlock achievements
function checkAchievements() {
    for (const ach of achievementCategories.clicks) {
        if (!achievements[ach.id].unlocked && game.clicks >= ach.requirement) {
            unlockAchievement(achievements[ach.id]);
        }
    }

    for (const ach of achievementCategories.printers) {
        if (ach.id === "firstUpgrade") {
            if (!achievements[ach.id].unlocked && game.upgrades.junkPrinter.level >= ach.requirement) {
                unlockAchievement(achievements[ach.id]);
            }
        } else if (ach.id === "officeSetup") {
            let totalUpgradeLevels = Object.values(game.upgrades).reduce((sum, upgrade) => {
                if (typeof upgrade.level === "number") return sum + upgrade.level;
                return sum + Object.values(upgrade).reduce((subSum, nested) => subSum + (nested.level || 0), 0);
            }, 0);

            if (!achievements[ach.id].unlocked && totalUpgradeLevels >= ach.requirement) {
                unlockAchievement(achievements[ach.id]);
            }
        }
    }

    for (const ach of achievementCategories.playTime) {
        if (!achievements[ach.id].unlocked && game.timePlayed >= ach.requirement) {
            unlockAchievement(achievements[ach.id]);
        }
    }

    if (localStorage.getItem("usedCheats") === "true" && !achievements.cheater.unlocked) {
        setTimeout(() => unlockAchievement(achievements.cheater), 500);
    }
}

// Function to unlock and display achievements
function unlockAchievement(achievement) {
    achievement.unlocked = true;

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

    setTimeout(() => notification.classList.add("hidden"), 2500);
}

// Run achievement check every 100ms
let achievementInterval = setInterval(checkAchievements, 100);
