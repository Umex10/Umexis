import * as fetchModule from "../modules/fetch.js";
import { renderHeader } from "../modules/header.js";
import { initApp } from "../modules/initApp.js";

//? This section will load the header, since the same header is needed in multiple pages

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header").innerHTML = renderHeader();

  // Now hamburger + menu exist in DOM

  initApp();
});

//? Manaully enabling scrolling

// Makes the scrolling behaving "smoother" when working with snap mechanism (stackoverflow)
// This will also replace the default scroll behaviour by the browser
const sections = document.querySelectorAll("main section");

// Current section
let currentSection = 0;
let isScrolling = false;

function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return;
  isScrolling = true;
  sections[index].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  setTimeout(() => {
    isScrolling = false;
    currentSection = index;
  }, 800);
}

window.addEventListener(
  "wheel",
  (e) => {
    if (isScrolling) return;
    e.preventDefault();

    // To know if the user is scrolling down/ up
    if (e.deltaY > 0) scrollToSection(currentSection + 1);
    else if (e.deltaY < 0) scrollToSection(currentSection - 1);
  },
  { passive: false },
);

// Keyevents
window.addEventListener("keydown", (e) => {
  if (isScrolling) return;
  if (e.key === "ArrowDown") scrollToSection(currentSection + 1);
  if (e.key === "ArrowUp") scrollToSection(currentSection - 1);
});

//? Dot mechanism

// Keeps track of current dot
let current = 0;

const dotsNodeList = document.querySelectorAll("#slider-dots .dot");
const dotsArray = Array.from(dotsNodeList);

// Our Container for the mobile slide section
const scrollContainer = document.querySelector(".scroll-container");

scrollContainer.addEventListener("scroll", (event) => {
  // This will hold the number, how "far" we have scrolled to the right
  const scrollLeft = scrollContainer.scrollLeft;

  // This will hold the width of the current slide. Our slide takes 100% so clientWidth would be 100vw.
  const scrollWidth = scrollContainer.clientWidth;

  // To calculate the current Slide
  let index = Math.round(scrollLeft / scrollWidth);

  if (index !== current) {
    dotsArray[current].classList.remove("dot-style");
    current = index;
    dotsArray[current].classList.add("dot-style");
  }
});

//? Carousel Section mechanism

// Some sample data to fill in info section on PC, for mobile it's done directly from html
const tabInfo = {
  team: {
    title: "Humble Beginnings",
    slogan: "It all started with a small team full of ideas and dedication.",
    desc: "In the very beginning, our company was nothing more than a small group of passionate individuals. With limited resources but boundless energy, we laid the foundation for what would later become a thriving enterprise. Every brainstorming session, every late night, and every small success brought us closer together and shaped our values of persistence and teamwork.",
  },
  warehouse: {
    title: "First Steps",
    slogan: "Our first warehouse – the place where dreams took shape.",
    desc: "Securing our first warehouse was a turning point. It gave us the physical space to bring our ideas into reality. Here we worked tirelessly, handling the first orders, organizing materials, and setting up processes that would later scale. This small warehouse quickly became a symbol of opportunity and growth.",
  },
  flower: {
    title: "We’ve Grown",
    slogan: "With every project and challenge, we bloomed even more.",
    desc: "Just like a flower, our company grew stronger and more vibrant with every challenge. Each new project taught us valuable lessons, expanded our expertise, and allowed us to take on bigger responsibilities. What once was a tiny seed of an idea had now flourished into a well-recognized presence in our industry.",
  },
  customerServiceHelping: {
    title: "Close to Customers",
    slogan: "Over time, we also increased the Customer-Service staff.",
    desc: "As our customer base grew, so did our responsibility to serve them better. Expanding our customer service team was a key step in building stronger relationships. Every interaction became an opportunity to listen, learn, and improve. This focus on people ensured that growth didn’t just mean numbers – it meant trust and loyalty.",
  },
  warehouseFull: {
    title: "Stronger Today",
    slogan:
      "From a small warehouse to a fully equipped hub – our growth is visible.",
    desc: "Today, our modern warehouse represents everything we’ve worked for. Equipped with advanced systems and designed for efficiency, it reflects years of learning, adapting, and expanding. Standing in this space reminds us how far we’ve come – from humble beginnings to a strong and reliable organization ready for the future.",
  },
};

//! Mobile slides

// To know if the clicked div is the same as the click before
let longTextSecond;

scrollContainer.addEventListener("click", (event) => {
  const currentDiv = event.target.closest(".snap-start");
  const longText = currentDiv.querySelector(".long-text");

  if (longTextSecond === longText) {
    longText.classList.toggle("hidden");
    longText.classList.toggle("flex");
    return;
  }

  if (longTextSecond) {
    longTextSecond.classList.replace("flex", "hidden");
  }

  const textDiv = longText.querySelector("p");
  const key = currentDiv.dataset.key;
  textDiv.textContent = tabInfo[key].desc;

  longText.classList.replace("hidden", "flex");
  longTextSecond = longText;
});

//! Desktop carousel

// These will hold the current background image
const bgChanger = document.querySelector(".bg-changer");

// Necassary for the info-section
const infoContainer = document.querySelector(".info-container");
const title = document.querySelector(".info-container h3");
const slogan = document.querySelector(".info-container h4");
const desc = document.querySelector(".info-container p");

// Needed for global Event Listener, since we used group in tailwind
const carousel = document.querySelector(".carousel");
const tabs = carousel.querySelectorAll(".tab");

carousel.addEventListener("click", (event) => {
  const clickedTab = event.target.closest(".tab");
  const tabBefore = document.querySelector(".tab-clicked-before");

  if (tabBefore) {
    // This ensures that it will get the same flex-ratio as all other unhovered-images
    tabBefore.classList.remove("flex-[5]");
    tabBefore.classList.add("flex-1");
    tabBefore.classList.remove("tab-clicked-before");

    const hoverText = tabBefore.querySelector(".hover-text");
    hoverText.classList.remove("opacity-100");
    hoverText.classList.add("opacity-0");
  }
  // This ensures that the clicked image will appear larger than the other ones in the carousel
  clickedTab.classList.add("tab-clicked-before");
  clickedTab.classList.remove("flex-1");
  clickedTab.classList.add("flex-[5]");

  const hoverText = clickedTab.querySelector(".hover-text");
  hoverText.classList.remove("opacity-0");
  hoverText.classList.add("opacity-100");

  // The key given by the data-key from the dom, will ensure to get the right key from the tabInfo array.
  const key = clickedTab.dataset.key;
  const img = clickedTab.querySelector("img").src;

  bgChanger.classList.replace("opacity-100", "opacity-0");
  bgChanger.style.backgroundImage = `url('${img}')`;
  bgChanger.classList.replace("opacity-0", "opacity-100");

  infoContainer.classList.remove("opacity-0");

  title.textContent = tabInfo[key].title;
  slogan.textContent = tabInfo[key].slogan;
  desc.textContent = tabInfo[key].desc;
});

//? Method calls

dotsArray[current].classList.add("dot-style");
tabs[0].click();
