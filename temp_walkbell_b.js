function temp_walkbell_b() {
    
    audio = new Audio('./img/guitarbell.mp3');

    var d = new Date();
    var n = d.getDay()
    var n = 2020; // (2020-2021 Weekly Schedule)
    getsch();



    //set the target countdown time
    function getsch() {


        //get current minute, seconds, and hours
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        var cminute = today.getMinutes();
        if (cminute < 10) {
            var cminute = "0" + cminute;
        }
        var chour = today.getHours();
        var csecond = today.getSeconds();


        //divide current minute by sixty (an hour)* and combine strings for hour + minute product*
        // new Date() and today are commensurated. ACtually, division is not necessary if the string (x.x) is accepted.
        var minute = cminute
        var timex = chour + "." + cminute;

    
            ///// School March schedule
            if (n == 2020) {
                dayweek = "School March - Schedule Accomodation (Middle School)"
                //var timex = new Date().getHours();
                if (timex >= 1.00 && timex < 8.00) {
                    period = "Early Bird"
                    var timel = "8:00:00";
                    classis = false;
                } else if (timex >= 8.00 && timex < 8.38) {
                    period = "Period 1"
                    bmessage = "Period 1 -  8:00 to 8:38"
                    var timel = "8:38:00";
                    classis = true;
                } else if (timex >= 8.38 && timex < 8.43) {
                    period = "Take 5. We're back at 8:43"
                    bmessage = "P1 to P2 Intermission -  8:38 to 8:43"
                    var timel = "8:43:00";
                    classis = false;
                } else if (timex >= 8.43 && timex < 9.21) {
                    bmessage = "Period 2 -  8:43 to 9:21"
                    period = "Period 2"
                    var timel = "9:21:00";
                    classis = true;
                } else if (timex >= 9.21 && timex < 10.05) {
                    bmessage = "Assembly -  9:21 to 10:05"
                    period = "ASSEMBLY TIME"
                    var timel = "10:05:00";
                    classis = false;
                } else if (timex >= 10.05 && timex < 10.10) {
                    bmessage = "Assembly to P3 Intermission -  10:05 to 10:10"
                    period = "Take 5. We're back at 10:10"
                    var timel = "10:10:00";
                    classis = false;
                } else if (timex >= 10.10 && timex < 10.48) {
                    bmessage = "Period 3 - 10:10 to 10:48"
                    period = "Period 3"
                    var timel = "10:48:00";
                    classis = true;
                } else if (timex >= 10.48 && timex < 10.53) {
                    period = "Take 5. We're back at 10:53"
                    bmessage = "P3 to P4 Intermission -  10:48 to 10:53"
                    var timel = "10:53:00";
                    classis = false;
                } else if (timex >= 10.53 && timex < 11.31) {
                    bmessage = "Period 4 - 10:53 to 11:31"
                    period = "Period 4"
                    var timel = "11:31:00";
                    classis = true;
                } else if (timex >= 11.31 && timex < 11.36) {
                    period = "Take 5. We're back at 11:36"
                    bmessage = "P4 to P5a Intermission -  11:31 to 11:36"
                    var timel = "11:36:00";
                    classis = false;
                } else if (timex >= 11.36 && timex < 12.06) {
                    bmessage = "Period 5A - 11:36 to 12:06"
                    period = "Period 5A"
                    var timel = "12:06:00";
                    classis = false;
                } else if (timex >= 12.06 && timex < 12.11) {
                    period = "Take 5 Minutes off. We're back at 12:11"
                    bmessage = "P5a to P5b Intermission -  12:06 to 12:11"
                    var timel = "12:11:00";
                    classis = false;
                } else if (timex >= 12.11 && timex < 12.41) {
                    bmessage = "Period 5B - 12:11 to 12:41"
                    period = "Period 5B"
                    var timel = "12:41:00";
                    classis = false;
                } else if (timex >= 12.41 && timex < 12.46) {
                    period = "Take 5. We're back at 12:46 PM"
                    bmessage = "P5B to P6A Intermission -  12:41 to 12:46"
                    var timel = "12:46:00";
                    classis = false;
                } else if (timex >= 12.46 && timex < 13.16) {
                    bmessage = "Period 6A 12:46 PM to 1:16 PM"
                    period = "Period 6A"
                    var timel = "13:16:00";
                    classis = true;
                } else if (timex >= 13.16 && timex < 13.21) {
                    period = "Take 5 Minutes off. We're back at 1:21 PM"
                    bmessage = "P6A to P6B Intermission -  1:16 PM to 1:21 PM"
                    var timel = "13:21:00";
                    classis = false;
                } else if (timex >= 13.21 && timex < 13.51) {
                    bmessage = "Period 6B - 1:21 PM to 1:51 PM"
                    period = "Period 6B"
                    var timel = "13:51:00";
                    classis = true;
                } else if (timex >= 13.51 && timex < 13.56) {
                    period = "Take 5. We're back at 1:56 PM"
                    bmessage = "P6B to P7 Intermission -  1:51 PM to 1:56 PM"
                    var timel = "13:56:00";
                    classis = false;
                } else if (timex >= 13.56 && timex < 14.34) {
                    period = "Period 7"
                    bmessage = "Period 7 -  1:56 PM to 2:34 PM"
                    var timel = "14:34:00";
                    classis = false;
                } else if (timex >= 14.34 && timex < 14.39) {
                    period = "Take 5. We're back at 2:39 PM"
                    bmessage = "P7 to P8 Intermission -  2:34 PM to 2:39 PM"
                    var timel = "14:39:00";
                    classis = false;
                } else if (timex >= 14.39 && timex < 15.20) {
                    period = "Period 8"
                    bmessage = "Period 8 -  2:39 PM to 3:20 PM"
                    var timel = "15:20:00";
                    classis = false;
                } else if (timex >= 14.45 && timex <= 24.59) {
                    period = "School Day Ended"
                    var timel = "23:59:59";
                    classis = false;
                    bmessage = "Have a great rest of your day!"
                } else {
                    period = "Intermission"
                    var timel = "1:00:00";
                    classis = false;
                    exit("Program Terminated to prevent the bell 'sound loop' bug.");
                }
            };

            

        document.getElementById("demo-a").innerHTML = period;
        document.getElementById("demo2-a").innerHTML = timex;
        document.getElementById("demo3-a").innerHTML = dayweek;
        document.getElementById("demo4-a").innerHTML = bmessage;

        ////////////////
        //var timel = "15:20:00";
        ////////////////

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + ' ' + dd + ', ' + yyyy + ' ';
        var countDownDate = new Date(today + " " + timel).getTime();
        //var countDownDate = new Date(today + " 14:35:20").getTime();
        var x = setInterval;

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);






            //get everythiong again
            //get current minute, seconds, and hours
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
            var cminute = today.getMinutes();
            if (cminute < 10) {
                var cminute = "0" + cminute;
            }
            var chour = today.getHours();
            var csecond = today.getSeconds();
        
        
            //divide current minute by sixty (an hour)* and combine strings for hour + minute product*
            // new Date() and today are commensurated. ACtually, division is not necessary if the string (x.x) is accepted.
            var minute = cminute;
            var timex = chour + "." + cminute;



        temphour = hours * 60;
        combinedvar = minutes + temphour;
        tempmath = combinedvar * 60;
        nonseconds = temphour + tempmath;
        finalseconds = seconds + nonseconds;
        window.xsec = finalseconds;

    };
    /////////////////// Visuals preperation




    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.daysA');
        var hoursSpan = clock.querySelector('.hoursA');
        var minutesSpan = clock.querySelector('.minutesA');
        var secondsSpan = clock.querySelector('.secondsA');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
            
            if (t.total <= 0) {
                clearInterval(timeinterval);
                getsch();
            }
        }
        getsch();
        checknull();
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    // Last number is mili seconds
    deadline = new Date(Date.parse(new Date()) + 1 * 1 * 1 * xsec * 1000);
    initializeClock('clockdiv1', deadline);

    function checknull() {
        if (distance == 0) {
            getsch();
            Program.restart();
            window.location.reload();
        };

    };




    var x = document.getElementById("bell"); 

    function playAudio() { 
    x.play(); 
    } 

    function pauseAudio() { 
    x.pause(); 
    } 

    timeoutx = finalseconds * 1000;

    const start = Date.now();

    console.log('Starting alternate bell countdown for audio');

    setTimeout(() => {
    const millis = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millis/1000)}, playing bell`);
    playAudio();
    scheduleA();
    }, timeoutx);

    /*
    if (accepted()) {

        document.cookie = "audioenabled = True";

    }
    */



   function exit( status ) {
    
    var i;

    if (typeof status === 'string') {
        console.log(status);
    }

    window.addEventListener('error', function (e) {e.preventDefault();e.stopPropagation();}, false);

    var handlers = [
        'copy', 'cut', 'paste',
        'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
        'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
        'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
    ];

    function stopPropagation (e) {
        e.stopPropagation();
        // e.preventDefault(); // Stop for the form controls, etc., too?
    }
    for (i=0; i < handlers.length; i++) {
        window.addEventListener(handlers[i], function (e) {stopPropagation(e);}, true);
    }

    if (window.stop) {
        window.stop();
    }

    throw '';
}


}