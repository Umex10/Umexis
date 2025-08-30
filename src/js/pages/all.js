import { renderHeader } from "../modules/header.js";
import { initApp } from "../modules/initApp.js";
import * as gridItem from "../modules/gridItem.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header").innerHTML = renderHeader();

  // Now hamburger + menu exist in DOM

  initApp();
});

//? Method calls

gridItem.addGridItem(0, gridItem.getNumberOfItems());
