/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numero = document.querySelector("p");

  let palosposibles = ["suitspades", "suitclubs", "suithearts", "suitdiamonds"];

  let randomNum1 = Math.floor(Math.random() * 4);

  document.getElementById("card").classList.add(palosposibles[randomNum1]);

  if (
    palosposibles[randomNum1] === "suithearts" ||
    palosposibles[randomNum1] === "suitdiamonds"
  ) {
    numero.style.color = "red";
  }

  let numerosPosibles = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let randomNum2 = Math.floor(Math.random() * 14);

  numero.textContent = numerosPosibles[randomNum2];
};
