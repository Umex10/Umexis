import { renderHeader } from "../modules/header.js";
import { initApp } from "../modules/initApp.js";
import * as gridItem from "../modules/gridItem.js";
import { renderFooter } from "../modules/footer.js";
import { lightSwitch } from "../modules/lightSwitch.js";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if (header) header.innerHTML = renderHeader();
  if (footer) footer.innerHTML = renderFooter();

  initApp();
  lightSwitch();

  // Get the category (=key) specified within the html element which is loading the html page
  const query = new URLSearchParams(window.location.search);
  // To ensure that the user can also click on the nav item "shop" to gain access to "all" items
  const category = query.get("category") || "all";
  

  // Set the header relating to the category inside item-all page
  const headerGrid = document.getElementById("header-grid");
  if (category === "all") {
    headerGrid.textContent = "All products";
  } else {
    headerGrid.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} - All products`;
  }

  // Initialization to load "all" the items
  gridItem.addGridItem(0, 0, category);
});
