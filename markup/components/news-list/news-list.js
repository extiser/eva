//Swiper plugin initialization
initSwiper('.js-swiper-news', '.news-list-column');

//Swiper plugin initialization on window resize
$(window).on('resize', function(){
  initSwiper('.js-swiper-news', '.news-list-column'); 
});