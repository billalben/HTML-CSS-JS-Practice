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
const backgroundYes = document.querySelector(".background-changes .yes");
const backgroundNo = document.querySelector(".background-changes .no");

if (backgroundLocalItem !== null) {
  document.querySelectorAll(".background-changes span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    backgroundYes.classList.add("active");
    backgroundOption = true;
  } else {
    backgroundNo.classList.add("active");
    backgroundOption = false;
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

    handleActive(e);
  });
});

// Switch Background Option
const BackgroundsElement = document.querySelectorAll(
  ".background-changes span"
);

BackgroundsElement.forEach((span) => {
  span.addEventListener("click", function (e) {
    handleActive(e);

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
const landingPage = document.querySelector(".landing-page");

const imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

randomizeImgs();

// select skills selector
let ourSkills = document.querySelector(".skills");
let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop - 230) {
    allSkills.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};

// Create Popup With The Image
const ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.classList.add("popup-overlay");
    document.body.appendChild(overlay);

    let popupBox = document.createElement("div");

    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);
      imgHeading.appendChild(imgText);

      popupBox.appendChild(imgHeading);
    }

    popupBox.classList.add("popup-box");
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");
    let closeButtonText = document.createTextNode("X");
    closeButton.appendChild(closeButtonText);
    closeButton.classList.add("close-button");
    popupBox.appendChild(closeButton);
  });
});

// Close Popup

document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

scrollToSomewhere(allBullets);

// Select All Links
// const allLinks = document.querySelectorAll(".links a");

const bulletsSpan = document.querySelectorAll(".bullets-options span");
const bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";
    document.querySelector(".bullets-options .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-options .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "block") {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullets-option", "block");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets-option", "none");
    }

    handleActive(e);
  });
});

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
function scrollToSomewhere(elements) {
  elements = document.querySelectorAll(".nav-bullets .bullet");
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });

  ev.target.classList.add("active");
}
