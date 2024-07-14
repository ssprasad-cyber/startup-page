const body = document.querySelector("body");
const middle = document.querySelector(".middle");
const middle0 = document.querySelector(".middle0");
const power = document.querySelector("#power");
const light = document.querySelector(".light");
const night = document.querySelector(".night");
const nitime = document.querySelector(".nti");
const preview = document.querySelector(".preview");
const dino0 = document.querySelector(".dino0");
const dino1 = document.querySelector(".dino1");
const quote1 = document.querySelector(".quote1");
const quote2 = document.querySelector(".quote2");
const dino = document.querySelector("#dino");
const dino_btn = document.querySelector("#dino-btn");
const quote = document.querySelector("#quote");
const quote_btn = document.querySelector(".quotes");
const switch_d = document.querySelector(".switch");
// const search = document.querySelector("#search");
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('#search');
const dropdown = document.getElementById('dropdown');


// Function to toggle light mode and dark mode
const toggleLightNightIcons = () => {
   light.classList.toggle("light_active");
   night.classList.toggle("night_active");
};

const enableDarkMode = () => {
   nitime.classList.add("nti_active");
   preview.classList.add("night_preview");
   dino0.classList.add("dino0_nyt");
   dino1.classList.add("dino1_nyt");
   quote1.classList.add("quote1_nyt");
   quote2.classList.add("quote2_nyt");
   switch_d.classList.remove("switch_d");

};

const disableDarkMode = () => {
   nitime.classList.remove("nti_active");
   preview.classList.remove("night_preview");
   dino0.classList.remove("dino0_nyt");
   dino1.classList.remove("dino1_nyt");
   quote1.classList.remove("quote1_nyt");
   quote2.classList.remove("quote2_nyt");
   switch_d.classList.add("switch_d");
};

const applyMode = (mode) => {
   if (mode === 'dark') {
      // console.log("Applying dark mode");
      if (!night.classList.contains("night_active")) {
         toggleLightNightIcons();
      }
      enableDarkMode();
   } else {
      // console.log("Applying light mode"); 
      if (night.classList.contains("night_active")) {
         toggleLightNightIcons();
      }
      disableDarkMode();
   }
};

const saveMode = (mode) => {
   localStorage.setItem('mode', mode);
   console.log("Saved mode:", mode);
};

const toggleMode = () => {
   let mode = localStorage.getItem('mode');
   console.log("Current mode:", mode);
   if (mode === 'dark') {
      applyMode('light');
      saveMode('light');
   } else {
      applyMode('dark');
      saveMode('dark');
   }
};

// Load mode on page load
document.addEventListener("DOMContentLoaded", () => {
   const mode = localStorage.getItem('mode') || 'light';
   console.log("Loaded mode:", mode);
   applyMode(mode);
});

// Event listeners for toggling modes
light.addEventListener("click", () => {
   toggleMode();
});

night.addEventListener("click", () => {
   toggleMode();
});

// Power on function
const powerOn = () => {
   middle.classList.toggle("middle-active");
   middle0.classList.toggle("middle0-active");
};

power.addEventListener("click", () => {
   powerOn();
});

window.addEventListener("keydown", (e) => {
   if (e.key === 'Escape') {
      powerOn();
   }
});

// Functional home page
var d = 1;
var q = 1;

dino_btn.addEventListener("click", () => {
   if (d === 1) {
      dino.style.display = "none";
      d++;
   } else {
      dino.style.display = "block";
      d = 1;
   }
});

quote_btn.addEventListener("click", () => {
   if (q === 1) {
      quote.style.display = "none";
      q++;
   } else {
      quote.style.display = "block";
      q = 1;
   }
});

// search scprit

document.addEventListener('DOMContentLoaded', function() {
   const searchEngine = document.getElementById('search-engine');
   const searchForm = document.querySelector('#g-search form');

   // Change form action based on selected search engine
   searchEngine.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
         searchForm.action = event.target.dataset.action;

         // Remove 'searchon' class from all buttons
         const buttons = searchEngine.querySelectorAll('button');
         buttons.forEach(button => button.classList.remove('searchon'));

         // Add 'searchon' class to the clicked button
         event.target.classList.add('searchon');
   }});
});