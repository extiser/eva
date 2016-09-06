var mySwiper = new Swiper('.swiper-container', {
    slidesPerView:'auto',
    centeredSlides:false,
    spaceBetween: 0,
    effect: 'coverflow',
    direction: 'horizontal',
    pagination: $('.swiper-container').find('.swiper-pagination'),
    paginationClickable: true,
    // autoplay: 2500,
    speed: 800,
    coverflow:
      {
        slideShadows:false
      }
});