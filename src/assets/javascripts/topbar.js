const iconMobile = document.querySelector(".header-menu-icon");
const headerMenu = document.querySelector(".header-menu");
let isMobileOpen = false;
let mobileMenuDOM;

const closeMenu = () => {
  mobileMenuDOM.classList.remove("open");
};

const createMobileMenu = () => {
  mobileMenuDOM = document.createElement("div");
  mobileMenuDOM.classList.add("mobile-menu");
  mobileMenuDOM.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  mobileMenuDOM.append(headerMenu.querySelector("ul").cloneNode(true));
  headerMenu.append(mobileMenuDOM);
};
const openMenu = () => {
  if (mobileMenuDOM) {
  } else {
    createMobileMenu();
  }
  mobileMenuDOM.classList.add("open");
};

const toggleMobileMenu = (event) => {
  console.log(event);
  if (isMobileOpen) {
    closeMenu();
  } else {
    openMenu();
  }
  isMenuOpen = !isMobileOpen;
};

iconMobile.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMobileMenu();
});

window.addEventListener("click", () => {
  if (isMobileOpen) {
    toggleMobileMenu();
  } else {
  }
});
window.addEventListener("resize", (event) => {
  console.log(event);
  if (window.innerWidth > 480 && isMobileOpen) {
    toggleMobileMenu();
  } else {
  }
});
