let themeSelect = document.querySelector("#themeSelect");

themeSelect.addEventListener("change", (event) => {
  let theme = event.target.value
  switch (theme) {
    case 'Modern (Default)':
      changeStylesheet("style.css");
      break;
    case 'Colorful':
      changeStylesheet("colorful.css");
      break;
  };
  
  console.log(`New Theme: ${theme}`)
})

function changeStylesheet(newStylesheet) {
  document.querySelector('link[rel="stylesheet"]').href = newStylesheet;
}


