//? Main footer on each website

export function renderFooter() {
  return `  <!-- Wrapper with whole border -->
    <div class="w-full flex flex-col items-center justify-center
         md:border-x 
         border-t 
         border-x-gray-200 
         border-t-gray-200/50
         dark:border-x-white/20  
         dark:border-t-white/5">
      <!-- Slogan and Social-media icons -->
      <div
        class="relative w-full px-4 md:px-8 flex flex-col gap-1 py-10 items-center justify-center  md:flex-row md:justify-between">
        <!-- Border Bottom -->
        <div class="absolute w-full h-full top-0 left-0 border-b-2 border-white/10 pointer-events-none"></div>
        <!-- Brand Information -->
        <section class="flex flex-col items-start justify-start" aria-label="Brand">
          <a href="index.html">
            <h2 class="group cursor-pointer text-[32px] text-center font-bold" tabindex="0">
              <span
                class="font-Bitcount text-4xl text-violet-400 transition-colors duration-200 active:text-violet-600 group-hover:text-violet-500">U</span>mexis
            </h2>
            <a/>
        </section>

        <!-- Social-media icons -->
        <section class="flex flex-row justify-center items-center gap-2 -translate-x-1 md:translate-x-1"
          aria-label="Social-media-icons">
          <!-- Icon 1 -->
          <a class="group cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
              class="w-6 h-6 md:w-8 md:h-8 stroke-black dark:stroke-white group-hover:stroke-violet-500 transition-transform duration-300 transform group-hover:scale-110">
              <path
                d="M83,23a22,22,0,0,1,22,22V83a22,22,0,0,1-22,22H45A22,22,0,0,1,23,83V45A22,22,0,0,1,45,23H83m0-8H45A30.09,30.09,0,0,0,15,45V83a30.09,30.09,0,0,0,30,30H83a30.09,30.09,0,0,0,30-30V45A30.09,30.09,0,0,0,83,15Z"
                fill="none" stroke-width="6.5" />
              <circle cx="90.14" cy="37.73" r="5.73" fill="none" stroke-width="6.5" />
              <circle cx="64.27" cy="64.14" r="17.68" fill="none" stroke-width="6.5" />
            </svg>
          </a>

          <!-- Icon 2 -->
          <a class="group cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
              class="w-6 h-6 md:w-8 md:h-8  stroke-black dark:stroke-white group-hover:stroke-violet-500 transition-transform duration-300 transform group-hover:scale-110">
              <path
                d="M64,32.29c.23,0,22.92,0,37.9,1.08l.66.06c2,.18,4.16.39,6.28,2.58l0,0,0,0c1,1,2.14,4.54,2.53,7.07a156,156,0,0,1,1,16.71v8.24a156.82,156.82,0,0,1-1,16.72c-.37,2.47-1.54,6.06-2.52,7l0,0,0,0c-2.11,2.18-4.32,2.39-6.27,2.58l-.68.07c-14.72,1-36.89,1.1-37.89,1.1-1.15,0-28-.27-36.57-1-.51-.08-1-.15-1.58-.21-2.28-.27-4.87-.58-6.73-2.51l0,0,0,0c-1-1-2.14-4.53-2.52-7.05a156,156,0,0,1-1-16.71V59.86a156.79,156.79,0,0,1,1-16.71c.39-2.55,1.55-6.09,2.53-7.07l0,0,0,0c2.12-2.19,4.33-2.39,6.28-2.58l.66-.06c15-1.07,37.67-1.08,37.89-1.08H64m0-6.5H64s-23.09,0-38.48,1.1c-2.15.25-6.83.27-11,4.59-3.29,3.3-4.37,10.79-4.37,10.79A162.25,162.25,0,0,0,9,59.86V68.1a162.19,162.19,0,0,0,1.1,17.59s1.07,7.49,4.37,10.78c4.19,4.32,9.68,4.19,12.13,4.65,8.8.83,37.4,1.09,37.4,1.09s23.11,0,38.51-1.13c2.15-.25,6.84-.28,11-4.6,3.29-3.29,4.37-10.78,4.37-10.78A162.26,162.26,0,0,0,119,68.11V59.87a162.27,162.27,0,0,0-1.1-17.59s-1.07-7.49-4.37-10.79c-4.18-4.32-8.87-4.35-11-4.59C87.11,25.79,64,25.79,64,25.79Z"
                fill="none" stroke-width="6.5" />
              <polygon points="54.13 47.61 54.13 80.39 82.12 64 54.13 47.61" fill="none" stroke-width="6.5" />
            </svg>
          </a>

          <!-- Icon 3 -->
          <a class="group cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
              class="w-6 h-6 md:w-8 md:h-8 dark:fill-white stroke-black dark:stroke-white group-hover:fill-violet-500 transition-transform duration-300 transform group-hover:scale-110">
              <path
                d="M106.09,20.5a1.41,1.41,0,0,1,1.41,1.41v84.19a1.41,1.41,0,0,1-1.41,1.41H21.91a1.41,1.41,0,0,1-1.41-1.41V21.91a1.41,1.41,0,0,1,1.41-1.41h84.19m0-6.5H21.91A7.91,7.91,0,0,0,14,21.91v84.19A7.91,7.91,0,0,0,21.91,114h84.19a7.91,7.91,0,0,0,7.91-7.91V21.91A7.91,7.91,0,0,0,106.09,14Z" />
              <rect height="41.73" width="11.73" x="37.27" y="50.4" />
              <path
                d="M77.23,50.4C67.18,50.4,67,56.21,67,56.61V50.4H55V92.13H67V68.31c0-1.86.55-5.86,6.23-5.86s5.63,5.73,5.63,5.73v24H90.73v-26C90.73,53.85,84,50.4,77.23,50.4Z" />
              <circle cx="43.13" cy="41.73" r="5.86" />
            </svg>
          </a>

          <!-- Icon 4 -->
          <a class="group cursor-pointer">
            <svg data-name="Layer 1" viewBox="0 0 128 128"
              class="w-6 h-6 md:w-8 md:h-8  stroke-black dark:stroke-white group-hover:stroke-violet-500 transition-transform duration-300 transform group-hover:scale-110">
              <path
                d="M64,20.5c24,0,43.5,17.76,43.5,39.59S88,99.69,64,99.69a47.6,47.6,0,0,1-11.71-1.46l-2.38-.6-2.18,1.12-9,4.63V92.44l-2.56-2C26.2,82.93,20.5,71.85,20.5,60.09,20.5,38.26,40,20.5,64,20.5M64,14C36.39,14,14,34.64,14,60.09c0,14.32,7.08,27.11,18.19,35.57V114l18.5-9.48A54,54,0,0,0,64,106.19c27.61,0,50-20.64,50-46.09S91.61,14,64,14Z"
                fill="none" stroke-width="6.5" stroke-miterlimit="10" />
              <polygon points="33.19 74.06 58.77 46.62 71.76 59.7 94.81 47.1 69.13 75.13 56.53 61.36 33.19 74.06"
                fill="none" stroke-width="6.5" stroke-miterlimit="10" />
            </svg>
          </a>
        </section>
      </div>

      <!-- Whole Navigation inside footer -->
      <section class="relative w-full flex flex-row justify-center" aria-label="Whole navigation">
        <!-- Border Bottom -->
        <div
          class="absolute w-full h-full top-0 left-0 border-b-2 border-gray-200 dark:border-white/10 pointer-events-none">
        </div>

        <!-- Navigation wrapper -->
        <div class="px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-20">
          <!-- Navigation 1 - Shop-->
          <nav class="flex flex-col gap-2" aria-label="Shop">
            <h2 class="text-black dark:text-white font-bold uppercase">Shop</h2>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">New Arrivals</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Best Sellers</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Gift Cards</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Special Sales</a>
          </nav>

          <!-- Navigation 2 - Customer-Service -->
          <nav class="flex flex-col gap-2" aria-label="Customer-Service">
            <h2 class="text-black dark:text-white font-bold uppercase">Customer-Service</h2>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Contact Us</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Shipping & Delivery</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Returns & Exchanges</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">FAQ</a>
          </nav>

          <!-- Navigation 3 - Company -->
          <nav class=" flex flex-col gap-2" aria-label="Company">
            <h2 class="text-black dark:text-white font-bold uppercase">Company</h2>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="about.html">About Us</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Careers</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Sustainability</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Press</a>
          </nav>

          <!-- Navigation 4 - Legal -->
          <nav class=" flex flex-col gap-2" aria-label="Legal">
            <h2 class="text-black dark:text-white font-bold uppercase">Legal</h2>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Privacy Policy</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Terms of Service</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Refund Policy</a>
            <a class="text-gray-500 transition-colors duration-200 hover:text-violet-500 active:text-violet-600"
              href="#">Cookie Settings</a>
          </nav>
        </div>
      </section>
      <!-- Small-details -->
      <section class="w-full flex flex-col md:flex-row md:justify-between items-center gap-4 py-10 md:px-8"
        aria-label="Small-details">
        <!-- Jump back to the header link -->
        <a href="#main"
          class="back-to-top flex items-center gap-2 rounded-xl text-sm py-0.5 px-2 h-8 md:h-12 group bg-gray-300 dark:bg-gray-500 hover:bg-violet-500 active:bg-violet-600 dark:hover:bg-violet-500 dark:active:bg-violet-600 transition-all duration-300">
          <span
            class="text-2xl md:text-3xl font-extrabold text-violet-400 group-hover:text-black transition-all duration-300">↑</span>
          <span class="text-xs md:text-lg">Back to the start</span>
        </a>

        <!-- Wrapper of light-switch -->
        <div
          class="toggle-mode relative flex flex-row rounded-full group/setmode bg-gray-300 dark:bg-gray-500 hover:bg-gray-600 active:bg-gray-700 dark:hover:bg-gray-300 dark:active:bg-gray-400 transition-all ease-in-out duration-300 w-16 h-8 md:w-24 md:h-12 md:order-3 cursor-pointer overflow-hidden">
          <!-- Setting violet circle (Set mode) -->
          <div
            class="set-mode absolute top-1 left-1 w-1/2 h-6 md:h-10 bg-violet-400   group-hover/setmode:bg-violet-500  group-active/setmode:bg-violet-600 dark:group-hover/setmode:bg-violet-500  dark:group-active/setmode:bg-violet-600  rounded-full transition-all duration-300 pointer-events-auto">
          </div>

          <!-- Buttons - Light switch - icons -->
          <!-- Sun Icon for Light-Mode -->
          <button class="mode-btn flex-1 flex items-center justify-center relative z-10">

            <svg class="w-4 h-4 md:w-6 md:h-6 stroke-black dark:stroke-white" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256" fill="none" stroke-width="6.5" stroke="currentColor">
              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path
                  d="M 88 47 H 77.866 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 H 88 c 1.104 0 2 0.896 2 2 S 89.104 47 88 47 z"
                  stroke-linecap="round" />
                <path
                  d="M 12.134 47 H 2 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 10.134 c 1.104 0 2 0.896 2 2 S 13.239 47 12.134 47 z"
                  stroke-linecap="round" />
                <path
                  d="M 45 14.134 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 10.134 C 47 13.239 46.104 14.134 45 14.134 z"
                  stroke-linecap="round" />
                <path
                  d="M 45 90 c -1.104 0 -2 -0.896 -2 -2 V 77.866 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 V 88 C 47 89.104 46.104 90 45 90 z"
                  stroke-linecap="round" />
                <path
                  d="M 75.405 77.405 c -0.512 0 -1.023 -0.195 -1.414 -0.586 l -7.166 -7.166 c -0.781 -0.781 -0.781 -2.047 0 -2.828 s 2.047 -0.781 2.828 0 l 7.166 7.166 c 0.781 0.781 0.781 2.047 0 2.828 C 76.429 77.21 75.917 77.405 75.405 77.405 z"
                  stroke-linecap="round" />
                <path
                  d="M 21.76 23.76 c -0.512 0 -1.024 -0.195 -1.414 -0.586 l -7.166 -7.166 c -0.781 -0.781 -0.781 -2.047 0 -2.828 c 0.78 -0.781 2.048 -0.781 2.828 0 l 7.166 7.166 c 0.781 0.781 0.781 2.047 0 2.828 C 22.784 23.565 22.272 23.76 21.76 23.76 z"
                  stroke-linecap="round" />
                <path
                  d="M 68.239 23.76 c -0.512 0 -1.023 -0.195 -1.414 -0.586 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 7.166 -7.166 c 0.781 -0.781 2.047 -0.781 2.828 0 c 0.781 0.781 0.781 2.047 0 2.828 l -7.166 7.166 C 69.263 23.565 68.751 23.76 68.239 23.76 z"
                  stroke-linecap="round" />
                <path
                  d="M 14.594 77.405 c -0.512 0 -1.024 -0.195 -1.414 -0.586 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 7.166 -7.166 c 0.78 -0.781 2.048 -0.781 2.828 0 c 0.781 0.781 0.781 2.047 0 2.828 l -7.166 7.166 C 15.618 77.21 15.106 77.405 14.594 77.405 z"
                  stroke-linecap="round" />
                <path
                  d="M 45 66.035 c -11.599 0 -21.035 -9.437 -21.035 -21.035 S 33.401 23.965 45 23.965 S 66.035 33.401 66.035 45 S 56.599 66.035 45 66.035 z M 45 27.965 c -9.393 0 -17.035 7.642 -17.035 17.035 c 0 9.394 7.642 17.035 17.035 17.035 c 9.394 0 17.035 -7.642 17.035 -17.035 C 62.035 35.607 54.394 27.965 45 27.965 z"
                  stroke-linecap="round" />
              </g>
            </svg>
          </button>

          <!-- Moon Icon for Dark-Mode -->
          <button class="mode-btn flex-1 flex items-center justify-center relative z-10">
            <svg class="w-4 h-4 md:w-6 md:h-6 stroke-black dark:stroke-white" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="6.5">
              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path
                  d="M 46.618 90 c -12.452 0 -24.159 -4.849 -32.964 -13.654 c -18.176 -18.177 -18.176 -47.752 0 -65.928 c 4.469 -4.469 9.687 -7.925 15.507 -10.273 c 0.813 -0.327 1.742 -0.089 2.295 0.588 c 0.554 0.677 0.604 1.635 0.124 2.366 c -10.35 15.731 -8.183 36.83 5.154 50.167 l 0 0 C 50.072 66.602 71.171 68.769 86.9 58.419 c 0.73 -0.482 1.69 -0.431 2.366 0.123 c 0.678 0.555 0.915 1.484 0.588 2.296 c -2.347 5.82 -5.803 11.038 -10.272 15.508 C 70.777 85.151 59.07 90 46.618 90 z M 25.076 6.595 c -3.118 1.827 -5.994 4.051 -8.594 6.651 c -16.616 16.617 -16.616 43.654 0 60.271 C 24.532 81.567 35.234 86 46.618 86 s 22.086 -4.433 30.136 -12.482 c 2.6 -2.601 4.824 -5.477 6.651 -8.595 c -16.447 7.582 -36.384 4.285 -49.499 -8.829 l 0 0 C 20.792 42.979 17.495 23.042 25.076 6.595 z"
                  stroke-linecap="round" />
                <path
                  d="M 46.618 90 c -12.452 0 -24.159 -4.849 -32.964 -13.654 c -18.176 -18.177 -18.176 -47.752 0 -65.928 c 4.469 -4.469 9.687 -7.925 15.507 -10.273 c 0.813 -0.327 1.742 -0.089 2.295 0.588 c 0.554 0.677 0.604 1.635 0.124 2.366 c -10.35 15.731 -8.183 36.83 5.154 50.167 l 0 0 C 50.072 66.602 71.171 68.769 86.9 58.419 c 0.73 -0.482 1.69 -0.431 2.366 0.123 c 0.678 0.555 0.915 1.484 0.588 2.296 c -2.347 5.82 -5.803 11.038 -10.272 15.508 C 70.777 85.151 59.07 90 46.618 90 z M 25.076 6.595 c -3.118 1.827 -5.994 4.051 -8.594 6.651 c -16.616 16.617 -16.616 43.654 0 60.271 C 24.532 81.567 35.234 86 46.618 86 s 22.086 -4.433 30.136 -12.482 c 2.6 -2.601 4.824 -5.477 6.651 -8.595 c -16.447 7.582 -36.384 4.285 -49.499 -8.829 l 0 0 C 20.792 42.979 17.495 23.042 25.076 6.595 z"
                  stroke-linecap="round" />
                <path
                  d="M 64.546 56.373 c -1.258 0 -2.37 -0.805 -2.77 -2.003 l 0 0 c -1.492 -4.478 -5.056 -8.042 -9.532 -9.533 c -1.198 -0.399 -2.003 -1.512 -2.003 -2.769 s 0.805 -2.37 2.002 -2.769 c 4.478 -1.492 8.041 -5.055 9.533 -9.532 c 0.399 -1.198 1.512 -2.003 2.77 -2.003 c 1.257 0 2.369 0.805 2.769 2.003 c 1.491 4.478 5.055 8.041 9.532 9.532 c 1.198 0.399 2.003 1.512 2.003 2.769 c 0.001 1.257 -0.804 2.37 -2.001 2.77 c -4.479 1.492 -8.042 5.056 -9.534 9.533 C 66.915 55.567 65.803 56.373 64.546 56.373 z M 55.983 42.068 c 3.693 1.848 6.714 4.869 8.563 8.562 c 1.848 -3.693 4.868 -6.714 8.562 -8.562 c -3.693 -1.848 -6.715 -4.869 -8.563 -8.562 C 62.697 37.199 59.676 40.22 55.983 42.068 z"
                  stroke-linecap="round" />
                <path
                  d="M 73.989 22.606 c -1.083 0 -2.041 -0.693 -2.384 -1.723 c -0.744 -2.232 -2.521 -4.009 -4.754 -4.753 c -1.029 -0.342 -1.722 -1.3 -1.723 -2.382 s 0.691 -2.041 1.722 -2.384 c 2.233 -0.744 4.011 -2.521 4.755 -4.754 c 0.343 -1.03 1.301 -1.722 2.384 -1.722 c 1.082 0 2.04 0.692 2.383 1.723 c 0.744 2.232 2.521 4.009 4.754 4.753 c 1.03 0.343 1.723 1.3 1.723 2.383 s -0.692 2.041 -1.724 2.384 c -2.231 0.744 -4.009 2.521 -4.753 4.754 C 76.029 21.914 75.071 22.606 73.989 22.606 z M 70.956 13.746 c 1.189 0.813 2.22 1.844 3.033 3.033 c 0.813 -1.189 1.843 -2.22 3.032 -3.033 c -1.189 -0.813 -2.22 -1.844 -3.033 -3.033 C 73.176 11.903 72.146 12.933 70.956 13.746 z"
                  stroke-linecap="round" />
                <path
                  d="M 43.875 31.168 c -1.131 0 -2.131 -0.724 -2.49 -1.799 v 0 c -0.951 -2.854 -3.222 -5.125 -6.076 -6.077 c -1.076 -0.358 -1.8 -1.359 -1.8 -2.49 c 0 -1.131 0.724 -2.132 1.8 -2.49 c 2.854 -0.951 5.125 -3.223 6.076 -6.076 c 0.358 -1.076 1.359 -1.8 2.49 -1.8 c 1.13 0 2.131 0.724 2.49 1.8 c 0.951 2.854 3.223 5.125 6.076 6.076 c 1.077 0.358 1.8 1.359 1.8 2.49 s -0.723 2.132 -1.8 2.49 c -2.854 0.951 -5.125 3.223 -6.076 6.077 C 46.005 30.446 45.004 31.168 43.875 31.168 z M 39.369 20.801 c 1.832 1.125 3.38 2.674 4.505 4.506 c 1.125 -1.832 2.673 -3.38 4.505 -4.506 c -1.832 -1.125 -3.38 -2.673 -4.506 -4.505 C 42.749 18.128 41.201 19.676 39.369 20.801 z"
                  stroke-linecap="round" />
              </g>
            </svg>

          </button>
        </div>

        <!-- Brand year information -->
        <small class="md:text-lg">© 2025 Umexis, Inc.</small>
      </section>
    </div>`;
}
