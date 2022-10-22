$(document).ready(function () {

  // slick slider
  $(".banner-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
  }, 1500);

  // about video popup
  $('.venobox').venobox();

  // testimonial slider
  $(".testimonial-slider").slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    pauseOnHover: false,
    autoplay: true,
    responsive:[
      {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    },],
  });
  // // counter-up
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });

  // $('.counter').counterUp();

  // brand slider
  $(".brand-slider").slick({
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slick-next next-arrow"></i>',
    autoplay: true,
    responsive: [
      {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    },
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      }
    },
   ],
  });
});