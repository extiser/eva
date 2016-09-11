var mySwiper = new Swiper('.js-swiper-slider', {
    slidesPerView:'auto',
    centeredSlides:false,
    spaceBetween: 0,
    effect: 'coverflow',
    direction: 'horizontal',
    pagination: $('.js-swiper-slider').find('.swiper-pagination'),
    paginationClickable: true,
    // autoplay: 2500,
    speed: 800,
    coverflow:
      {
        slideShadows:false
      }
});

var swiperMobile;

function initSwiper(js, wrapper) {
    var screenWidth = $(window).width();
    if(screenWidth < 760) {
      $(js).each(function (index, element) {
        $context = $(this);

        $context.addClass('swiper-container');

        $context.children(wrapper).wrapAll('<div class="swiper-wrapper"></div>');

        swiperMobile = new Swiper(this, {            
            spaceBetween: 0,
            freeMode: false,
            autoHeight: true,
            pagination: $context.find('.swiper-pagination'),
            paginationClickable: true
        });
      });
        
    } else if (screenWidth > 760) {
      $(wrapper).removeClass('swiper-slide');
    }        
}

