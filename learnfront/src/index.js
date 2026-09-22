//import math from "./math.js";
import "./style.scss";
import { createApp } from 'vue'



import App from "./app.vue";
console.log("Hello from index.js!");

const header = document.querySelector("header");

header.textContent = "HELLO WORLD";
header.addEventListener("click", () => {
    header.textContent = "Hello!";
});


let info = document.getElementById("info");
let text = document.getElementById("textb");

info.addEventListener("click", () => {
  text.textContent = "terror" ;

  
  console.log(text);
});

