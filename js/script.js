$(document).ready(function() {

    new WOW().init();

    addTeamInfo(function() {
        $(".teamPhoto").hover(function() {
            $(this).css("margin-top", "-10px");
            $(this).css("transition", "margin-top 0.4s ease");
            $(this).css("cursor", "pointer");
            $(this).children().fadeIn('fast');
            $(this).children().children().removeClass();
            $(this).children().children().addClass("animated slideInUp");
        }, function() {
            $(this).css("margin-top", "0px");
            $(this).css("transition", "margin-top 0.4s ease");
            $(this).css("cursor", "auto");
            $(this).children().children().removeClass();
            $(this).children().children().addClass("animated slideOutDown");
            $(this).children().fadeOut('fast');
        });
    });

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

    /*function orderClouds(min, max, id, interval) {
      var cloudType = "clouds" + min;
      var cloudNum = min;
      setInterval(function() {
        $("#" + id).css("background", "transparent url('img/bgimages/" + cloudType + ".png') repeat top center");
        cloudNum++;
        if (cloudNum == max) cloudNum = min;
        cloudType = "clouds" + cloudNum;
      }, interval);
    }*/

    $(document).on('click', '.teamPhoto .photo-overlay', function(e) {
        var photo = $(this).parent();
        var overlay = $(".overlay");
        var personName = photo.parent().text().trim().substring(10);

        getTeamJSON(function(data) {
            $.each(data, function(key, val) {
                if (personName == val.name) {
                    console.log(val);

                    $(".overlay").css("background-image", "url('" + val.img_hd + "')");

                    var overlayHTML = '<div id="closeOverlay">';
                    overlayHTML += '<br/>';
                    overlayHTML += '<h1 style="font-size: 3em;">' + val.name + '<h1>';
                    overlayHTML += '<p style="font-size: 1em;">' + val.long_title + '</p>';
                    overlayHTML += '<div class="memberDesc"><p>' + val.description + '</p></div>';
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

function addTeamInfo(callback) {

    getTeamJSON(function(data) {
        for (var i = 0; i < data.length; i++) {
            var teamHTML = '<h2 data-wow-delay="0.5s" class="wow fadeIn text-center">';
            teamHTML += '<div data-wow-delay="0.1s" class="wow fadeInUp center-block circle teamPhoto"><div style="display: none;" class="circle photo-overlay"><p class="animated fadeInUp">Learn more</p></div></div><br/>' + data[i].name + '</h2>'
            teamHTML += '<p class="text-center teamPos">'
            teamHTML += '<blockquote data-wow-delay="0.2s" class="wow fadeInUp teamPos">' + data[i].short_title + '</blockquote>';
            teamHTML += '</p>';

            $("#member" + (i + 1)).html(teamHTML);

            $("#member" + (i + 1) + " > h2 > div.teamPhoto").css("background-image", "url('" + data[i].img_low + "')");

            teamHTML = "";

            callback();
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

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAffDA8-Vt_FrAN2w8XMQCjh_gLVE7YClM",
    authDomain: "tinohacks-emails.firebaseapp.com",
    databaseURL: "https://tinohacks-emails.firebaseio.com",
    storageBucket: "tinohacks-emails.appspot.com",
    messagingSenderId: "972497710797"
};

firebase.initializeApp(config);

var db = firebase.database();

$("#notifyEmail").on('keyup', function(e) {
    if (e.keyCode == 13) {
        var email = $(this).val().trim();
        if (validateEmail(email)) {
            db.ref('emails').push(email);
            $("body").snackbar({
                message: "Thanks for leaving your email. We will notify you as soon as registration opens. Swipe to close.",
                duration: 2,
                swipe: true
            });
            $(this).val("");
        }
    }
});

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    $("body").snackbar({
        message: "You have entered an invalid email address! Swipe to close.",
        swipe: true,
        duration: 2
    });
    return false;
}
