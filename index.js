const body = document.querySelector("body");
const middle = document.querySelector(".middle");
const middle0 = document.querySelector(".middle0");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
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
// power on 
const powerOn = () => {
   middle.classList.toggle("middle-active"); 
   middle0.classList.toggle("middle0-active");
}
power.addEventListener("click", function(){  
   powerOn();
});
window.addEventListener("keydown", function(e){
   if(e.key === 'Escape'){
      powerOn();
   }
});

// light mode dark mode
const lightOn = () => {
   light.classList.toggle("light_active");
   night.classList.toggle("night_active");
}
const darkmode = () =>{
   //time 
   nitime.classList.toggle("nti_active");
   preview.classList.toggle("night_preview");
   //dino logo
   dino0.classList.toggle("dino0_nyt")
   dino1.classList.toggle("dino1_nyt")
   //quotes btn
   quote1.classList.toggle("quote1_nyt");
   quote2.classList.toggle("quote2_nyt")
}

light.addEventListener("click", function(){
   lightOn();
   darkmode();
});
night.addEventListener("click",function(){
   lightOn();
   darkmode();
})

//functional home page

var d = 1
var q = 1

dino_btn.addEventListener("click",function(){
    if(d ==1){
        dino.style.display = "none";
        d++
    }else{
        dino.style.display = "block";
        d = 1
    }   
})
quote_btn.addEventListener("click",function(){
    if(q ==1){
        quote.style.display = "none";
        q++
    }else{
        quote.style.display = "block";
        q = 1
    }   
})