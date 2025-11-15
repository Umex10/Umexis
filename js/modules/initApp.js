//? To ensure that hamburger + mobile menu are loaded and their functions

export function initApp() {
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!hamburgerButton || !mobileMenu) {
    console.error("Hamburger button or mobile menu not found");
    console.log(hamburgerButton);
    console.log(mobileMenu);
    return;
  }

  const toggleMenu = () => {
    // Handles showing/hiding
    mobileMenu.classList.toggle("flex");

    mobileMenu.classList.toggle("hidden");
    hamburgerButton.classList.toggle("toggle-btn");

    // Disables scroll-function inside menu
    document.body.classList.toggle("overflow-hidden");
  };

  hamburgerButton.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
}
