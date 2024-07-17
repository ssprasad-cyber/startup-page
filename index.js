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
const searchInput = document.getElementById('search');
const dropdown = document.getElementById('dropdown');
const checkbox = document.getElementById('checkbox');

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
      if (!night.classList.contains("night_active")) {
         toggleLightNightIcons();
      }
      enableDarkMode();
   } else {
      if (night.classList.contains("night_active")) {
         toggleLightNightIcons();
      }
      disableDarkMode();
   }
};

const saveMode = (mode) => {
   localStorage.setItem('mode', mode);
};

const toggleMode = () => {
   let mode = localStorage.getItem('mode');
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
   document.querySelector('.middle').classList.toggle('middle-active');
   document.querySelector('.middle0').classList.toggle('middle0-active');
};

power.addEventListener('click', () => {
   powerOn();
});



// Functional home page
const disp = (element) =>{
   element.style.display = (element.style.display === "none") ? "block" : "none";
}
dino_btn.addEventListener("click", () => {
      disp(dino);
});
quote_btn.addEventListener("click", () => {
   disp(quote);
});
// listners
window.addEventListener('keyup', (e) => {
   console.log(e)
   if (e.key === 'Escape') {
      checkbox.checked = !checkbox.checked;
      powerOn();
   }
   if ((e.key === "D" ||e.key === "d") && e.shiftKey) {
      disp(dino);
   } 
   if ((e.key === "Q" ||e.key === "q") && e.shiftKey) {
      disp(quote);
   }
   else {
      console.log(e);
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

   // quick redirect
   searchEngine.addEventListener("dblclick",link = (event) =>{
      
      if (event.target.tagName === 'BUTTON') {
            const link = event.target.dataset.action;
            const truncatedLink = link.substring(0, link.lastIndexOf('/'));
            window.open(truncatedLink, '_blank');
            
      }
   })
});

// Fetch links from link.json and display them
fetch('link.json')
   .then(response => response.json())
   .then(data => {
      console.log(data);
      const linksContainer = document.querySelector('#links-container');

      for (const category in data) {
         const categoryDiv = document.createElement('div');
         categoryDiv.innerHTML = `<h3>${category}</h3>`;
         
         data[category].forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.title;
            a.target = '_blank';
            categoryDiv.appendChild(a);
            categoryDiv.appendChild(document.createElement('br'));
         });

         linksContainer.appendChild(categoryDiv);
      }
   })
   .catch(error => console.error('Error fetching links:', error));
