$(document).ready(function() {
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

    /*$(document).on('scroll', function() {
        if ($(this).scrollTop() >= $('#about').position().top - 186) {
            $(".dateContainer").css("opacity", "0");
        } else if ($(this).scrollTop() >= $('#large-header').position().top) {
            $(".dateContainer").css("opacity", "1");
        }
    });*/


    addTeamInfo(function() {
        $(".teamPhoto").hover(function() {
            $(this).css("cursor", "pointer");
            $(this).css("margin-top", "-10px");
            $(this).css("transition", "margin-top 0.3s ease");
        }, function() {
            $(this).css("cursor", "auto");
            $(this).css("margin-top", "0px");
            $(this).css("transition", "margin-top 0.3s ease");
        });
    });

    /*$(document).on('click', '.teamPhoto .photo-overlay', function(e) {
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

    });*/

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

    /**function closeOverlay() {
        TweenMax.to($(".overlay"), 1, {
            display: "block",
            top: "-100vh",
            ease: Expo.easeOut
        });
    }*/

    function getTeamJSON(callback) {
        //Load team info from json file
        $.getJSON("resources/teaminfo.json", function(data) {
            return callback(data);
        });
    }

});
