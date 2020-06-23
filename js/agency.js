(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

})(jQuery); 


var hairstylists = [{
        name: "alex",
        daysAvailable: [1, 2, 3]
    },
    {
        name: "sarah",
        daysAvailable: [3, 4, 5]
    },
    {
        name: "john",
        daysAvailable: [4, 5. 6]
    }
]

$(document).ready(function() {

    var radios = document.forms[0].elements["stylist"];
    console.log(radios);

    for (var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            updateDates(this.value);
            document.getElementById("form").style.display = 'block';
        }
    }


    function updateDates(stylist) {
        var stylistNum = 0;
        if (stylist == "alex") {
            stylistNum = 1;
        }

        $("#datepicker").datepicker("destroy");

        $("#datepicker").datepicker({
            minDate: 0,
            beforeShowDay: function(d) {
                day = d.getDay();
                if ($.inArray(day, hairstylists[stylistNum].daysAvailable) < 0) {
                    return [false];
                } else {
                    return [true];
                }
            }
        });
    }
});












// End of use strict
