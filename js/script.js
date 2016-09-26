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

  $(".teamPhoto").click(function(e) {
    var photo = $(this); //or use jQuery's $("#photo")
    var overlay = $(".overlay");
    var personName = photo.parent().text().trim();
    var description = "";

    if (personName == "Sriharsha G.") {
      personName = "Sriharsha Guduguntla";
      description = "Webmaster and Technology Director"
    } else if (personName == "Justine Qiu") {
      description = "Lead organizer and founder of TinoHacks";
    } else if (personName == "Davin Clark") {
      description = "Co-lead organizer and co-founder of TinoHacks";
    } else if (personName == "Kashyap Panda") {
      description = "iOS App Lead and Technology Director";
    } else if (personName == "Shruthi Jaganathan") {
      description = "Sponsorship Manager";
    } else if (personName == "Shashank Mahesh") {
      description = "Android App Developer";
    } else if (personName == "Siddharth Mahesh") {
      description = "Outreach Manager";
    } else if (personName == "Ryan Liao") {
      description = "Outreach Co-Manager";
    }

    console.log('img/highqualityteampics/' + personName + '.jpg');
    $(".overlay").css("background-image", "url('img/highqualityteampics/" + personName + ".jpg')");

    var overlayHTML = '<div id="closeOverlay">';
    overlayHTML += '<br/>';
    overlayHTML += '<h1 style="font-size: 3em;">' + personName + '<h1>';
    overlayHTML += '<p style="font-size: 1em;">' + description + '</p>';
    overlayHTML += '<a onclick="closeOverlay()" >&times;</a>';
    overlayHTML += '</div>';

    $(".overlay").html(overlayHTML);
    //overlay.fadeIn('slow');
    TweenMax.to(overlay, 2, {
      display: "block",
      top: 0,
      ease: Expo.easeOut
    });

    /*TweenMax.to(photo, 1, {
      width: 400,
      height: 400
    });*/

  });



});

function closeOverlay() {
  TweenMax.to($(".overlay"), 1, {
    display: "block",
    top: "-100vh",
    ease: Expo.easeOut
  });
}
