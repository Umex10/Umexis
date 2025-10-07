//? Using the rating of the item, to calculate how to deal with the colors of the stars.

export function calculateRating(rating, wrapper) {
  const replacer = wrapper.querySelectorAll(".star");
  // Gets the first occurence 3 from 3.3
  const whole = Math.floor(rating);

  // Gets the fractional part of the double number. 3.3 -> 0.3
  const fractional = rating - whole;

  replacer.forEach((star, i) => {
    star.classList.remove("star-filled", "star-fill-fractional");
    if (i < whole) {
      star.classList.add("star-filled");
    } else if (i === whole && fractional > 0) {
      star.classList.add("star-fill-fractional");

      // Calculate how much of the last star should be filled with the orange color.
      star.style.setProperty(
        "--star-width",
        `${Math.round(fractional * 100)}%`,
      );
    }
  });
}
