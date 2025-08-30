import { calculateRating } from "../modules/stars.js";
import * as fetchModule from "../modules/fetch.js";

//? To get all items of the API, since it is necessary for the addGridItem() method.

export async function gridItems() {
  try {
    const gridArray = await fetchModule.fetchAPI(
      "https://fakestoreapi.com/products",
    );
    return gridArray;
  } catch (error) {
    console.error("Couldn't fetch all items.");
    return [];
  }
}

//? Getting the items from the array (gridItems() return) in a specific range, which will then be added to the grid-layout

let numberOfItems;

export async function addGridItem(amountFrom, amountTo) {
  let gridArray;
  try {
    gridArray = await gridItems();
    numberOfItems = gridArray.length;
    // Sort in DESC ('featured items' mechanism related to 'most sold' number)

    gridArray.sort((a, b) => Number(b.rating.count) - Number(a.rating.count));
    const grid = document.getElementById("grid");

    // Always clear the innerHTML, before loading more items

    grid.innerHTML = "";

    gridArray.slice(amountFrom, amountTo).forEach((item) => {
      grid.innerHTML += createGridItem(item);
      const wrapper = grid.lastElementChild.querySelector(".color-objects");
      calculateRating(item.rating.rate, wrapper);
    });
  } catch (error) {
    console.error("Couldn't add item to given grid-layout.");
  }

  const buttonHeart = document.querySelectorAll(".button-heart");

  buttonHeart.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Doesn't trigger upper event listener also!

      event.stopPropagation();

      const fillHeart = event.currentTarget.querySelector(".fill-heart");
      const emptyHeart = event.currentTarget.querySelector(".empty-heart");
      if (!fillHeart || !emptyHeart) {
        console.warn("Heart SVGs missing!");
        return;
      }

      console.log("Heart clicked!", event.currentTarget);
      fillHeart.classList.toggle("hidden");
      emptyHeart.classList.toggle("hidden");
    });
  });

  // Main Clickevent

  const gridItem = document.querySelectorAll(".grid-item");

  gridItem.forEach((element) => {
    element.addEventListener("click", (event) => {
      const itemID = element.dataset.id;
      window.location.href = `item-detail.html?id=${itemID}`;
    });
  });
}

export function getNumberOfItems() {
  return numberOfItems;
}

//? This function will create a gridItem and pased it in the given gridLayout.

export function createGridItem(item) {
  return `
    <div class="grid-item flex flex-col gap-3 cursor-pointer w-full" data-id="${item.id}">
  <div
    class="group relative cursor-pointer rounded-xl border-white/20 w-full overflow-hidden aspect-[4/3] p-6 md:p-4 flex items-center justify-center bg-gray-200/90 dark:border dark:bg-[#1C3B5A]/70">
    <img src="${item.image}" alt="Title of the item (Image): ${item.title}"
      class="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105" />
    <button
  class="button-heart group/btn absolute right-3 top-3 w-7 h-7 md:w-10 md:h-10 rounded-full bg-white dark:bg-sky-900 transition-transform duration-300 hover:scale-105">
  <svg class="fill-heart m-auto w-4 h-4 md:w-6 md:h-6 text-orange-500 group-hover/btn:text-orange-400 transition-colors"
    fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
    </path>
  </svg> <svg
    class="empty-heart hidden m-auto w-4 h-4 md:w-6 md:h-6 text-orange-500 group-hover/btn:text-orange-400 transition-colors"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg> </button>
  </div>

  <div class="flex flex-col gap-0.5">
    <div class="flex flex-col">
      <h3 class="text-base font-medium overflow-hidden whitespace-nowrap text-ellipsis">${item.title}</h3>
      <p class="grid-item-desc hidden md:block text-gray-500 md:text-gray-400 text-sm overflow-hidden whitespace-nowrap text-ellipsis">
        ${item.description}</p>
    </div>

    <div class="flex flex-row items-baseline gap-2">
      <div class="color-objects relative flex -gap-1 text-[16px] md:text-[22px]">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
      </div>
      <span id="item-rating"
        class="text-sm md:text-lg text-gray-500">
        ${item.rating.rate} • <span id="item-sold"
          class="text-sm md:text-lg text-gray-500 transition-colors">${item.rating.count}</span>
      </span>
    </div>
  </div>

  <div class="flex flex-row justify-between items-baseline gap-2 py-3 -mt-5">
    <p id="item-new-money"
      class="flex-1 text-lg font-bold">$${item.price}
    </p>
    <button class="hidden px-4 py-2 md:inline-block border rounded-xl border-gray-200 dark:border-white/20 text-gray-400 hover:bg-gray-50 hover:dark:bg-[#1C3B5A]/70">Buy now</button>
  </div>
</div>
  `;
}
