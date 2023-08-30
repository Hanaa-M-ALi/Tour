/* open / close menu*/
const openMenu = document.querySelector(".navbar-toggler"),
  closeMenu = document.querySelector(".close-button"),
  navbarMenu = document.querySelector(".navbar-nav"),
  navbarCollapse = document.querySelector(".navbar-collapse"),
  hedaerBackdrop = document.querySelector(".backdrop");

console.log(openMenu, closeMenu);
openMenu.addEventListener("click", () => {
  navbarMenu.classList.add("show");
  hedaerBackdrop.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }
  navbarMenu.classList.remove("show");
  hedaerBackdrop.classList.remove("active");
});

/* animation typing words */
const text = document.querySelector(".Typing-words");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "New Zealand.";
  }, 0);
  setTimeout(() => {
    text.textContent = "Maui.";
  }, 4000);
  setTimeout(() => {
    text.textContent = "London.";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Paris.";
  }, 12000);
  setTimeout(() => {
    text.textContent = "San Francisco.";
  }, 16000);
};
textLoad();
setInterval(textLoad, 20000);

/* Select destination*/
const select = document.querySelector(".selection");
let destination = [
  "Peru",
  "Japan",
  "Thailand",
  "Brazil",
  "Yemen",
  "United States",
  "China",
  "Russia",
];
for (let i = 0; i < destination.length; i++) {
  let option = document.createElement("option");
  let text = document.createTextNode(destination[i]);
  option.appendChild(text);
  select.append(option);
}

/* services counter wrap*/
const counterWrap = document.querySelectorAll(".counter span");
const interval = 10000;

counterWrap.forEach((value) => {
  let startValue = 0;
  let endValue = parseInt(value.getAttribute("data-number"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    value.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});

/* testimonials section*/
function testimonials() {
  const carouselOne = document.getElementById("carouselOne");

  if (carouselOne) {
    carouselOne.addEventListener("slide.bs.carousel", function () {
      // do something...
      const activeItem = this.querySelector(".active");
      console.log(activeItem);
      document.querySelector(".js-testimonials-img").src =
        activeItem.getAttribute("data-js-textimonials-img");
    });
  }
}
testimonials();
