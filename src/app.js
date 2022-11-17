/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  console.log("hey!");
  // Define possible Why, What, When, Who values.

  let whatArr = [
    "drove my car",
    "ate my homework",
    "powered off my pc",
    "jumped of a plane",
    "fell of the stairs",
    "dissapeared"
  ];
  let whoArr = [
    "My mom",
    "My dad",
    "My brother",
    "My uncle",
    "Bob",
    "Larry",
    "Jhon",
    "Michael",
    "The doctor",
    "The lawyer",
    "Morgan Freeman"
  ];
  let whenArr = [
    "today",
    "yesterday",
    "half an hour ago",
    "two weeks ago",
    "just now",
    "right now",
    "a month ago"
  ];

  // Utilities:

  function generateRandomNumberArr(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function generateExcuse(who, what, when) {
    return `${who} ${what} ${when}`;
  }

  document.querySelector(".js-excuse").innerHTML = generateExcuse(
    whoArr[generateRandomNumberArr(whoArr)],
    whatArr[generateRandomNumberArr(whatArr)],
    whenArr[generateRandomNumberArr(whenArr)]
  );
  // omg you no belive me. Ma mum toasted ma car yesterday
};
