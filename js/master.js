// check if there is local storage color option
let mainColor = localStorage.getItem("color-option");

if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);

  // remove active class
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}

let backgroundOption = true;
let backgroundInterval;

// check if there is in local storage background item
let backgroundLocalItem = localStorage.getItem("background-option");

if (backgroundLocalItem !== null) {
  
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  document.querySelectorAll(".background-changes span").forEach(element => {
    element.classList.remove("active");
  })

  if (backgroundLocalItem === "true") {
    document.querySelector(".background-changes .yes").classList.add("active");
  } else {
    document.querySelector(".background-changes .no").classList.add("active");

  }
}

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

    // set color on local storage
    localStorage.setItem("color-option", e.target.dataset.color);

    // colorsList.forEach((li) => {
    //     li.classList.remove("active");
    // });

    for (const li of colorsList) {
      if (li.classList.contains("active")) {
        li.classList.remove("active");
        break; // This will exit the loop when "active" is found.
      }
    }

    this.classList.add("active");

    // e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    //   ele.classList.remove("active");
    // });

    // e.target.classList.add("active");
  });
});

// Switch Background Option
const BackgroundsElement = document.querySelectorAll(
  ".background-changes span"
);

BackgroundsElement.forEach((span) => {
  span.addEventListener("click", function (e) {
    BackgroundsElement.forEach((span) => {
      span.classList.remove("active");
    });

    this.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
    }
  });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

randomizeImgs();

function randomizeImgs() {
  if (backgroundOption) {
    let length = 0;
    backgroundInterval = setInterval(function () {
      landingPage.style.backgroundImage = `url("../imgs/${imgsArray[length]}")`;
      length++;
      if (length === imgsArray.length) length = 0;
    }, 10000);
  }
}
