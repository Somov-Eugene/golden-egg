const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
