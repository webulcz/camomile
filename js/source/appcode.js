//<![CDATA[
  $(document).ready(function(){

    // Resolution fixes
    if ($(document).width() <= 768) {
      $(".invis").each(function(){
        $(this).removeClass("animated").removeClass("invis");
      });

      $(".responsive-pic").each(function(){
        $(this).attr("href", $(this).attr("data-rel"));
      });
    }
    
    //========================================================================
    //================================= Main =================================
    //========================================================================
    
    $('#nav-icon1').click(function(){
      $(this).toggleClass('animate-icon');
      $('#menuoverlay').fadeToggle();
    });
    
    $('#menuoverlay').click(function(){
      $('#nav-icon1').removeClass('animate-icon');
      $('#menuoverlay').toggle();
    });
    

    // Add scrollspy to <body>
    $('body').scrollspy({target: "#menuoverlay", offset: 0});

    // Add smooth scrolling on all links inside the navbar
    $("#menuoverlay a, .scrollclass").on('click', function(event) {
        var h = this.hash;
        var res = h.replace("#", "");
        if ($(h).length < 1 ) {window.location=this.href;}
        else
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
        }  // End if
    });

    // Array for appear effects
    var AnimatedEffects = [
      'fadeIn', 'fadeInRight', 'fadeInLeft', 'fadeInDown', 'fadeInUp',
      'bounceIn', 'bounceInRight', 'bounceInLeft', 'bounceInDown', 'bounceInUp',
      'zoomIn', 'zoomInRight', 'zoomInLeft', 'zoomInDown', 'zoomInUp',
      'flipInX','flipInY'
    ];

    // Returns random effect
    function getEffect(num){ 
      var n = AnimatedEffects.length;
      if (num !== undefined) n = num;
      return AnimatedEffects[Math.floor(Math.random() * n)]; 
    }
    
    // ============== Waypoint ABOUT 50 ==============
    var waypoint_about = new Waypoint({
      element: document.querySelector("#about"),
      handler: function(direction) {
          $("#nav-icon2 a").attr("href", "#about"); 

          if (direction == "down") { 
            $("#nav-icon2").removeClass("hidden"); 
            $("#nav-icon2").removeClass("fadeOut");
            $("#nav-icon2").addClass("fadeIn"); 
          }
          else {
            $("#nav-icon2").removeClass("fadeIn"); 
            $("#nav-icon2").addClass("fadeOut");  
          }

      },
      offset: "50%"
    });

    // ============== Waypoint ABOUT 15 ==============
    var waypoint_about = new Waypoint({
      element: document.querySelector("#about"),
      handler: function(direction) {
          if (direction == "down") { 
            $("#nav-icon2 a").attr("href", "#services");

            // animations
            $("#about .wrapper").children().each(function(){
              if ($(this).hasClass("invis")) {
                $(this).removeClass("invis");
                var effect = getEffect();
                $(this).addClass("animated " + effect).addClass("visible");
              }
            });
          }
          else {$("#nav-icon2 a").attr("href", "#about");}
      },
      offset: "15%"
    });

    // ============== Waypoint SERVICES 15 ==============
    var waypoint_about = new Waypoint({
      element: document.querySelector("#services"),
      handler: function(direction) {
          if (direction == "down") { 
            $("#nav-icon2 a").attr("href", "#portfolio"); 

            // animations
            $("#services .row, #services .wrapper").children().each(function(){
              if ($(this).hasClass("invis")) {
                $(this).removeClass("invis");
                var effect = getEffect(6);
                $(this).addClass("animated " + effect).addClass("visible");
              }
            });
          }
          else {$("#nav-icon2 a").attr("href", "#services");}
      },
      offset: "15%"
    });

    // ============== Waypoint PORTFOLIO 15 ==============
    var waypoint_about = new Waypoint({
      element: document.querySelector("#portfolio"),
      handler: function(direction) {
          if (direction == "down") { $("#nav-icon2 a").attr("href", "#reference"); }
          else {$("#nav-icon2 a").attr("href", "#portfolio");}
      },
      offset: "15%"
    });

    // ============== Waypoint REFERENCE 15 ==============
    var waypoint_about = new Waypoint({
      element: document.querySelector("#reference"),
      handler: function(direction) {
          if (direction == "down") { 
            $("#nav-icon2 a").attr("href", "#contact"); 

            // animations
            $("#reference .row, #reference .wrapper").children().each(function(){
              if ($(this).hasClass("invis")) {
                $(this).removeClass("invis");
                var effect = getEffect(6);
                $(this).addClass("animated " + effect).addClass("visible");
              }
            });
          }
          else {$("#nav-icon2 a").attr("href", "#reference");}
      },
      offset: "15%"
    });

    // ============== Waypoint CONTECT 15 ==============
    var waypoint_about = new Waypoint({
      element: document.querySelector("#contact"),
      handler: function(direction) {

          if (direction == "down") { 
            $("#nav-icon2").removeClass("fadeIn");
            $("#nav-icon2").addClass("fadeOut"); 

            // animations
            $("#contact .wrapper, #contact .right-content").children().each(function(){
              if ($(this).hasClass("invis")) {
                $(this).removeClass("invis");
                var effect = getEffect();
                $(this).addClass("animated " + effect).addClass("visible");
              }
            });
          }
          else {
            $("#nav-icon2").addClass("fadeIn");  
            $("#nav-icon2").removeClass("fadeOut");
          }
      },
      offset: "15%"
    });
    

});

// ============== Gallery ==============
baguetteBox.run(".bb-gallery", {
  captions: function(element) {
      return element.getElementsByTagName('img')[0].alt;
  }
});

//]]>
