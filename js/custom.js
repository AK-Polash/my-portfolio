$(document).ready(function () {
  // Smooth scrolling for navigation links
  $(".nav-link").on("click", function (e) {
    e.preventDefault();
    $(this).blur();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      10
    );
  });

  // Highlight the active section based on scroll position
  $(window).scroll(function () {
    var scrollPos = $(document).scrollTop();
    var maxVisible = 0;
    var activeSectionId = "";

    // Loop through each section and calculate its visibility
    $("section").each(function () {
      var offsetTop = $(this).offset().top;
      var sectionHeight = $(this).outerHeight();
      var visible =
        Math.min(sectionHeight, offsetTop + sectionHeight - scrollPos) -
        Math.max(0, offsetTop - scrollPos);

      if (visible > maxVisible) {
        maxVisible = visible;
        activeSectionId = $(this).attr("id");
      }
    });

    // Set the active class for the section with the most visibility
    if (activeSectionId !== "") {
      $(".nav-link").removeClass("active");
      $('.nav-link[href="#' + activeSectionId + '"]').addClass("active");
    }
  });

  // for sticky menu
  $(function () {
    $(window).on("scroll", function () {
      let scrolling = $(this).scrollTop();

      if (scrolling > 20) {
        $(".navbar").addClass("sticky_nav");
      } else {
        $(".navbar").removeClass("sticky_nav");
      }
      if (scrolling > 500) {
        $(".scroll_btn").addClass("show_btn");
      } else {
        $(".scroll_btn").removeClass("show_btn");
      }
    });
  });

  // hamburger class add / removeing:
  $(function () {
    // for the rotating the hamburger lines:
    $(".navbar-toggler").on("click", function () {
      $(".navbar-toggler").toggleClass("when_clicked");
      $(".navbar-nav").toggleClass("my_canvas");
    });

    // nav-list clicking action:
    $(".nav-link").on("click", function () {
      $("#navbarNav").removeClass("show");
      $(".navbar-nav").removeClass("my_canvas");
      $(".navbar-toggler").removeClass("when_clicked");
    });
  });

  // window loading animation:
  // $(function () {
  //   $(window).on("load", function () {
  //     $(".preloader").delay(300).fadeOut(100);
  //   });
  // });

  // scroll to top:
  $(function () {
    $(".scroll_btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 50);
    });
  });

  // particle js banner:
  $(function () {
    particlesJS.load("particles-js", "assets/particles.json", function () {
      console.log("callback - particles.js config loaded");
    });
  });

  // typed js in banner:
  $(function () {
    var typed = new Typed(".typing", {
      strings: ["MERN Stack Developer"],
      typeSpeed: 50,
      backSpeed: 60,
      loop: false,
    });
    var typed = new Typed(".typing-2", {
      strings: ["Web Developer"],
      typeSpeed: 50,
      backSpeed: 60,
      loop: false,
    });
  });

  // wow js in banner:
  $(function () {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null, // optional scroll container selector, otherwise use window,
      resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
  });

  // progressbar skills:
  $(function () {
    $(".react_js").rProgressbar({
      percentage: 90,
      fillBackgroundColor: "#087EA4",
      backgroundColor: "#dcdde1",
      borderRadius: "0px",
      height: "8px",
      width: "100%",
      duration: 1600,
    });
    $(".next_js").rProgressbar({
      percentage: 60,
      fillBackgroundColor: "#34495E",
      backgroundColor: "#dcdde1",
      borderRadius: "0px",
      height: "8px",
      width: "100%",
      duration: 1600,
    });
    $(".redux").rProgressbar({
      percentage: 58,
      fillBackgroundColor: "#9B59B6",
      backgroundColor: "#dcdde1",
      borderRadius: "0px",
      height: "8px",
      width: "100%",
      duration: 1600,
    });
    $(".node_js").rProgressbar({
      percentage: 63,
      fillBackgroundColor: "#2ECC71",
      backgroundColor: "#dcdde1",
      borderRadius: "0px",
      height: "8px",
      width: "100%",
      duration: 1600,
    });
    $(".express").rProgressbar({
      percentage: 75,
      fillBackgroundColor: "#F1C40F",
      backgroundColor: "#dcdde1",
      borderRadius: "0px",
      height: "8px",
      width: "100%",
      duration: 1600,
    });
    $(".mongodb").rProgressbar({
      percentage: 85,
      fillBackgroundColor: "#1ABC9C",
      backgroundColor: "#dcdde1",
      borderRadius: "0px",
      height: "8px",
      width: "100%",
      duration: 1600,
    });
    $(".firebase").rProgressbar({
      percentage: 70,
      fillBackgroundColor: "#ed1c24",
      backgroundColor: "#dcdde1",
      borderRadius: "0px",
      height: "8px",
      width: "100%",
      duration: 1600,
    });
    $(".react_native").rProgressbar({
      percentage: 50,
      fillBackgroundColor: "#4097FF",
      backgroundColor: "#dcdde1",
      borderRadius: "0px",
      height: "8px",
      width: "100%",
      duration: 1600,
    });
  });

  // slick portfolio:
  $(function () {
    $(".slick_portfolio").slick({
      prevArrow: true,
      nextArrow: true,
      autoplay: true,
      centerMode: true,
      centerPadding: "0px",
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });
});
