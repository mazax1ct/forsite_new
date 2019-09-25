//функция навешивания класса с тенью на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  $(window).scrollTop() > h.height()
    ? h.addClass("scrolled")
    : h.removeClass("scrolled");
};

//функция рендеринга наполнения селекта с иконками
function formatState (state) {
  if (!state.id) {
    return state.text;
  }
  var $state = $(
    '<span><svg class="sorting-icon" aria-hidden="true"><use xlink:href="#'+ state.element.className +'" /></svg><span class="text">'+ state.text +'</span></span>'
  );
  $state.find(".text").text(state.text);
  return $state;
};

$(document).ready(function () {
  //запуск функции навешивания класса с тенью на шапку
  resize_scroll();

  //кастомный селект
  $('.js-select').select2({
    minimumResultsForSearch: Infinity
  });

  //кастомный селект с иконками
  $(".js-select2").select2({
    containerCssClass: 'sorting-select',
    dropdownCssClass: 'sorting-select',
    minimumResultsForSearch: Infinity,
    templateResult: formatState,
    templateSelection: formatState
  });

  //слайдер картинок
  if ($('.js-slider').length) {
    $('.js-slider').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-arrow-left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-arrow-right"/></svg></button>',
      dots: true,
      responsive: [
        {
          breakpoint: 849,
          settings: {
            dots: false,
            arrows: true
          }
        }
      ]
    });
  }

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
    $('.header').toggleClass('header--menu_open');
    $('body').toggleClass('overflow');
    $('.menu-block').toggleClass('is-open');
    return false;
  });

  //мобильное выпадающее меню 2 уровня
  $('.js-root-1').click(function () {
    var _this = $(this);
    if(_this.next('.js-sub-1').hasClass('is-open')) {
      _this.next('.js-sub-1').slideToggle(300, function () {
        _this.next('.js-sub-1').toggleClass('is-open');
      });
      _this.removeClass('is-active');
      _this.parent().removeClass('is-active');
    } else if($('.js-sub-1.is-open').length > 0) {
      $('.js-sub-1.is-open').slideToggle(300, function () {
        $(this).toggleClass('is-open');
        _this.next('.js-sub-1').slideToggle(300, function () {
          _this.next('.js-sub-1').toggleClass('is-open');
        });
      });
      $('.js-root-1').removeClass('is-active');
      $('.menu__item').removeClass('is-active');
      _this.addClass('is-active');
      _this.parent().addClass('is-active');
    } else {
      _this.next('.js-sub-1').slideToggle(300, function () {
        _this.next('.js-sub-1').toggleClass('is-open');
      });
      _this.addClass('is-active');
      _this.parent().addClass('is-active');
    }
    return false;
  });

  //открываем мобильное выпадающее меню 3 уровня
  $('.js-root-2').click(function () {
    var _this = $(this);
    $('.menu-block__top').addClass('menu-block__top--submenu_open'); //вешаем класс с нижним отступом для блока с меню
    $('.menu__item').fadeOut(300, function () {
      $('.js-root-1').hide(); //скрываем рутовую сслыку 1 уровня
      $('.js-root-2').hide(); //скрываем рутовую ссылку 2 уровня
      _this.closest('.menu__item').fadeIn(); //показываем блок с меню 3 уровня
      _this.next('.js-sub-2').show(); //показываем меню 3 уровня
    }); //скрываем пункты меню 1 уровня
    return false;
  });

  //закрытие выпадающего меню 3 уровня
  $('.js-root-2-close').click(function () {
    $('.js-sub-2').fadeOut(); //скрываем меню 3 уровня
    $('.menu__item').fadeIn(300, function () {
      $('.js-root-1').fadeIn(); //показываем рутовую сслыку 1 уровня
      $('.js-root-2').fadeIn(); //показываем рутовую ссылку 2 уровня
      $('.js-sub-2').hide(); //скрываем меню 3 уровня
      $('.menu-block__top').removeClass('menu-block__top--submenu_open'); //убираем класс с нижним отступом для блока с меню
    }); //показываем пункты меню 1 уровня
    return false;
  });

  //открытие блока поиска
  $('.js-search-open').click(function () {
    $('.search').addClass('is-open');
    $('.search__input').focus();
    return false;
  });

  //закрытие блока поиска
  $('.js-search-close').click(function () {
    $('.search').removeClass('is-open');
    $('.search__input').val('');
    return false;
  });

  //подстановка варианта поиска в инпут
  $('.js-search-variant').click(function () {
    $('.search-bar__input').val($(this).html());
    return false;
  });
});

//перезапуск функции навешивания класса с тенью на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);
