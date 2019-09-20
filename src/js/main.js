$(document).ready(function () {
  $('.js-select').select2({
    minimumResultsForSearch: Infinity
  });

  //проверка на пустоту поля ввода при загрузке страницы
  $('.js-input').each(function() {
    if($(this).val()) {
      $(this).parent('.input-label').addClass('filled');
    }
  });

  //проверка на пустоту поля ввода
  $('.js-input').blur(function () {
    if($(this).val()) {
      $(this).parent('.input-label').addClass('filled');
    } else {
      $(this).parent('.input-label').removeClass('filled');
    }
  });

  //открваем мобильное меню
  $('.js-menu-open').click(function () {
    $('.body').addClass('overflow');
    $('.mobile-menu').addClass('is-open');
    return false;
  });

  //закрываем мобильное меню
  $('.js-menu-close').click(function () {
    $('.mobile-menu').removeClass('is-open');
    $('.body').removeClass('overflow');
    return false;
  });
});
