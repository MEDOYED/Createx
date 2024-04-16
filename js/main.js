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