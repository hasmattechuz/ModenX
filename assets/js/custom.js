function videoPlayer() {
  if ($(".video-group").length) {
    $(".video-group").each(function() {
      const $video = $(this).find('.video-player');
      const $toggleBtn = $(this).find('.btn-video');
      const $btnIcon = $(this).find('.btn-ico-cst');

      $toggleBtn.on("click", function () {
        if ($video.get(0).paused) {
          // Pause all other videos first
          $('.video-player').each(function() {
            this.pause();
            $(this).closest('.video-group').find('.btn-ico-cst').removeClass('play').addClass('pause');
          });
          
          // Play the clicked video
          $video.get(0).play();
          $btnIcon.removeClass('pause').addClass('play');
        } else {
          $video.get(0).pause();
          $btnIcon.removeClass('play').addClass('pause');
        }
      });
    });
  }
}

function storiesSlider() {
  if ($(".swiper-stories").length) {
    return new Swiper(".swiper-stories", {
      loop: false,
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
        769: {
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
        768: {
          slidesPerView: 1,
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

function coreValueSlider() {
  if ($(".swiper-core-values").length) {
    return new Swiper(".swiper-core-values", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        769: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 1.5,
          spaceBetween: 25,
        },
        2000: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
    });
  }
}
function solutioncoreValueSlider() {
  if ($(".solution-stories-section .swiper-core-values").length) {
    return new Swiper(".solution-stories-section .swiper-core-values", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        769: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 1.5,
          spaceBetween: 25,
        },
        2000: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
    });
  }
}

function RetailersSlider() {
  if ($(".swiper-retailers").length) {
    return new Swiper(".swiper-retailers", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 15,
      simulateTouch: true,
      touchStartPreventDefault: false,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      breakpoints: {
        567: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });
  }
}

function RetailersMobileSlider() {
  if ($(".swiper-retailers-mobile").length) {
    return new Swiper(".swiper-retailers-mobile", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 15,
      simulateTouch: true,
      touchStartPreventDefault: false,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      breakpoints: {
        567: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 2,
        },
      },
    });
  }
}

function ConsumerSlider() {
  if ($(".swiper-consumer").length) {
    return new Swiper(".swiper-consumer", {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 15,
      simulateTouch: true,
      touchStartPreventDefault: false,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      scrollbar: {
        el: ".scrollbar1",
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
    });
  }
}

function setDescriptionHeights() {
  $('.primary-image-card').each(function() {
      const descHeight = $(this).find('.desc-dv').height();
      $(this).css('--desc_height', descHeight + 'px');
  });
}

$(document).ready(function () {
  let isMenuOpen = false;

  $(".menu-btn").on("click", function () {
    if ($('.nav-right').hasClass('active')) { 
      $('.nav-right').removeClass('active'); 
       $(".swiper-menu").slideToggle();
    }
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
  solutioncoreValueSlider();
  RetailersSlider();
  RetailersMobileSlider();
  ConsumerSlider();
  CounterUp();
  Dropdown();
  setTimeout(function() {
      setDescriptionHeights();
    }, 100);
    
  $(window).on('resize', function() {
     setTimeout(function() {
      setDescriptionHeights();
    }, 100);
  });
  
  $(window).on('orientationchange', function() {
    setTimeout(function() {
      setDescriptionHeights();
    }, 100);
  });
});

// swiper menu
if (window.innerWidth < 992) {
  const swiper1 = new Swiper(".swiper-menu", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
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
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
   // Optional: responsive settings
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      pagination: false,
    },
    992: {
      slidesPerView: 1,
    },
  },
});

// about progress slider start
if (document.querySelector('.swiper-progress')) {
    const swiperprogress = new Swiper('.swiper-progress', {
      loop: false,
      slidesPerView: 1,
      navigation: {
        nextEl: '#swiper-progress-next',
        prevEl: '#swiper-progress-prev',
      },
      on: {
        init: function () {
          updatePagination.call(this);
          toggleNavButtons(this);
        },
        slideChange: function () {
          updatePagination.call(this);
          toggleNavButtons(this);
        }
      }
    });

    // 🚨 Manually call init to trigger the "init" event
    swiperprogress.init();

    // Make pagination dots clickable
    const dots = document.querySelectorAll('.custom-pagination .dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        swiperprogress.slideTo(index);
      });
    });

    // Update dot classes and progress bar
    function updatePagination() {
      const totalDots = 6;
      const dots = document.querySelectorAll('.custom-pagination .dot');
      const progressBar = document.querySelector('.progress-bar-fill');

      const dotIndex = this.realIndex % totalDots;
      const progressPercent = ((dotIndex + 1) / totalDots) * 100;
      const prevIndex = (dotIndex - 1 + totalDots) % totalDots;

      dots.forEach((dot, index) => {
        dot.classList.remove('active', 'prev', 'inactive', 'last-active', 'completed');

        if (index === dotIndex) {
          dot.classList.add('active');
        } else if (index === prevIndex && dotIndex > 0) {
          dot.classList.add('prev', 'last-active');
        } else {
          dot.classList.add('inactive');
        }

        if (index <= dotIndex) {
          dot.classList.add('completed');
        }
      });

      progressBar.style.width = progressPercent + '%';
    }

    // Add/remove disabled class to Prev/Next
    function toggleNavButtons(swiper) {
      const prevBtn = document.querySelector('#swiper-progress-prev');
      const nextBtn = document.querySelector('#swiper-progress-next');

      if (swiper.isBeginning) {
        prevBtn.classList.add('disabled');
      } else {
        prevBtn.classList.remove('disabled');
      }

      if (swiper.isEnd) {
        nextBtn.classList.add('disabled');
      } else {
        nextBtn.classList.remove('disabled');
      }
    }
  }




