# 🛍️ Umexis — Summary (English)

**Small, client-side e-commerce frontend** built with **HTML**, **Tailwind CSS**, and modular **ES modules (JavaScript)**.

---

## ⚡ Quick Overview

📁 Project structure (located in `src/`):

- **Static multi-page site:**
  - [`src/index.html`](src/index.html)
  - [`src/about.html`](src/about.html)
  - [`src/item-all.html`](src/item-all.html)
  - [`src/item-detail.html`](src/item-detail.html)

🧩 **Styling:**
- Tailwind build output: [`build/css/style.css`](build/css/style.css)
- Config: [`tailwind.config.js`](tailwind.config.js)
- Source utilities: [`src/input.css`](src/input.css)

🧠 **JavaScript structure:**

- **Pages:**  
  [`src/js/pages/main.js`](src/js/pages/main.js)  
  [`src/js/pages/all.js`](src/js/pages/all.js)  
  [`src/js/pages/detail.js`](src/js/pages/detail.js)  
  [`src/js/pages/about.js`](src/js/pages/about.js)

- **Modules:**  
  [`src/js/modules/header.js`](src/js/modules/header.js)  
  [`src/js/modules/footer.js`](src/js/modules/footer.js)  
  [`src/js/modules/fetch.js`](src/js/modules/fetch.js)  
  [`src/js/modules/gridItem.js`](src/js/modules/gridItem.js)  
  [`src/js/modules/initApp.js`](src/js/modules/initApp.js)  
  [`src/js/modules/lightSwitch.js`](src/js/modules/lightSwitch.js)  
  [`src/js/modules/stars.js`](src/js/modules/stars.js)

---

## 🧩 Notable Implementation Points

- **Header/Footer injection:** via [`renderHeader`](src/js/modules/header.js) and [`renderFooter`](src/js/modules/footer.js)  
- **Network helper:** [`fetchAPI`](src/js/modules/fetch.js) wraps the native fetch API and returns JSON  
- **Home page slider:**  
  - Initialization: [`initSlider`](src/js/pages/main.js)  
  - Rendering: [`displayItem`](src/js/pages/main.js)  
  - "Learn more" forwards to detail page with `?id=...`
- **Grid / product listing:**  
  - Fetch by category: [`gridItems`](src/js/modules/gridItem.js)  
  - Render/more logic: [`addGridItem`](src/js/modules/gridItem.js) + [`all.js`](src/js/pages/all.js)
- **Item detail:**  
  - Page loader: [`loadItem`](src/js/pages/detail.js)  
  - Rating visuals: [`calculateRating`](src/js/modules/stars.js)
- **UI helpers:**  
  - Dark/light mode: [`lightSwitch`](src/js/modules/lightSwitch.js) (persists via localStorage)  
  - App bootstrap: [`initApp`](src/js/modules/initApp.js)  
  - Testimonials cloning: [`initStars`](src/js/pages/main.js), [`cloneTestimonials`](src/js/pages/main.js)

---

## 🧑‍💻 Run / Develop

1. **Install dependencies**
   ```bash
   npm install
