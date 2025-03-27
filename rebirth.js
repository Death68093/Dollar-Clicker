import { mainBtn, moneyShow, clicksShow, clickStrengthShow, autoPowerShow, dollar } from './variables.js';

let game = window.game;

const rebirthSound = new Audio('https://cdn.glitch.global/6ef22356-510c-42f2-98df-a959a784c146/Purchase?v=1742847967885');
document.querySelector("#rebirthBtn").addEventListener("click", () => {
    if (game.money >= game.rebirth.cost) {
        console.log("Rebirthing...");

        rebirthSound.play();
        
        
        // Reset game values
        game.money = 0;
        
        game.autoPower = 0;

        // Reset upgrades
        for (let key in game.upgrades) {
            game.upgrades[key].level = 0;
            game.upgrades[key].upCost = game.upgrades[key].baseCost;
        }

        // Increase rebirth level & cost
        game.rebirth.level++;
        console.log(game.rebirth.level);
        game.clickPower = game.rebirth.level + 1
        game.rebirth.cost = Math.round(game.rebirth.cost * 3);

        // Update UI
        moneyShow.textContent = game.money;
        clicksShow.forEach(cs => cs.textContent = "0");
        clickStrengthShow.forEach(cs => cs.textContent = game.clickPower);
        autoPowerShow.forEach(cs => cs.textContent = game.autoPower);
        document.querySelector(".rebirthCostShow").textContent = game.rebirth.cost;
        document.querySelector(".rebirthLevelShow").textContent = game.rebirth.level;
      
      switch (game.rebirth.level) {
        case 1:
          dollar.src = "https://cdn.glitch.global/6ef22356-510c-42f2-98df-a959a784c146/Temporary$2?v=1742930328375";
          break;
        case 2:
          dollar.src = "https://cdn.glitch.global/6ef22356-510c-42f2-98df-a959a784c146/$5?v=1742995756767";
          break;
        };

    } else {
      alert("Not enough Money!")
    }
});
