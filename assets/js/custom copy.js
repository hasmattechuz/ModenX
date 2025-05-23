function videoPlayer() {
  if ($(".video-group").length) {
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
          slidesPerView: 1.8,
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

function coreValueSlider() {
  if ($(".swiper-core-values").length) {
    return new Swiper(".swiper-core-values", {
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
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
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
  RetailersSlider();
  ConsumerSlider();
  CounterUp();
  Dropdown();
});

// swiper menu
if (window.innerWidth < 992) {
  const swiper1 = new Swiper(".swiper-menu", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// about progress slider start
if ($(".swiper-progress").length >0){
    const swiperprogress = new Swiper('.swiper-progress', {
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: updatePagination,
    }
  });

  // Call once on init
  updatePagination.call(swiperprogress);

  function updatePagination() {
    const totalDots = 6;
    const dots = document.querySelectorAll('.custom-pagination .dot');
    const progressBar = document.querySelector('.progress-bar-fill');

    const dotIndex = this.realIndex % totalDots;
    const progressPercent = ((dotIndex + 1) / totalDots) * 100;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[dotIndex]) dots[dotIndex].classList.add('active');

    // Update progress bar
    progressBar.style.width = progressPercent + '%';
  }
}

// about progress slider end

 function initSyncedSwipers(mainSelector, thumbSelector) {
    const mainSwiper = new Swiper(mainSelector, {
      loop: true,
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
      loop: true,
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
  loop: false,
  slidesPerView: 1.7,
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

