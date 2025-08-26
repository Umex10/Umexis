import { renderHeader } from "./header.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header").innerHTML = renderHeader();

  // now hamburger + menu exist in DOM
  initApp();
});

//? To ensure that hamburger + mobile menu are loaded and their functions
const initApp = () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    // handles showing/hiding
    mobileMenu.classList.toggle("open");
    hamburgerButton.classList.toggle("toggle-btn");

    //disables scroll-function inside menu
    document.body.classList.toggle("overflow-hidden");
  };

  hamburgerButton.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

//? This will give us the exact id of the item on which the user clicked, --> (Learn more <a>)

const args = new URLSearchParams(window.location.search);
const itemID = args.get("id");

//? to fetch a specific item or the whole item list
async function fetchAPI(apiURL) {
  const reply = await fetch(apiURL);

  if (!reply.ok) {
    throw new Error("Could not fetch the data");
  }

  return await reply.json();
}

//? To display a specific Item after the user clicked on "Learn more" in the slide section

async function initializeItem(itemID) {
  const item = await fetchAPI(`https://fakestoreapi.com/products/${itemID}`);

  // Setting main and thunbnail images

  const bigImg = document.getElementById("item-big-img");
  const smallImg = document.getElementById("item-small-img");

  bigImg.src = item.image;
  smallImg.src = item.image;

  bigImg.alt = `Title of the item (Image): ${item.title}`;
  smallImg.alt = `Title of the item (Image): ${item.title}`;

  // Setting title
  const title = document.getElementById("item-title");
  title.textContent = item.title;

  // Getting the current rating and trying to calculate how many stars should be filled/fractionally filled
  const rating = document.getElementById("item-rating");
  rating.textContent = `(${item.rating.rate})`;
  calculateRating(item.rating.rate);
  const sold = document.getElementById("item-sold");
  sold.textContent = `${item.rating.count} sold`;

  // Description

  const desc = document.getElementById("item-desc");
  desc.textContent = item.description;

  // Price (show fake discount with +100)

  const newMoney = document.getElementById("item-new-money");
  newMoney.textContent = `$${item.price}`;

  const lastMoney = document.getElementById("item-last-money");
  const number = Number(item.price + 100); //dummy money
  lastMoney.textContent = `$${number}`;

  // Setting category only, since brand and color aren't provided from the API

  const category = document.getElementById("item-category");
  const capitalized = item.category[0].toUpperCase() + item.category.slice(1);
  category.textContent = capitalized;
}

//? To know how many starts should be filled etc. and how much the last stars width is.. --> 30% f.e.

function calculateRating(rating) {
  const replacer = document.querySelectorAll("#color-objects .star");
  const whole = Math.floor(rating); //gets the first 3 from 3.3
  const fractional = rating - whole; //Gets 0.3 from 3.3

  replacer.forEach((star, i) => {
    star.classList.remove("star-filled", "star-fill-fractional");
    if (i < whole) {
      star.classList.add("star-filled");
    } else if (i === whole && fractional > 0) {
      star.classList.add("star-fill-fractional");
      star.style.setProperty(
        "--star-width",
        `${Math.round(fractional * 100)}%`,
      );
    }
  });
}

initializeItem(itemID);
