function videoPlayer() {
  const $video = $("#video-player");
  const $toggleBtn = $("#btn-toggle1");

  $toggleBtn.on("click", function () {
    if ($video.get(0).paused) {
      $video.get(0).play();
      $toggleBtn.text("Pause");
    } else {
      $video.get(0).pause();
      $toggleBtn.text("Play");
    }
  });
}

const storiesSlider = new Swiper(".swiper-stories", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 35,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
  },
});

$(document).ready(function () { 
  
  $(".menu-btn").click(function () {
    $("nav").toggleClass("open-nav");
    $("body").toggleClass("nav-active");
  });

  $(".menu-close").click(function () {
    $("nav").removeClass("open-nav");
    $("body").removeClass("nav-active");
  });

  $(".close-icon").click(function () {
    $("nav").removeClass("open-nav");
  });

  //* menu*//

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("header").outerHeight();

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("header").removeClass("nav-down").addClass("nav-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("header").removeClass("nav-up").addClass("nav-down");
      }
    }

    lastScrollTop = st;
  }

  $(window).on("scroll", function () {
    var c = $(window).height() * 0.9;
    var d = $(window).scrollTop();
    $(".line-block").each(function () {
      var a = $(this).offset().top;
      if (c + d > a) {
        $(this).addClass("show");
      } else {
        $(this).removeClass("show");
      }
    });

    didScroll = true;

    if (window.scrollY == 0) {
      $("header").addClass("to-top");
    } else {
      $("header").removeClass("to-top");
    }
  });

  videoPlayer();
  storiesSlider();
});

// swiper menu
if (window.innerWidth < 992) {
  const swiper = new Swiper(".swiper-menu", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: true,
     pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
   
    // Optional: responsive settings
    breakpoints: {
      768: {
        slidesPerView: 1,
         pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });
}

const swiper = new Swiper('.swiper-contact', {
    loop: true,    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     autoplay: {
        delay: 5000, 
        disableOnInteraction: false, 
      },
  });

  const swiper_update = new Swiper('.swiper-update', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 35,            // Enable looping
    simulateTouch: true,    // Enable drag/swipe simulation
    touchStartPreventDefault: false, // Prevent default touch behavior if needed
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  
     scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    
   
  });
  
  $('#mySelect').select2({
    placeholder: "Subject",
    // allowClear: true
});

 AOS.init({   
    offset: -200       // adjust this to control when animation triggers
  });  

  $('.mobile-contact').click(function() {
    $('.swiper-menu').slideToggle(); // toggles between show and hide
    $(this).parent().toggleClass('active');
  });
  