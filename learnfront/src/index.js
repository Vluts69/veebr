//import math from "./math.js";
import "./style.scss";


console.log("Hello from index.js!");

const header = document.querySelector("header");

header.textContent = "HELLO WORLD";
header.addEventListener("click", () => {
    header.textContent = "Hello!";
});