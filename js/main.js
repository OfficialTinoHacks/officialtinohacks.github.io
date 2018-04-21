$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDmBBGkNjjv1uylYjgJZKhUaQerUdxCw3w",
        authDomain: "tinohacks2.firebaseapp.com",
        databaseURL: "https://tinohacks2.firebaseio.com",
        projectId: "tinohacks2",
        storageBucket: "tinohacks2.appspot.com",
        messagingSenderId: "779949253339"
    };
    firebase.initializeApp(config);

    const db = firebase.database();

    //Countdown timer to April 22, 2018, 10:00 AM
    var x;
    var countDownDate = new Date("Apr 22, 2018 10:00:00 AM").getTime();

    db.ref('timerOn').on('value', (snapshot) => {
        if (snapshot.val() == 0) {
            clearInterval(x);
            $("#countdown-timer").html("24 : 00 : 00");
        } else {
            // Update the count down every 1 second
            x = setInterval(function () {

                var now = new Date().getTime();

                var distance = countDownDate - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) +
                    (
                        days * 24);
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                $("#countdown-timer").html(((hours < 10) ? "" + 0 + hours : hours) + " : " + ((
                        minutes < 10) ? "" + 0 +
                    minutes : minutes) + " : " + ((seconds < 10) ? "" + 0 + seconds :
                    seconds));

                if (distance < 0) {
                    clearInterval(x);
                    $("#hackingTimeLeft").html("<strong>END OF HACKING</strong>");
                }
            }, 1000);

        }
    });

    getTeamJSON(function (data) {
        for (var i = 0; i < data.length; i++) {
            var teamHTML = '';
            teamHTML += '<img class="circle teamPhoto" src="' + data[i].img_low + '" />'
            teamHTML += '<h3 style="font-family: Lobster, cursive;"><strong>' + data[i].name + '</strong></h3>';
            teamHTML += '<figcaption>' + data[i].short_title + '</figcaption>';

            $("#member" + (
                i + 1)).html(teamHTML);

            teamHTML = "";

        }
    });

    function addJudgeInfo(callback) {

        getJudgesJSON(function (data) {
            for (var i = 0; i < data.length; i++) {
                var teamHTML = '<h2 class="text-center">';
                teamHTML += '<div class="center-block circle teamPhoto"><div style="display: none;" class="circle photo-overlay"><p>Learn more</p></div></div><br/>' + data[i].name + '</h2>'
                teamHTML += '<p class="text-center teamPos">'
                teamHTML += '<p class="teamPos"><span style="color: #BDBEC0">' + data[i].title + '</span><br/>' + data[i].company + '</p>';
                teamHTML += '</p>';

                $("#judge" + (
                    i + 1)).html(teamHTML);

                $("#judge" + (
                    i + 1) + " > h2 > div.teamPhoto").css("background-image", "url('" + data[i].img + "')");

                teamHTML = "";

                callback();
            }
        });

    }

    function getTeamJSON(callback) {
        //Load team info from json file
        $.getJSON("resources/teaminfo.json", function (data) {
            return callback(data);
        });
    }

    function getJudgesJSON(callback) {
        //Load team info from json file
        $.getJSON("resources/judgeinfo.json", function (data) {
            return callback(data);
        });
    }

});