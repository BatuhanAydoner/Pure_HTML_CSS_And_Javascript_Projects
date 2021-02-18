const container = document.querySelector(".container");
const menuContainer = document.querySelector(".menu-container");
const nav = document.querySelector('.nav');

let isMenuOpen = false;

menuContainer.addEventListener("click", (e) => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menuContainer.style.transform = "rotate(-90deg)";
    container.style.transform = "rotate(-20deg)";
    nav.classList.add('show-nav');
  }else {
    menuContainer.style.transform = "rotate(0deg)";
    container.style.transform = "rotate(0deg)";
    nav.classList.remove('show-nav');
  }
});
