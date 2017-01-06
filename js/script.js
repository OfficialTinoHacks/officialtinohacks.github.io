$(document).ready(function() {

    new WOW().init();

    addTeamInfo(function() {
        $(".teamPhoto").hover(function() {
            $(this).css("cursor", "pointer");
            $(this).children().css("display", "block");
            $(this).children().children().css("display", "block");
        }, function() {
            $(this).css("cursor", "auto");
            $(this).children().css("display", "none");
            $(this).children().children().css("display", "none");
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
            var teamHTML = '<h2 class="text-center">';
            teamHTML += '<div class="center-block circle teamPhoto"><div style="display: none;" class="circle photo-overlay"><p>Learn more</p></div></div><br/>' + data[i].name + '</h2>'
            teamHTML += '<p class="text-center teamPos">'
            teamHTML += '<blockquote class="teamPos">' + data[i].short_title + '</blockquote>';
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
