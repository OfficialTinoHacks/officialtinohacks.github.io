$(document).ready(function() {
    //Smooth Scrolling
    //this is the comment by Durga
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
                title: "WHAT IS TINOHACKS?",
                text: "TinoHacks II is a two day long, 350 person hackathon hosted by Cupertino High School students where both new and experienced programmers can work together on projects, learn new skills, and have a splendid time. TinoHacks I happened on April 15-16, 2017, and TinoHacks is coming back on April 7-8, 2018 with our second event! It is backed by Hack +, a 501 (c)(3)public charity registered in CA. All donations are tax - deductible. Please feel free to email us at <strong><a style='color: #377bb5 !important' href='mailto:hello@tinohacks.tech'>hello@tinohacks.tech</a></strong> if you have any questions or concerns."
            }, {
                backgroundImage: "url(img/faq/tinohacks1.jpg)",
                title: "WHAT IS A HACKATHON?",
                text: "A Hackathon is a 24 to 36 hour long coding marathon event where people can make the most bizarre ideas into reality. Over the course of the weekend, students collaborate to create projects, listen to exquisite workshop presentations, exercise their programming abilities, and of course, have tons of fun!"
            }, {
                backgroundImage: "url(img/faq/tinohacks2.jpg)",
                title: "TIME AND LOCATION?",
                text: "TinoHacks will be taking place on the weekend of April 7-8, 2018 and location is TBD. Thanks to our sponsors, this event is completely free! This includes all the food, swag, and fantabulous prizes."
            }, {
                backgroundImage: "url(img/faq/tinohacks3.jpg)",
                title: "DO I NEED PROGRAMMING EXPERIENCE?",
                text: "No! In fact, TinoHacks is a great way to begin your programming experience! A basic understanding is recommended, but we will have workshops and mentors to help you make your project idea a reality."
            }, {
                backgroundImage: "url(img/faq/tinohacks4.jpg)",
                title: "WHAT WILL I NEED?",
                text: "You will need a laptop, a valid student ID (or some sort of student ID), chargers, your phone, a blanket/sleeping bag, toiletries, and any supplies you need for your hack. All MLH Hardware will be available for rent at the event."
            }, {
                backgroundImage: "url(img/faq/tinohacks5.jpg)",
                title: "WHO CAN ATTEND?",
                text: "This event is open to high schoolers ONLY. No middle schoolers will be allowed. However, college students may sign up to mentor, volunteer, or lead a workshop. Sign up here, or email <strong><a style='color: #377bb5 !important' href='mailto:hello@tinohacks.tech'>hello@tinohacks.tech</a></strong> if you have any questions or concerns."
            }, {
                backgroundImage: "url(img/faq/tinohacks6.jpg)",
                title: "DO I NEED TO STAY OVERNIGHT?",
                text: "No; you will be permitted to go home at a certain time, though staying the night is highly recommended. The doors will close at 7pm and open at 7am, and no persons are allowed to leave or enter the building during that time."
            }, {
                backgroundImage: "url(img/faq/tinohacks7.jpg)",
                title: "TEAM REQUIREMENTS?",
                text: "You need at least 1 person per team and 4 people at most."
            }, {
                backgroundImage: "url(img/faq/tinohacks8.jpg)",
                title: "TRAVEL REIMBURSEMENTS?",
                text: "Unfortunately, TinoHacks will not be offering travel reimbursements. Please email us at <strong><a style='color: #377bb5 !important' href='mailto:hello@tinohacks.tech'>hello@tinohacks.tech</a></strong> for additional details."
            }, {
                backgroundImage: "url(img/faq/tinohacks9.jpg)",
                title: "SUPERVISION AND CODE OF CONDUCT?",
                text: "There will be adult supervision at the event at all times. At night at 7pm, doors will close and lock until 7am the next morning. We will be following the <a target='_blank' style='color:#377bb5 !important' href='http://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH code of conduct</a>, <a target='_blank' style='color:#377bb5 !important' href='https://github.com/MLH/policies/blob/master/data-sharing.md'>MLH Policies</a>"
            }
        ];

        console.log(faqInfo);

        $("#faqImg").css("background-image", faqInfo[index].backgroundImage);
        $("#faqTitle").html(faqInfo[index].title);
        $("#faqText").html(faqInfo[index].text);

    });

    getTeamJSON(function(data) {
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

        getJudgesJSON(function(data) {
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
