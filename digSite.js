let game = window.game;
let collectedArtifactsShow = document.querySelector(".collectedArtifacts");
let digSite = document.querySelector("#digScreen");
let artifacts = game?.digSite?.artifacts;
let shovelPower = game?.digSite?.shovel?.strength?.power || 1;
console.log(`Shovel Power: ${shovelPower}`);
// Get the message containers
let digMessage = document.getElementById("digMessageText");
let upgradeMessage = document.getElementById("upgradeMessage");

// Function to show messages with a custom timeout
function showMessage(message, duration = 2000) {
    digMessage.textContent = message;
    digMessage.classList.remove('hidden');
    setTimeout(() => {
        digMessage.classList.add('hidden');
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
        showMessage(`Artifact found! ${foundArtifact.name}`);
      } else {
        console.log("No matching artifact found.");
        showMessage("No artifacts found, try again!");
      }
    } else {
      console.log("Nothing found.");
      showMessage("Nothing found. Try again!");
    }
  };
  
  switch (rand) {
    case 4:
      showMessage("You found $500,000!");
      game.money += 500000;
      break;
    case 5:
      showMessage("You found $100,000!");
      game.money += 100000;
      break;
    case 6:
      showMessage("You found $1,000,000!");
      game.money += 1000000;
      break;
    case 7:
      showMessage("You found $1! Lol");
      game.money += 1;
      break;
    case 8:
      showMessage("You found $2,500,000!");
      game.money += 2500000;
      break;
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
let purchaseAudio = new Audio('https://cdn.glitch.global/6ef22356-510c-42f2-98df-a959a784c146/Purchase?v=1742847967885');

upgradeStrengthBtn.addEventListener("click", () => {
  if (game?.money >= shovel?.strength?.upCost) {
    purchaseAudio.play();
    game.money -= shovel.strength.upCost; // Deduct cost
    shovel.strength.upCost = Math.floor(shovel.strength.upCost * 1.15); // Increase upgrade cost
    shovel.strength.power = Math.max(1, shovel.strength.power - 2); // Ensure power never goes below 1
    console.log(`Shovel Power Decreased: ${shovel.strength.power}`);
    showMessage("Shovel strength upgraded!");
  } else {
    console.log("Not enough money to upgrade!");
    showMessage("Not enough money to upgrade!");
    alert(`Not enough money! You need $${shovel?.strength?.upCost - game.money} more!`)
  }
});

document.addEventListener("mousemove", (e) => {
    digMessage.style.left = `${e.pageX}px`;
    digMessage.style.top = `${e.pageY + 10}px`; // Adjusts to be right under
});
