const initApp = () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerButton.classList.toggle("toggle-btn");
    document.body.classList.toggle("overflow-hidden"); //disables scroll-function inside menu
  };

  hamburgerButton.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

// crucial to ensure that hamburger as well as the mobile menu run perfectly, without loss of data.
document.addEventListener("DOMContentLoaded", initApp);

// to fetch a specific item or the whole item list
async function fetchAPI(apiURL) {
  const reply = await fetch(apiURL);

  if (!reply.ok) {
    throw new Error("Could not fetch the data");
  }

  return await reply.json();
}

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

  const dotsNodeList = document.querySelectorAll("#slider-dots .dot");
  const dotsArray = Array.from(dotsNodeList);
  dotsArray.forEach((element, index) => {
    element.addEventListener("click", (event) => {
      dotsArray[current].classList.remove(
        "bg-orange-400",
        "dark:bg-orange-400",
        "animate-slide-span",
      );

      current = index;
      displayItem(items[current]);

      dotsArray[current].classList.add(
        "bg-orange-400",
        "dark:bg-orange-400",
        "animate-slide-span",
      );
    });
  });

  displayItem(items[current]);
  dotsArray[current].classList.add(
    "bg-orange-400",
    "dark:bg-orange-400",
    "animate-slide-span",
  );

  //? Items slider...
  setInterval(() => {
    dotsArray[current].classList.remove(
      "bg-orange-400",
      "dark:bg-orange-400",
      "animate-slide-span",
    );
    current = (current + 1) % items.length;
    displayItem(items[current]);
    dotsArray[current].classList.add(
      "bg-orange-400",
      "dark:bg-orange-400",
      "animate-slide-span",
    );
  }, 5000);
}

//? To display a specific item at the current slide-index

function displayItem(item) {
  const { image: img } = item;

  const itemImg = document.getElementById("item-img");
  const itemExclusiveText = document.getElementById("item-exclusive");
  const itemDesc = document.getElementById("item-desc");

  itemImg.src = img;
  itemImg.alt = `Item: ${item.title}`;
  itemExclusiveText.textContent = item.exclusive;
  itemDesc.textContent = item.desc;

  //animation mechanism
  itemImg.classList.remove("animate-slideIn");
  void itemImg.offsetWidth;
  itemImg.classList.add("animate-slideIn");

  itemExclusiveText.classList.remove("animate-slideIn");
  void itemExclusiveText.offsetWidth;
  itemExclusiveText.classList.add("animate-slideIn");

  itemDesc.classList.remove("animate-slideIn");
  void itemDesc.offsetWidth;
  itemDesc.classList.add("animate-slideIn");
}

initSlider();
