/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const laExcusa = document.getElementById("excuse");

  let who = [
    "The cat",
    "My grandma",
    "The mailman",
    "My bird",
    "My sister",
    "My hamster"
  ];
  let action = ["ate", "peed", "crushed", "broke", "stole", "burn"];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "my bicycle",
    "my notebook"
  ];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  // Display the excuse
  laExcusa.textContent = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
};
