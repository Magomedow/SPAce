$(function(){
   $('.slider__box').slick({
      prevArrow:'<img class="slider__arrow slider__arrow-left" src="images/A1.svg" alt="arrow-left">',
      nextArrow:'<img class="slider__arrow slider__arrow-right" src="images/A2.svg" alt="arrow-right">',
   });

   $('.menu-btn').on('click', function(){
      $('.menu__list').toggleClass('active');
   });
});
