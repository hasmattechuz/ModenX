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

function masonryLayout() {
  const masonryLayout = document.querySelector(".masonry-layout");
  let masonryInstance;

  function initializeMasonry() {
      if (window.innerWidth > 767) {
          if (!masonryInstance) {
              masonryInstance = new Masonry(masonryLayout, {
                  itemSelector: ".masonry-item",
                  columnWidth: ".masonry-item", // Use the width of the item for column sizing
                  percentPosition: true, // Enable percentage-based positioning
                  gutter: 35,   
              });
          }
      } else {
          if (masonryInstance) {
              masonryInstance.destroy(); // Destroy Masonry instance on mobile
              masonryInstance = null;
              masonryLayout.style.removeProperty("position"); // Reset inline styles
          }
      }
  }

  // Initialize Masonry on page load
  initializeMasonry();

  // Reinitialize Masonry on window resize
  window.addEventListener("resize", initializeMasonry);
}

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
  masonryLayout();
});

if (window.innerWidth < 768) {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Optional: responsive settings
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}
