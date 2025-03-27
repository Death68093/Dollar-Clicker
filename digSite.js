let game = window.game;
let collectedArtifactsShow = document.querySelector(".collectedArtifacts");

let digSite = document.querySelector("#digScreen");
let artifacts = game?.digSite?.artifacts;
let shovelPower = game?.digSite?.shovel?.strength?.power || 1;
console.log(`Shovel Power: ${shovelPower}`);

// Get the message containers
let digMessage = document.getElementById("digMessage");
let upgradeMessage = document.getElementById("upgradeMessage");

// Function to show messages with a custom timeout
function showMessage(element, message, duration = 2000) {
  let messageText = element.querySelector("p");
  messageText.textContent = message;
  element.classList.remove("hidden");

  setTimeout(() => {
    element.classList.add("hidden");
  }, duration);
}

// Main Digging
digSite.addEventListener("click", () => {
  if (!artifacts) {
    console.error("Artifacts data is missing!");
    return;
  }

  let rand = Math.floor(Math.random() * shovelPower) + 1;
  if (rand === 3) { // More balanced artifact finding

    let chances = [40, 25, 15, 10, 7, 3];
    let weights = [40, 25, 15, 10, 7, 3];

    let randomNum = Math.floor(Math.random() * 100) + 1;
    let cumulative = 0;
    let selectedChance = null;

    for (let i = 0; i < chances.length; i++) {
      cumulative += weights[i];
      if (randomNum <= cumulative) {
        selectedChance = chances[i];
        break;
      }
    }

    if (selectedChance) {
      console.log(`Artifact found! Chance: ${selectedChance}`);

      let foundArtifact = Object.values(artifacts).find(
        artifact => artifact.chance === selectedChance
      );

      if (foundArtifact) {
        console.log(`Artifact match! ${foundArtifact.name}`);

        foundArtifact.count = (foundArtifact.count || 0) + 1;

        if (foundArtifact.mult > game.mult) {
          game.mult = foundArtifact.mult;
          console.log(`New Multiplier: ${game.mult}`);
        } else {
          console.log(`Multiplier unchanged (Current: ${game.mult})`);
        }

        updateCollectedArtifacts();
        showMessage(digMessage, `Artifact found! ${foundArtifact.name}`);
      } else {
        console.log("No matching artifact found.");
        showMessage(digMessage, "No artifacts found, try again!");
      }
    } else {
      console.log("Nothing found.");
      showMessage(digMessage, "Nothing found. Try again!");
    }
  }
});

// Update collected artifacts UI
function updateCollectedArtifacts() {
  collectedArtifactsShow.innerHTML = '';

  Object.values(artifacts).forEach(artifact => {
    if (artifact.count > 0) {
      let artifactElement = document.createElement('div');
      artifactElement.classList.add('artifact');

      artifactElement.innerHTML = `
        <strong>${artifact.name}</strong><br>
        Rarity: ${artifact.rarity}<br>
        Collected: ${artifact.count}
      `;

      collectedArtifactsShow.appendChild(artifactElement);
    }
  });
}

// Upgrade button functionality
let upgradeStrengthBtn = document.querySelector("#upgradeShovelStrength");
let shovel = game?.digSite?.shovel;

upgradeStrengthBtn.addEventListener("click", () => {
  if (game?.money >= shovel?.strength?.upCost) {
    game.money -= shovel.strength.upCost; // Deduct cost
    shovel.strength.upCost = Math.floor(shovel.strength.upCost * 1.15); // Increase upgrade cost
    shovel.strength.power = Math.max(1, shovel.strength.power - 2); // Ensure power never goes below 1
    console.log(`Shovel Power Decreased: ${shovel.strength.power}`);
    showMessage(upgradeMessage, "Shovel strength upgraded!");
  } else {
    console.log("Not enough money to upgrade!");
    showMessage(upgradeMessage, "Not enough money to upgrade!");
  }
});
