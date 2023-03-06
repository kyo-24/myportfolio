$(function() {

  new WOW().init();

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1,
    breakpoints: {
      // スライドの表示枚数：500px以上の場合
      768: {
        slidesPerView: 2
      },
      1280: {
        slidesPerView: 3
      }
    }



  });


  // ハンバーガーメニュー
  jQuery('#open').on('click', function(e) {
    e.preventDefault();
  
    jQuery('.sp-menu').toggleClass('is-active');
    jQuery('.overlay').toggleClass('is-active');
    jQuery('.overlay-background').toggleClass('is-active');
  
    return false;
  });
  jQuery('#close, .overlay-background').on('click', function(e) {
    e.preventDefault();
  
    jQuery('.sp-menu').toggleClass('is-active');
    jQuery('.overlay').toggleClass('is-active');
    jQuery('.overlay-background').toggleClass('is-active');
  
    return false;
  });


  // モーダル
  jQuery('.js-close-button').on('click', function(e) {
    e.preventDefault();
    let target = jQuery(this).data('target');
    jQuery(target).hide();
  });
  

  jQuery('.js-open-button').on('click', function(e) {
    e.preventDefault();
    let target = jQuery(this).data('target');
    jQuery(target).show();
  });

  // アコーディオン
  jQuery('.more').on('click', function() {
    jQuery(this).toggleClass('is-active');
    jQuery(this).next('.works-item-content').slideToggle();
  });



});