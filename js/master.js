// Toggle Spin Class On Icon
document.querySelector(".toggle-settings i").onclick = function () {
  this.classList.toggle("fa-spin");

  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsList = document.querySelectorAll(".colors-list li");

colorsList.forEach((li) => {
  li.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    colorsList.forEach((li) => {
      li.classList.remove("active")
    });

    this.classList.add("active")
  });
});

// Select Landing Page Element
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
