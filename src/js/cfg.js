$(document).on('click', '.js-description-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass('is-active').text('Скрыть описание');
    $('.cfg__desc-dropdown').slideDown();
  } else {
    $('.cfg__desc-dropdown').slideUp();
    $(this).removeClass('is-active').text('Показать описание');
  }

  return false;
});

$(document).on('click', '.js-description-toggler2', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass('is-active').text('Скрыть подробнее');
    $('.cfg__desc-text').addClass('is-open');
  } else {
    $('.cfg__desc-text').removeClass('is-open');
    $(this).removeClass('is-active').text('Показать подробнее');
  }

  return false;
});


$(document).on('click', '.js-change-parts', function () {
  $('.js-change-parts').removeClass('is-active');
  $(this).addClass('is-active');

  $('.cfg__list-block').removeClass('is-active');
  $('.cfg__list-block[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');

  if($('body').width() < 1024) {
    $('html, body').animate({
      scrollTop: $('.cfg__left').offset().top + $('.cfg__left').outerHeight() - $('.header').outerHeight()
	  }, 500);
  }
  return false;
});
