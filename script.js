let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};

/*- function for menu switch */
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu-tab-items") &&
    !e.target.classList.contains("active")
  ) {
    const target = e.target.getAttribute("data-target");
    menuTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const menuSection = document.querySelector(".menu-section");
    menuSection
      .querySelector(".menu-tab-content.active")
      .classList.remove("active");
    menuSection.querySelector(target).classList.add("active");
  }
});

