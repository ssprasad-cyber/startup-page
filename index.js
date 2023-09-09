const body = document.querySelector("body");
const middle = document.querySelector(".middle");
const middle0 = document.querySelector(".middle0");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const power = document.querySelector(".power");
power.addEventListener("click", function(){  
   middle.classList.toggle("middle-active"); 
   middle0.classList.toggle("middle0-active");
});