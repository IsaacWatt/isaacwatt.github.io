$(document).ready(function(){

  // typewriter text
  new TypeIt('#example2', {
      strings: [" ", "University of Waterloo Student", "Computer Science major / Statistics minor", "Feel free to browse and learn more about me."],
      speed: 80,
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
      $(".hello").css('display', 'flex');
      $("#mobile").css('display', 'flex');
    } else {
      $("#mobile").css('display', 'none');
      //$("li").css('display', 'none');
      //$(".hello2").css('display', 'none');
    }
  });

  $(window).on('resize', function(){
      if ($(".hamburger").css('display') === "none") {
        $("#mobile").css('display', 'none');
        $(".hamburger").removeClass("is-active");
      }

  });


});
