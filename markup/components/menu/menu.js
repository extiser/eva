$('.js-menuMobile-trigger').click(function (e) {
  e.preventDefault();
  $context = $(this);

  $context.toggleClass('_active');
  $('.js-menuMobile-box').slideToggle(300).toggleClass('_active');
})