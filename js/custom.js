var housingswiper = new Swiper('.swiper-content', {
  loop: false,
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

var swiper = new Swiper(".news-carousel", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  infinity: true,
  navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 40,
    },
    640: {
      slidesPerView: 1,
      // spaceBetween: 50,
    },
  },
});

var logoSwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    autoplay: true,
    loop: true,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 50,
      depth: 300,
      modifier: 1,
      slideShadows : false,
    },
    // navigation: {
    //   prevEl: ".swiper-button-prev",
    //   nextEl: ".swiper-button-next"
    // },
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: 'bullets',
    //   clickable: true
    // },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 4,
      },
      600: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
      200: {
        slidesPerView: 1,
      },
    },
  });



  'use strict';

const menuButton = document.querySelector('.menu-button');
const menuOverlay = document.querySelector('.menu-overlay');
// const backgroundOverlay = document.querySelector('.background-overlay');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('active');
    menuOverlay.classList.toggle('open');
    // backgroundOverlay.classList.toggle('bg-overlay');
});


let textElement = document.querySelector("#Hero-Content");
let delay = 5500; // milliseconds

textElement.style.display = "none"; // hide the text initially

function showText() {
  textElement.style.display = "block"; // show the text
}

setTimeout(showText, delay); // show the text after the delay





    window.onload = function () {
      var video = document.getElementById('introVideo');
      video.play();
  }

  AOS.init();


  $( document ).ready( function ()
{ // ranger
  let sections = document.querySelectorAll( "section" );
  let rangeli = document.querySelectorAll( "#Vertical-Progressbar ul li" );

  window.addEventListener( 'scroll', () =>
  {
      //ranger on scroll
      let current = '';
      sections.forEach( section =>
      {
          let section_top = section.offsetTop;
          let section_height = section.clientHeight;

          if ( pageYOffset >= section_top )
          {
              current = section.getAttribute( 'id' );

          }
      } );

      rangeli.forEach( li =>
      {
          li.classList.remove( 'active' );
          if ( li.classList.contains( current ) )
          {
              li.classList.add( 'active' );
          }
      } );
    });
  });
  
    

