$(document).ready(function () {
  // Slider js
  $(".banner__slider").slick({
    infinite: true,
    arrows: false,
  });

  // owl carousel
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
      },
    },
  });
});
