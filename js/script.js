// scroll spy
$(function(){

    var a =$(".back-to-top");
    var b=$('html,body');
    
    a.click(function () {
        
     b.animate({scrollTop:0},1000)
    });
    
    $(window).scroll(function () {
        var c=$(this).scrollTop();
        if (c>200) {
            a.fadeIn(500);
        } else {
            a.fadeOut();
        }
    })
    });
    // smooth scroll
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


//   menu 
$(function(){

    var a =$(".navbar");
    var b=$('html,body');
    
    $(window).scroll(function () {
        var c=$(this).scrollTop();
        if (c>200) {
            a.addClass("bg")
        } else {
            a.removeClass("bg");
        }
    })
    });
    // animate on scroll
    AOS.init({
        offset:300,
        duration: 1000,
    });
    // type js
    var typed = new Typed('.typ', {
        strings: ['onu',
          'designer'],
       typespped:100,
       loop:true,
       smartBackspace: true
        
      });