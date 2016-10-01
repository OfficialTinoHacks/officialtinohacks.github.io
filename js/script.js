$(document).ready(function() {

  new WOW().init();

  addTeamInfo();

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

  $(document).on('click', '.teamPhoto', function(e) {
    var photo = $(this);
    var overlay = $(".overlay");
    var personName = photo.parent().text().trim();

    getTeamJSON(function(data) {
      $.each(data, function(key, val) {
        if (personName == val.name) {

          $(".overlay").css("background-image", "url('" + val.img_hd + "')");

          var overlayHTML = '<div id="closeOverlay">';
          overlayHTML += '<br/>';
          overlayHTML += '<h1 style="font-size: 3em;">' + val.name + '<h1>';
          overlayHTML += '<p style="font-size: 1em;">' + val.long_title + '</p>';
          overlayHTML += '<a onclick="closeOverlay()" >&times;</a>';
          overlayHTML += '</div>';

          $(".overlay").html(overlayHTML);

          TweenMax.to(overlay, 2, {
            display: "block",
            top: 0,
            ease: Expo.easeOut
          });

          return false; //Ends loop
        }
      });

    });

  });
});

function addTeamInfo() {

  getTeamJSON(function(data) {
    for (var i = 0; i < data.length; i++) {
      var teamHTML = '<h2 data-wow-delay="0.5s" class="wow fadeIn text-center">';
      teamHTML += '<div data-wow-delay="0.1s" class="wow fadeInUp center-block circle teamPhoto"></div><br/>' + data[i].name + '</h2>'
      teamHTML += '<p class="text-center teamPos">'
      teamHTML += '<blockquote data-wow-delay="0.2s" class="wow fadeInUp teamPos">' + data[i].short_title + '</blockquote>';
      teamHTML += '</p>';

      $("#member" + (i + 1)).html(teamHTML);

      $("#member" + (i + 1) + " > h2 > div.teamPhoto").css("background-image", "url('" + data[i].img_hd + "')");

      teamHTML = "";
    }
  });

}

function closeOverlay() {
  TweenMax.to($(".overlay"), 1, {
    display: "block",
    top: "-100vh",
    ease: Expo.easeOut
  });
}

function getTeamJSON(callback) {
  //Load team info from json file
  $.getJSON("resources/teaminfo.json", function(data) {
    return callback(data);
  });
}
