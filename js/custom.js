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

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
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
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true
    },
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

// jQuery(document).on('scroll', function(){
//   jQuery('h1').css("left", Math.max(100 - 0.2*window.scrollY, 1) + "vw");
//   });
// var video = document.getElementById("introVideo");
//  video.addEventListener('ended', function(e) {
//   console.log('show');
//  });

let textElement = document.querySelector("#Hero-Content");
let delay = 4500; // milliseconds

textElement.style.display = "none"; // hide the text initially

function showText() {
  textElement.style.display = "block"; // show the text
}

setTimeout(showText, delay); // show the text after the delay

const textEl = document.getElementById( 'change-text' );
    let textIndex = 0;
    const texts = [ 'Text 1', 'Text 2', 'Text 3' ];

    function updateText ()
    {
        textEl.style.opacity = 0;
        setTimeout( () =>
        {
            textEl.innerHTML = texts[ textIndex ];
            textEl.style.opacity = 1;
        }, 500 );
        textIndex = ( textIndex + 1 ) % texts.length;
    }

    setInterval( updateText, 3000 );

    var swiper = new Swiper('.swiper-content', {
      // options here
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    

