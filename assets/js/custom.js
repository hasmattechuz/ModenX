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

function storiesSlider() {
  if ($(".swiper-stories").length) {
    return new Swiper(".swiper-stories", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      breakpoints: {
        567: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 25,
        },
        2000: {
          slidesPerView: 2.75,
          spaceBetween: 25,
        },
      },
    });
  }
}

function storiesSolutionSlider() {
  if ($(".swiper-stories-solution").length) {
    return new Swiper(".swiper-stories-solution", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      breakpoints: {
        567: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 25,
        },
        2000: {
          slidesPerView: 2.75,
          spaceBetween: 25,
        },
      },
    });
  }
}

const coreValueSlider = new Swiper(".swiper-core-values", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    },
    1025: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
    2000: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});

const RetailersSlider = new Swiper(".swiper-retailers", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 15, // Enable looping
  simulateTouch: true, // Enable drag/swipe simulation
  touchStartPreventDefault: false, // Prevent default touch behavior if needed
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    567: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
  },

  // Optional: responsive settings
});

const ConsumerSlider = new Swiper(".swiper-consumer", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 15, // Enable looping
  simulateTouch: true, // Enable drag/swipe simulation
  touchStartPreventDefault: false, // Prevent default touch behavior if needed
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    567: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
  },

  // Optional: responsive settings
});

$(document).ready(function () {
  let isMenuOpen = false;

  $(".menu-btn").on("click", function () {
    const $body = $("body");
    const $nav = $("nav");

    if (!isMenuOpen) {
      $body.removeClass("menu-inactive").addClass("nav-active");
      $nav.removeClass("close-nav").addClass("open-nav");
      isMenuOpen = true;
    } else {
      $body.removeClass("nav-active").addClass("menu-inactive");
      $nav.removeClass("open-nav").addClass("close-nav");
      isMenuOpen = false;
    }
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
  storiesSolutionSlider();
  coreValueSlider();
  RetailersSlider();
  ConsumerSlider();
  
});

// swiper menu
if (window.innerWidth < 992) {
  const swiper1 = new Swiper(".swiper-menu", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const swiper = new Swiper(".swiper-contact", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const swiper_update = new Swiper(".swiper-update", {
  loop: false,
  slidesPerView: 2,
  spaceBetween: 35, // Enable looping
  simulateTouch: true, // Enable drag/swipe simulation
  touchStartPreventDefault: false, // Prevent default touch behavior if needed
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  // Optional: responsive settings
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});

const swiper_solution_update = new Swiper(".swiper-solution-update", {
  loop: false,
  slidesPerView: 1.5,
  spaceBetween: 35, // Enable looping
  simulateTouch: true, // Enable drag/swipe simulation
  touchStartPreventDefault: false, // Prevent default touch behavior if needed
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  // Optional: responsive settings
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1.5,
    },
  },
});

const swiper_challenges = new Swiper(".swiper-challenges", {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 35, // Enable looping
  simulateTouch: true, // Enable drag/swipe simulation
  touchStartPreventDefault: false, // Prevent default touch behavior if needed
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const swiper_benefits = new Swiper(".swiper-benefits", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  simulateTouch: true,
  touchStartPreventDefault: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2.5,
    },
    2000: {
      slidesPerView: 3.5,
    },
  },
});

// About image slider
var swiper_imageSlider = new Swiper(".imageSlider", {
  slidesPerView: 4,
  spaceBetween: 35,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Milestone slider
// var swiper_milestone = new Swiper(".milestoneSlider", {
//    slidesPerView: "auto",
//    slidesPerView: 1,
//   spaceBetween: 30,
//    effect: "fade",
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar"
//   },
//    pagination: {
//       el: '.slider__pagination',
//       clickable: true,
//     },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   // autoplay: {
// 	// 	delay: 2000,
// 	//  },
// 	speed: 2000
// });
function initMilestoneSwiper() {
    // Main Swiper
    const mainSwiper = new Swiper(".milestoneSlider", {
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination", // Progressbar
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: function () {
          pagingSwiper.slideTo(mainSwiper.activeIndex);
          updateBulletPagination(mainSwiper.activeIndex);
        }
      }
    });

    // Paging Swiper for Bullet Pagination
    const pagingSwiper = new Swiper(".milestoneSlider", {
      allowTouchMove: false,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      },
    });

    // Bullet click events
    function bindBulletClicks() {
      const bullets = document.querySelectorAll(".swiper-pagination2 .swiper-pagination-bullet");
      bullets.forEach((bullet, index) => {
        bullet.addEventListener("click", () => {
          mainSwiper.slideTo(index);
        });
      });
    }

    // Sync bullet state
    function updateBulletPagination(activeIndex) {
      const bullets = document.querySelectorAll(".swiper-pagination2 .swiper-pagination-bullet");
      bullets.forEach((bullet, index) => {
        bullet.classList.toggle("swiper-pagination-bullet-active", index === activeIndex);
      });
    }

    // Initial bullet setup
    bindBulletClicks();
    updateBulletPagination(0);
  }

  // Initialize Swiper on DOM ready
  document.addEventListener("DOMContentLoaded", initMilestoneSwiper);


const swiperBlogBanner = new Swiper(".image-slider-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 55000,
    disableOnInteraction: false,
  },
});

$("#mySelect").select2({
  placeholder: "Subject",
});

AOS.init({});

$(".mobile-contact").click(function () {
  $(".swiper-menu").slideToggle(); // toggles between show and hide
  $(this).parent().toggleClass("active");
});

if ($('.news-section').length > 0 && $('.update-section').length > 0) {
  $('.news-section, .update-section').wrapAll('<div class="news-insights-parent"></div>');
}

// Read More / Read Less

$(".read-less").hide();

$(".read-more-btn, .read-less").click(function () {
  $(".more-text").slideToggle();

  $(".read-more-btn, .read-less").toggle();
});

$(function () {
  // (Optional) Active an item if it has the class "is-active"
  $(".accordion > .accordion-item.is-active")
    .children(".accordion-panel")
    .slideDown();

  $(".accordion > .accordion-item").click(function () {
    // Cancel the siblings
    $(this)
      .siblings(".accordion-item")
      .removeClass("is-active")
      .children(".accordion-panel")
      .slideUp();
    // Toggle the item
    $(this)
      .toggleClass("is-active")
      .children(".accordion-panel")
      .slideToggle("ease-out");
  });
});
