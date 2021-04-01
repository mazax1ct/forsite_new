$(document).ready(function () {
  if ($('.js-simple-slider').length) {
    $('.js-simple-slider').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      dots: true
    });
  }
});
