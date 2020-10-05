var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var mobileNav = document.querySelector(".mobile-nav");
var toggleButton = document.querySelector(".toggle-button");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", openModal);
}

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeForeground);
}

function openModal() {
  backdrop.style.display = "block";

  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);

  modal.classList.add("open");
}

// mobile hamburguer toggle

toggleButton.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";

  setTimeout(() => {
    backdrop.classList.add("open");
    mobileNav.classList.add("open");
  }, 10);
});

backdrop.addEventListener("click", closeForeground);

function closeForeground() {
  if (modal) {
    modal.classList.remove("open");
  }

  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");

  setTimeout(() => {
    backdrop.style.display = "none";
    mobileNav.style.display = "none";
  }, 10);
}
