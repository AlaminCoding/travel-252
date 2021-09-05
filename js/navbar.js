const menu = document.querySelector(".main-menu");
const btn = document.querySelector(".toggle-btn");

let openMenu = false;

btn.addEventListener("click", function () {
  if (openMenu === false) {
    menu.style.right = "0%";
    btn.innerHTML = `<i class="bi bi-x-lg"></i>`;
    openMenu = true;
  } else {
    menu.style.right = "-100%";
    btn.innerHTML = `<i class="bi bi-list"></i>`;
    openMenu = false;
  }
});
