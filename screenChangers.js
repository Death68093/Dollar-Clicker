// Ensure the elements are selected before adding event listeners
let goToMainScreen = document.querySelectorAll(".goToMainScreen");
let goToDigScreen = document.querySelectorAll(".goToDigScreen");

let mainScreen = document.querySelector("#mainScreen");
let digScreen = document.querySelector("#digScreen");

if (goToMainScreen.length > 0) {
  goToMainScreen.forEach((screen) => {
    screen.addEventListener("click", () => {
      digScreen.style.display = "none";
      mainScreen.style.display = "block";
    });
  });
}

if (goToDigScreen.length > 0) {
  goToDigScreen.forEach((screen) => {
    screen.addEventListener("click", () => {
      mainScreen.style.display = "none";
      digScreen.style.display = "block";

      setTimeout(() => {
        alert(
          "Click anywhere to dig! This is still in beta! Don't worry if nothing happens, it's still working!"
        );
      }, 100);
    });
  });
}
