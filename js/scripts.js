const specSlider = new Swiper(".spec__slider", {
  loop: true,
  speed: 750,
  pagination: {
    el: ".spec__pagination",
    type: "bullets",
    clickable: true,
  },
});

const menuSliders = new Swiper(".menu__slider", {
  slidesPerView: 2,
	slidesPerColumn: 2,
	speed: 500,
  pagination: {
    el: ".menu__pagination",
    type: "bullets",
    clickable: true,
  },
});

const tabs = document.querySelector(".tabs");
const menuSliderBlock = document.querySelectorAll(".menu__slider-block");

tabs.addEventListener("click", function (e) {
  // Switch tabs
  if (e.target.classList.contains("tabs__item")) {
    this.querySelectorAll(".tabs__item").forEach((tab) =>
      tab.classList.remove("active")
    );
    e.target.classList.add("active");
  }

  // Switch slider block
  menuSliderBlock.forEach((slider) => slider.classList.remove("show"));
  document.querySelector(e.target.dataset.tab).classList.add("show");
});

// Horizontal scroll
const overflowTabs = () => {
  let outerTabs = document.querySelector(".tabs__container");
  let innerTabs = document.querySelector(".tabs");

  if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
    innerTabs.classList.add("overflow");
  } else {
    innerTabs.classList.remove("overflow");
  }
};

window.addEventListener("load", overflowTabs);
window.addEventListener("resize", overflowTabs);
