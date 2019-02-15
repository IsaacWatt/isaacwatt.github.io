$(document).ready(function(){
    $(function() {

      AOS.init({
        // Global settings
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

        // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 350, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'middle', // defines which position of the element regarding to window should trigger the animation
      });

    });

  // typewriter text
  new TypeIt('#example2', {
      strings: [" ", "University of Waterloo Student", "Computer Science major / Statistics minor", "Feel free to browse and learn more about me."],
      speed: 50,
      breakLines: false,
      autoStart: false
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    if ($hamburger.hasClass("is-active")) {
      $("#mobile").slideDown();
    } else {
      //$("#mobile").css('display', 'none');
      $("#mobile").slideUp();
    }
  });

  $(window).on('resize', function(){
      if ($(".hamburger").css('display') === "none") {
        $("#mobile").slideUp();
        $(".hamburger").removeClass("is-active");
      }
  });

  $(window).scroll(function(){
      if($(document).scrollTop() > $('#about-intro').offset().top) {
          $('#header').addClass('small-header');
          $('#mobile').addClass('mobile-small');
      } else {
        $('#header').removeClass('small-header');
        $('#mobile').removeClass('mobile-small');
      }
  });
});
