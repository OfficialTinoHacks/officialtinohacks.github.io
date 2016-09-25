$(document).ready(function() {

  new WOW().init();

  //Smooth Scrolling

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  orderClouds(6, 11, "multipleClouds", 3000);

  function orderClouds(min, max, id, interval) {
    var cloudType = "clouds" + min;
    var cloudNum = min;
    setInterval(function() {
      $("#" + id).css("background", "transparent url('img/bgimages/" + cloudType + ".png') repeat top center");
      cloudNum++;
      if (cloudNum == max) cloudNum = min;
      cloudType = "clouds" + cloudNum;
    }, interval);
  }

  var sidebarIsOpen = false;

  $("#menuBtn").click(function(e) {
    e.preventDefault();
    if (sidebarIsOpen == false) {
      sidebarIsOpen = true;
    } else {
      sidebarIsOpen = false;
    }

    controlSidebar();

    $(this).toggleClass("active");

  });

  $("#sidebarCircle").click(function(e) {
    e.preventDefault();
    sidebarIsOpen = false;
    controlSidebar();
    $(".nav-toggle").removeClass("active");
  });

  function controlSidebar() {
    if (!sidebarIsOpen) {
      //Close
      $(".sidebarContainer").css("right", "-50%");
      $(".menuContainer").css("background", "black");

    } else {
      //Open
      $(".sidebarContainer").css("right", "0%");
      $(".menuContainer").css("background", "transparent");
    }

    $(".sidebarContainer").css("transition", "right 1s, background 3s ease");
  }

});
