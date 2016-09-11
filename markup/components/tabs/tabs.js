$('.js-tabs-handler').click(function () {
  var tabsIntex = $(this).index();

  if (!$(this).hasClass('_acitve')) {
    $(this).addClass('_active').siblings().removeClass('_active')
      .closest('.js-tabs').find('.js-tabs-content-item').removeClass('_active').eq(tabsIntex).addClass('_active');
  }
});

//Swiper plugin initialization
initSwiper('.js-swiper-tabs', '.equipment-block');

//Swiper plugin initialization on window resize
$(window).on('resize', function(){
  initSwiper('.js-swiper-tabs', '.equipment-block'); 
});