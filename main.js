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

// $(".menu a").on("click", function (e) {
//   if (this.hash !== "") {
//     e.preventDefault();
//     console.log(this.hash);
//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       0
//     );
//   }
// });
const scroll = new SmoothScroll('.sidebar a[href*="#"]', {
  speed: 200,
});
