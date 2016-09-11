$('.js-slideToggle-trigger').click(function (e) {
  e.preventDefault();
  $context = $(this);

  $context.closest('.js-slideToggle').find('.js-slideToggle-box').slideToggle(300);
})