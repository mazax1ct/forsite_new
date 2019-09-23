//функция навешивания класса с тенью на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  $(window).scrollTop() > h.height()
    ? h.addClass("scrolled")
    : h.removeClass("scrolled");
};

$(document).ready(function () {
  //запуск функции навешивания класса с тенью на шапку
  resize_scroll();

  //кастомный селект
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
    $(this).toggleClass('is-active');
    $('.header').toggleClass('m-menu-open');
    $('.body').toggleClass('overflow');
    $('.mobile-menu').toggleClass('is-open');
    return false;
  });

  //мобильное выпадающее меню 2 уровня
  $('.js-m-root-1').click(function () {
    var _this = $(this);
    if(_this.next('.js-m-sub-1').hasClass('is-open')) {
      _this.next('.js-m-sub-1').slideToggle(300, function () {
        _this.next('.js-m-sub-1').toggleClass('is-open');
      });
      _this.removeClass('is-active');
      _this.parent().removeClass('is-active');
    } else if($('.js-m-sub-1.is-open').length > 0) {
      $('.js-m-sub-1.is-open').slideToggle(300, function () {
        $(this).toggleClass('is-open');
        _this.next('.js-m-sub-1').slideToggle(300, function () {
          _this.next('.js-m-sub-1').toggleClass('is-open');
        });
      });
      $('.js-m-root-1').removeClass('is-active');
      $('.m-menu__item').removeClass('is-active');
      _this.addClass('is-active');
      _this.parent().addClass('is-active');
    } else {
      _this.next('.js-m-sub-1').slideToggle(300, function () {
        _this.next('.js-m-sub-1').toggleClass('is-open');
      });
      _this.addClass('is-active');
      _this.parent().addClass('is-active');
    }
    return false;
  });

  //открываем мобильное выпадающее меню 3 уровня
  $('.js-m-root-2').click(function () {
    var _this = $(this);
    $('.mobile-menu__top').addClass('mobile-menu__top--open_submenu'); //вешаем класс с нижним отступом для блока с меню
    $('.m-menu__item').fadeOut(300, function () {
      $('.js-m-root-1').hide(); //скрываем рутовую сслыку 1 уровня
      $('.js-m-root-2').hide(); //скрываем рутовую ссылку 2 уровня
      _this.closest('.m-menu__item').fadeIn(); //показываем блок с меню 3 уровня
      _this.next('.js-m-sub-2').show(); //показываем меню 3 уровня
    }); //скрываем пункты меню 1 уровня
    return false;
  });

  //закрытие выпадающего меню 3 уровня
  $('.js-m-root-2-close').click(function () {
    $('.js-m-sub-2').fadeOut(); //скрываем меню 3 уровня
    $('.m-menu__item').fadeIn(300, function () {
      $('.js-m-root-1').fadeIn(); //показываем рутовую сслыку 1 уровня
      $('.js-m-root-2').fadeIn(); //показываем рутовую ссылку 2 уровня
      $('.js-m-sub-2').hide(); //скрываем меню 3 уровня
      $('.mobile-menu__top').removeClass('mobile-menu__top--open_submenu'); //убираем класс с нижним отступом для блока с меню
    }); //показываем пункты меню 1 уровня
    return false;
  });
});

//перезапуск функции навешивания класса с тенью на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);
