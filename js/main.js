$(function() {
    /// ナビ 
    $(".toggle_btn").click(function() {
      $(this).toggleClass("open");
      if ($(this).hasClass("open")) {
        $("nav").addClass("open");
        $("#mask").addClass("open");
      } else {
        $("nav").removeClass("open");
        $("#mask").removeClass("open");
      } 
    });
    // スライダー
  let mySwiper = new Swiper (".swiper", {
    centeredSlides: true,
    loop: true,
    speed: 1000,
    spaceBetween: 60,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      980: { 
        slidesPerView: 3.5,
      },
      768: {  
        slidesPerView: 2,
      },
      600: { 
        slidesPerView: 1.5,
      },
      0: { 
        slidesPerView: 1,
      },
    },
  });
  $(window).scroll(function (){
    $('.feature-item__wrap').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
          $(this).addClass('start');
        }
    });
});
});