/** @format */
document.querySelector(".humburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 400);
});

const scroll = new SmoothScroll('.sidebar a[href*="#"]', {
  speed: 200,
});
