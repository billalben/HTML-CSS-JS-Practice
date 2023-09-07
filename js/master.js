let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// setInterval(function () {
//   let randomNum = Math.trunc(Math.random() * imgsArray.length);
//   landingPage.style.backgroundImage = `url("../imgs/${imgsArray[randomNum]}")`;
// }, 10000);

let length = 0;
let ChangeBackground = setInterval(function () {
  landingPage.style.backgroundImage = `url("../imgs/${imgsArray[length]}")`;
  length++;
  if (length === imgsArray.length) length = 0;
}, 10000);
