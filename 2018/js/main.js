$(document).ready(function() {
    //Smooth Scrolling

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $(".nav-pills > li > a").click(function(e) {
        e.preventDefault();
        $(".nav-pills > li").removeClass();
        $(this).parent().removeClass().addClass("active");

        var index = $(this).parent().index();

        var faqInfo = [
            {
                backgroundImage: "url(img/logo-small.png)",
                title: "What is TinoHacks?",
                text: "TinoHacks II is a two day long, 350 person hackathon hosted by Cupertino High School students where both new and experienced programmers can work together on projects, learn new skills, and have a splendid time. TinoHacks I happened on April 15-16, 2017, and TinoHacks is coming back in 2018 with our second event! It is backed by Hack +, a 501 (c)(3)public charity registered in CA.All donations are tax - deductible."
            }, {
                backgroundImage: "url(img/bgimages/title-logo.png)",
                title: "What is a hackathon?",
                text: "A Hackathon is a 24 to 36 hour long coding marathon event where people can make the most bizarre ideas into reality. Over the course of the weekend, students collaborate to create projects, listen to exquisite workshop presentations, exercise their programming abilities, and of course, have tons of fun!"
            }, {
                backgroundImage: "url(img/logo-small.png)",
                title: "Cost?",
                text: "Thanks to our sponsors, this event is completely free! This includes all the food, swag, and fantabulous prizes."
            }, {
                backgroundImage: "url(img/logo-small.png)",
                title: "What will I need?",
                text: "You will need a laptop, a valid student ID (or some sort of student ID), chargers, your phone, a blanket/sleeping bag, toiletries, and any supplies you need for your hack. All MLH Hardware will be available for rent at the event. All TinoHacks participants are guaranteed top notch iMacs with pre-installed programming software to hack throughout the entire event, however, you may bring your own laptop for convenience as well!"
            }, {
                backgroundImage: "url(img/logo-small.png)",
                title: "Do I need programming experience?",
                text: "No! In fact, TinoHacks is a great way to begin your programming experience! A basic understanding is recommended, but we will have workshops and mentors to help you make your project idea a reality."
            }, {
                backgroundImage: "url(img/logo-small.png)",
                title: "Who can attend?",
                text: "This event is open to high schoolers only. However, college students may sign up to mentor, volunteer, or lead a workshop. Sign up here, or email <strong><a href='mailto:hello@tinohacks.tech'>hello@tinohacks.tech</a></strong> if you have any questions or concerns."
            }, {
                backgroundImage: "url(img/logo-small.png)",
                title: "Do I need to stay overnight?",
                text: "No; you will be permitted to go home at a certain time, though staying the night is highly recommended. The doors will close at 7pm and open at 7am, and no persons are allowed to leave or enter the building during that time."
            }
        ];

        $("#faqImg").css("background-image", faqInfo[index].backgroundImage);
        $("#faqTitle").html(faqInfo[index].title);
        $("#faqText").html(faqInfo[index].text);

    });

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

    addJudgeInfo(function() {
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

    function addTeamInfo(callback) {

        getTeamJSON(function(data) {
            for (var i = 0; i < data.length; i++) {
                var teamHTML = '';
                teamHTML += '<div class="center-block circle teamPhoto"></div><br/>';
                teamHTML += '<p class="text-center teamPos">'
                teamHTML += '<p class="teamPos">' + data[i].name + "<br/>" + data[i].short_title + '</p>';
                teamHTML += '</p>';

                $("#member" + (i + 1)).html(teamHTML);

                $("#member" + (i + 1) + " > div.teamPhoto").css("background-image", "url('" + data[i].img_low + "')");

                teamHTML = "";

                callback();
            }
        });

    }

    function addJudgeInfo(callback) {

        getJudgesJSON(function(data) {
            for (var i = 0; i < data.length; i++) {
                var teamHTML = '<h2 class="text-center">';
                teamHTML += '<div class="center-block circle teamPhoto"><div style="display: none;" class="circle photo-overlay"><p>Learn more</p></div></div><br/>' + data[i].name + '</h2>'
                teamHTML += '<p class="text-center teamPos">'
                teamHTML += '<p class="teamPos"><span style="color: #BDBEC0">' + data[i].title + '</span><br/>' + data[i].company + '</p>';
                teamHTML += '</p>';

                $("#judge" + (i + 1)).html(teamHTML);

                $("#judge" + (i + 1) + " > h2 > div.teamPhoto").css("background-image", "url('" + data[i].img + "')");

                teamHTML = "";

                callback();
            }
        });

    }

    function getTeamJSON(callback) {
        //Load team info from json file
        $.getJSON("resources/teaminfo.json", function(data) {
            return callback(data);
        });
    }

    function getJudgesJSON(callback) {
        //Load team info from json file
        $.getJSON("resources/judgeinfo.json", function(data) {
            return callback(data);
        });
    }

});