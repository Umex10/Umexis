import { renderHeader } from "./header.js";

//? This section will load the header, since the same header is needed in multiple pages
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header").innerHTML = renderHeader();

  // now hamburger + menu exist in DOM
  initApp();
  initSlider();
});

//? To ensure that hamburger + mobile menu are loaded and their functions
const initApp = () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!hamburgerButton || !mobileMenu) {
    console.error("Hamburger button or mobile menu not found");
    console.log(hamburgerButton);
    console.log(mobileMenu);
    return;
  }

  const toggleMenu = () => {
    // handles showing/hiding
    mobileMenu.classList.toggle("flex");

    mobileMenu.classList.toggle("hidden");
    hamburgerButton.classList.toggle("toggle-btn");

    //disables scroll-function inside menu
    document.body.classList.toggle("overflow-hidden");
  };

  hamburgerButton.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

//? To fetch a specific item or the whole item list
async function fetchAPI(apiURL) {
  const reply = await fetch(apiURL);

  if (!reply.ok) {
    throw new Error("Could not fetch the data");
  }

  return await reply.json();
}

//? Slider mechanism to see the most recent items which are on sale from now on

async function initSlider() {
  //to Initialize the slides
  const items = await Promise.all([
    fetchAPI("https://fakestoreapi.com/products/13"),
    fetchAPI("https://fakestoreapi.com/products/9"),
    fetchAPI("https://fakestoreapi.com/products/10"),
  ]);

  // Initialize "Exclusive" text of the Item
  items[0].exclusive = "Exclusive Deal";
  items[1].exclusive = "Limited Time Offer";
  items[2].exclusive = "Must-Have";

  //Initialize detailed desc of the item
  items[0].desc = "Experience every frame like never before ";
  items[1].desc = "Fast data transfers, works on any setup";
  items[2].desc = "1TB of speed and reliable storage for all";

  let current = 0;

  //The mechanism below will take care of the animation and hover classes.

  const dotsNodeList = document.querySelectorAll("#slider-dots .dot");
  const dotsArray = Array.from(dotsNodeList);

  // Slide functions

  const updateSlide = (index) => {
    dotsArray[current].classList.remove("dot-style");
    current = index;
    displayItem(items[current]);
    dotsArray[current].classList.add("dot-style");
  };

  const specificSlide = (index) => updateSlide(index);

  const nextSlide = () => updateSlide((current + 1) % items.length);

  const previousSlide = () =>
    updateSlide((current - 1 + items.length) % items.length);

  // Event Listeners

  dotsArray.forEach((element, index) => {
    element.addEventListener("click", () => specificSlide(index));

    element.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        previousSlide();
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        specificSlide(index);
      }
    });
  });

  displayItem(items[current]);
  dotsArray[current].classList.add("dot-style");

  // Items slider...
  setInterval(nextSlide, 5000);

  //? Learn more about the item mechanism to ensure the correct ID of the item will be loaded!

  const itemLearnMore = document.getElementById("item-learn-more");
  itemLearnMore.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = `item-detail.html?id=${items[current].id}`;
  });
}

//? To display a specific item at the current slide-index

function displayItem(item) {
  const img = document.getElementById("item-img");
  const exclusiveText = document.getElementById("item-exclusive");
  const desc = document.getElementById("item-desc");

  img.src = item.image;
  img.alt = `Title of the item (Image): ${item.title}`;
  exclusiveText.textContent = item.exclusive;
  desc.textContent = item.desc;

  //animation mechanism
  img.classList.remove("animate-slideIn");
  void img.offsetWidth;
  img.classList.add("animate-slideIn");

  exclusiveText.classList.remove("animate-slideIn");
  void exclusiveText.offsetWidth;
  exclusiveText.classList.add("animate-slideIn");

  desc.classList.remove("animate-slideIn");
  void desc.offsetWidth;
  desc.classList.add("animate-slideIn");
}
