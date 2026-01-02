const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.getElementById("burgerMenu");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");

  const expanded = burgerBtn.getAttribute("aria-expanded") === "true";
  burgerBtn.setAttribute("aria-expanded", !expanded);
});