// about progress slider end

 function initSyncedSwipers(mainSelector, thumbSelector) {
    const mainSwiper = new Swiper(mainSelector, {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 1,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       autoplay: {
        delay: 5000, 
        disableOnInteraction: false, 
      },
    });

    const thumbSwiper = new Swiper(thumbSelector, {
      loop: false,
      spaceBetween: 0,
      slidesPerView: 1,
      slideToClickedSlide: true,
      
    });

    mainSwiper.controller.control = thumbSwiper;
    thumbSwiper.controller.control = mainSwiper;
  }

  // Call the function
  initSyncedSwipers('.main-swiper-contact', '.thumb-swiper-contact');

const swiper_update = new Swiper(".swiper-update", {
  loop: false,
  slidesPerView: 2,
  spaceBetween: 35, // Enable looping
  simulateTouch: true, // Enable drag/swipe simulation
  touchStartPreventDefault: false, // Prevent default touch behavior if needed
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
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
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  // Optional: responsive settings
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 1.5,
    },
  },
   on: {
    init: function () {
      setDescriptionHeights(); // call on init
    },
    slideChangeTransitionEnd: function () {
      setDescriptionHeights(); // call when slide changes
    },
    resize: function () {
      setDescriptionHeights(); // call on resize
    }
  }
});
if ($(".swiper-challenges").length){
  const swiper_challenges = new Swiper(".swiper-challenges", {
  loop: true,
  slidesPerView: 1.8,
  spaceBetween: 35, // Enable looping
  simulateTouch: true, // Enable drag/swipe simulation
  touchStartPreventDefault: false, // Prevent default touch behavior if needed
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
   breakpoints: {
    0: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 1.7,
    },
  },
});
}


const swiper_benefits = new Swiper(".swiper-benefits", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  simulateTouch: true,
  touchStartPreventDefault: false,  
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },    
    769: {
      slidesPerView: 2.4,
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
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
     0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 4,
    },
  },
});

const swiperBlogBanner = new Swiper(".image-slider-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // 3 seconds between slides
    disableOnInteraction: false, // keeps autoplay active after user interactions
  },
});

$("#mySelect").select2({
  placeholder: "Subject",
  minimumResultsForSearch: Infinity 
});
$("#mySelect2").select2({
  placeholder: "Select Job",
  minimumResultsForSearch: Infinity 
});

AOS.init({});

$(".mobile-contact").click(function () {
  $(".swiper-menu").slideToggle();
  $(this).parent().toggleClass("active");

});

if ($(".news-section").length > 0 && $(".update-section").length > 0) {
  $(".news-section, .update-section").wrapAll(
    '<div class="news-insights-parent"></div>'
  );
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

function CounterUp() {
  if ($(".partnering-section").length) {
    const section = document.querySelector(".partnering-section");
    const counters = section.querySelectorAll("[data-countup-number]");

    // Counter function
    const animateCounter = (el, target) => {
      const duration = 2000;
      const start = 0;
      const end = parseInt(target.replace(/,/g, ""));
      const increment = end / (duration / 16);

      let current = start;
      const update = () => {
        current += increment;
        if (current < end) {
          el.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(update);
        } else {
          el.textContent = end.toLocaleString();
        }
      };
      update();
    };

    // Observer to restart count every time visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter) => {
              // Reset text before restarting
              counter.textContent = "0";
              animateCounter(
                counter,
                counter.getAttribute("data-countup-number")
              );
            });
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% visible
      }
    );

    observer.observe(section);
  }
}

function Dropdown() {
  if ($(".dropdown-menu").length) {
    $('.custom-dropdown .dropdown-toggle').on('click', function(e) {
      e.stopPropagation(); // prevent document handler
      $(this).next('.dropdown-menu').toggleClass('show');
    });
  
    // Close any open dropdown when clicking anywhere else
    $(document).on('click', function() {
      $('.custom-dropdown .dropdown-menu.show').removeClass('show');
    });
  }
}



document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
  });
});
$('.primary-image-card').on('click', function(e) {
    e.preventDefault();

    const $this = $(this);
    const isActive = $this.hasClass('active');

    // Remove all active classes
    $('.primary-image-card').removeClass('active');
    $('.vision-grid').removeClass('left-active right-active');

    if (!isActive) {
        $this.addClass('active');

        if ($this.index() === 0) {
            $('.vision-grid').addClass('left-active');
        } else {
            $('.vision-grid').addClass('right-active');
        }
    }
});

// Hover logic
// $('.primary-image-card').on('mouseenter', function() {
//     const $this = $(this);
//     const isAnyActive = $('.primary-image-card.active').length > 0;

//     if (!isAnyActive) {
//         if ($this.index() === 0) {
//             $('.vision-grid').addClass('left-active');
//         } else {
//             $('.vision-grid').addClass('right-active');
//         }
//     }
// }).on('mouseleave', function() {
//     const isAnyActive = $('.primary-image-card.active').length > 0;

//     if (!isAnyActive) {
//         $('.vision-grid').removeClass('left-active right-active');
//     }
// });

// $(document).ready(function () {
//     $('.right-btn .btn-dv').addClass('no-hover-btn');

//     setTimeout(function () {
//       $('.right-btn .btn-dv').removeClass('no-hover-btn');
//     }, 5000); 
//   });