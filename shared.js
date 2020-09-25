var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var mobileNav = document.querySelector(".mobile-nav");
var toggleButton = document.querySelector(".toggle-button");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", openModal);
}

backdrop.addEventListener("click", closeForeground);

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeForeground);
}

toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

function openModal() {
  backdrop.classList.add("open");
  modal.classList.add("open");
}

function closeForeground() {
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
  mobileNav.classList.remove("open");
}
