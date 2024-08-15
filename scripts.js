document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');

    menuIcon.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});

$(document).ready(function(){
  $(document).ready(function(){
    $('.pickup-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  // スムーズスクロール
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if(target.length) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 1000);
          // サイドメニューを閉じる
          $('.side-menu, .overlay, .menu-icon').removeClass('active');
      }
  });

  // スクロール時にサイドメニューを閉じる
  $(window).scroll(function() {
      $('.side-menu, .overlay, .menu-icon').removeClass('active');
  });
});
