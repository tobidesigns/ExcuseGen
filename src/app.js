/* eslint-disable */
let who = ["my daughter", "my dog", "my alter-ego", "my bird"];
let action = ["ate", "crushed", "destroyed", "damaged"];
let what = ["my homework", "the car", "the cake", "my phone"];
let when = ["right now", "before class", "last week", "many moons ago"];

function getRandomArrayEntry(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.onload = () => {
  document.getElementById("excuse").innerHTML =
    getRandomArrayEntry(who) +
    " " +
    getRandomArrayEntry(action) +
    " " +
    getRandomArrayEntry(what) +
    " " +
    getRandomArrayEntry(when);

  document.querySelector("#btclick").addEventListener("click", () => {
    window.location.reload();
  });
};
