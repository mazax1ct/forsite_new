$(document).on('click', '.pb7__nav-link', function () {
  var target = $(this).attr("data-target");
  $(this).closest('.pb7__nav-list').find('.pb7__nav-link').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.pb7').find('.pb7__tab').removeClass('is-active');
  $(this).closest('.pb7').find('.pb7__tab[data-target="'+ target +'"]').addClass('is-active');

  return false;
});
