import * as fetchModule from "../modules/fetch.js";
import { renderHeader } from "../modules/header.js";
import { initApp } from "../modules/initApp.js";
import * as gridItem from "../modules/gridItem.js";

//? This section will load the header, since the same header is needed in multiple pages

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header").innerHTML = renderHeader();

  // Now hamburger + menu exist in DOM

  initApp();
  initSlider();
});

//? Slider mechanism to see the most recent items which are on sale from now on

async function initSlider() {
  // To Initialize the slides
  let items;
  try {
    items = await Promise.all([
      fetchModule.fetchAPI("https://fakestoreapi.com/products/13"),
      fetchModule.fetchAPI("https://fakestoreapi.com/products/9"),
      fetchModule.fetchAPI("https://fakestoreapi.com/products/10"),
    ]);
  } catch (error) {
    console.error("Slider couldn't be initialized!");
    return;
  }

  // Initialize "Exclusive" text of the Item

  items[0].exclusive = "Exclusive Deal";
  items[1].exclusive = "Limited Time Offer";
  items[2].exclusive = "Must-Have";

  // Initialize detailed desc of the item

  items[0].desc = "Experience every frame like never before ";
  items[1].desc = "Fast data transfers, works on any setup";
  items[2].desc = "1TB of speed and reliable storage for all";

  //Keeps track of current slide

  let current = 0;

  // The mechanism below will take care of the animation and hover classes.

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

  // Learn more about the item mechanism to ensure the correct ID of the item will be loaded!

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

//? This function will get seeMore and seeAll buttons and add a mechanism to it, so it makes sense

function showMoreAllButtons() {
  let numberOfItems = gridItem.getNumberOfItems();

  // After each click on seeMore this will increase, so after 2 clicks the user is forced to click on SeeAll button.

  let clickCount = 0;

  // Will keep track of current step. We will always display 5 (more) items

  let amountItems = 5;
  const seeMore = document.getElementById("see-more-button");
  const seeAll = document.getElementById("see-all-button");

  if (numberOfItems == 0) {
    // seeMore should'nt be display at all

    seeMore.classList.toggle("hidden");

    // This will be triggered, if they are no featured items on the website (for example: no sale-season)

    const notify = document.getElementById("no-items");
    notify.classList.toggle("hidden");
    throw new Error("There are no featured items unfortunately...");
  } else if (numberOfItems < amountItems) {
    // only the remaining items will be displayed and seeMore will be hidden

    gridItem.addGridItem(0, amountItems - numberOfItems);
    seeMore.classList.toggle("hidden");
  } else {
    // normal behaviour
    gridItem.addGridItem(0, amountItems);
  }

  //EventListeners for seeMore and seeAll

  seeMore.addEventListener("click", (event) => {
    clickCount++;

    if (amountItems == 5) {
      console.log("Im in here!");
      seeAll.classList.toggle("hidden");
      seeMore.classList.toggle("flex-1");
      seeMore.classList.remove("px-10");
    }
    amountItems += 5;
    gridItem.addGridItem(0, amountItems);

    if (amountItems >= numberOfItems) {
      seeMore.classList.toggle("hidden");
    }

    if (clickCount == 2) {
      seeMore.classList.toggle("hidden");
    }
  });

  seeAll.addEventListener("click", (event) => {
    window.location.href = `item-all.html`;
  });
}

//? Method calls

showMoreAllButtons();
