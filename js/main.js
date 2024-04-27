$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    appendArrows: $('.team__slider-arrows'),
    waitForAnimate: false,
    responsive:
      [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            draggable: true,
            dots: true,
            // 
          },
        },
      ],
  })

  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })


  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
    waitForAnimate: false,
  })

  $('.testimonials__prew').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })

  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })


  // accordion first version
  // $('.program__accordeon-link').on('click', function(e) {
  //   e.preventDefault()
  //   $(this).toggleClass('program__accordeon-link--active')
  //   $(this).children('.program__accordeon-text').slideToggle()
  // })


  // accordion second version
  $('.program__accordeon-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__accordeon-link--active')) {
      $(this).removeClass('program__accordeon-link--active')
      $(this).children('.program__accordeon-text').slideUp()
    } else {
      $('.program__accordeon-link').removeClass('program__accordeon-link--active')
      $('.program__accordeon-text').slideUp()
      $(this).addClass('program__accordeon-link--active')
      $(this).children('.program__accordeon-text').slideDown()
    }
  })


  //accordion third version
  //   $('.program__accordeon-link').on('click', function (e) {
  //     e.preventDefault();

  //     var isActive = $(this).hasClass('program__accordeon-link--active');

  //     // Зняття активного класу та згортання всіх текстів
  //     $('.program__accordeon-link').removeClass('program__accordeon-link--active');
  //     $('.program__accordeon-text').slideUp();

  //     // Якщо елемент не активний - розгорнути
  //     if (!isActive) {
  //       $(this).addClass('program__accordeon-link--active');
  //       $(this).children('.program__accordeon-text').slideDown();
  //     }
  //   });
  // })


  //=====  плавний скрол по странице  ===
  //=====  плавний скрол по странице  ===

  $('.header__nav-list a, .header__top-btn, .footer__go-top').on('click', function (e) {
    //отменяем стандартную обработку нажатия по силке
    e.preventDefault();
    // забираем индентификатор блока с атрибута href
    var id = $(this).attr('href'),
      //  узнаем висоту от начала страници, до блока на которий ссилается якорь
      top = $(id).offset().top - 150;
    //  анимируем переход на растояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === true) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')

    }
  }, 0);

  // откритие бургера

  $(".burger, .overlay, .header__top a").on("click", function (e) {
    e.preventDefault()
    $(".header__top").toggleClass("header__top--open")

  })

  $('.footer__top-title--slide').on('click', function () {
    $(this).next().slideToggle()
  })

  // затемнение екрана, когда открит бургер
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.overlay--show').toggleClass('overlay')
  })

  $('.burger').on('click', function (e) {
    e.preventDefault()
    // $('.burger--active').toggleClass('burger')
  })


})