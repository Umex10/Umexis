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

  // Initialization to load all the items
  gridItem.addGridItem(0, gridItem.getNumberOfItems());
});
