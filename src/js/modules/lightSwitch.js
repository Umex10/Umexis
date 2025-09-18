//? Toggle between dark mode and light mode

export function lightSwitch() {
  const toggle = document.querySelector(".toggle-mode");
  const setMode = toggle.querySelector(".set-mode");
  const buttons = toggle.querySelectorAll(".mode-btn");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // to find out, where we should place the highlight color
      setMode.style.left = index === 0 ? "0.25rem" : "45%";

      // 0 is light switch, 1 is dark switch
      if (index === 0) {
        document.body.classList.remove("dark");
        document.documentElement.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
        document.documentElement.classList.add("dark");
      }

      // Set Localstorage mode for the next page visit
      localStorage.setItem("theme", index ? "dark" : "light");

      localStorage.setItem("theme", index ? "dark" : "light");

      // make sure that every button doesn't containt active class
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // To know if the user already has visited the page with a specific mode
  const savedThema = localStorage.getItem("theme");

  if (savedThema === "light") {
    buttons[0].click();
  } else if (savedThema === "dark") {
    buttons[1].click();
  } else {
    // To load the OS system mode setting.
    const windowMode = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;
    if (windowMode) {
      buttons[0].click();
    } else {
      buttons[1].click();
    }
  }
}
