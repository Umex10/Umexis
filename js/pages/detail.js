import * as fetchModule from "../modules/fetch.js";
import { renderFooter } from "../modules/footer.js";
import { renderHeader } from "../modules/header.js";
import { initApp } from "../modules/initApp.js";
import { calculateRating } from "../modules/stars.js";
import { lightSwitch } from "../modules/lightSwitch.js";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if (header) header.innerHTML = renderHeader();
  if (footer) footer.innerHTML = renderFooter();

  initApp();
  lightSwitch();
  loadItem();
});

//? This will give us the exact id of the item on which the user clicked, --> (Learn more <a>)

function loadItem() {
  const args = new URLSearchParams(window.location.search);
  const itemID = args.get("id");
  initializeItem(itemID);
  //? To display a specific Item after the user clicked on "Learn more" in the slide section

  async function initializeItem(itemID) {
    let item;
    try {
      item = await fetchModule.fetchAPI(
        `https://fakestoreapi.com/products/${itemID}`,
      );
    } catch (error) {
      console.error("Couldn't catch a specific item from the API: ", error);
    }

    // Setting title of tab
    const tabTitle = document.getElementById("title");
    tabTitle.textContent = item.title;

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
    const wrapper = document.querySelector(".color-objects");
    calculateRating(item.rating.rate, wrapper);
    const sold = document.getElementById("item-sold");
    sold.textContent = `${item.rating.count} sold`;

    // Description

    const desc = document.getElementById("item-desc");
    desc.textContent = item.description;

    // Price (show fake discount with +100)

    const newMoney = document.getElementById("item-new-money");
    newMoney.textContent = `$${item.price}`;

    const lastMoney = document.getElementById("item-last-money");
    // Dummy money in order to display discount
    const number = Number(item.price + 100);
    lastMoney.textContent = `$${number}`;

    // Setting category only, since brand and color aren't provided from the API

    const category = document.getElementById("item-category");
    const capitalized = item.category[0].toUpperCase() + item.category.slice(1);
    category.textContent = capitalized;
  }
}
