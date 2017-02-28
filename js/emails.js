$(document).ready(function() {
    var ENTER = 13; //keyCode 13 --> Enter Key

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
        if (e.keyCode == ENTER) {
            var email = $(this).val().trim();

            if (validateEmail(email)) {
                firebase.auth().signInAnonymously().catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    console.log(errorCode);
                    console.log(errorMessage);
                });

                var flag = true; //Makes sure that onAuthStateChanged only fires once the first time

                firebase.auth().onAuthStateChanged(function(user) {
                    if (user && flag) {
                        // User is signed in.
                        flag = false;

                        var isAnonymous = user.isAnonymous;
                        var uid = user.uid;

                        console.log("User is signed in anonymously. ");

                        db.ref('emails').child(uid).set(email);

                        $(this).val("");

                        $("body").snackbar({
                            message: "Thanks for leaving your email. We will notify you as soon as registration opens. Swipe to close.",
                            duration: 2,
                            swipe: true
                        });

                    } else {
                        // User is signed out.
                        console.log("User is signed out.");
                    }
                });

            } else {
                //Invalid email
                $("body").snackbar({
                    message: "You have entered an invalid email address. Swipe to close.",
                    duration: 2,
                    swipe: true
                });
            } //email validation end
        } //keyCode end
    }); //notifyEmail end

    function validateEmail(email) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    }

});