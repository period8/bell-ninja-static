//alert("Hi! This schedule isa werong because twe can an acseembly!!");

function scheduleA() {

    audio = new Audio('./img/guitarbell.mp3');

    var d = new Date();
    var n = d.getDay();
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

        //Line 1
        n = 1;

        if ((n == 1) || (n == 4) || (n == 5)) {
            if (n == 1) {
                dayweek = "Monday :("
            } else if (n == 4) {
                dayweek = "Thursday"
            } else if (n == 5) {
                dayweek = "Friday :D"
            }
            dayweek = "The whole week has no block";

            //var timex = new Date().getHours();
            if (timex >= 1.00 && timex < 8.00) {
                period = "Good Morning! School Starts in..."
                bmessage = "Early Bird Until 8:00"
                var timel = "8:00:00";
                classis = false;
            } else if (timex >= 8.00 && timex < 8.45) {
                period = "Period 1"
                bmessage = "Period 1 - 8:00 to 8:45"
                var timel = "8:45:00";
                classis = true;
            } else if (timex >= 8.45 && timex < 8.50) {
                bmessage = "Period 1 & 2 Intermission - 8:45 to 8:50"
                period = "Class Intermission"
                var timel = "8:50:00";
                classis = false;
            } else if (timex >= 8.50 && timex < 9.35) {
                period = "Period 2"
                bmessage = "Period 2 - 8:50 to 9:35"
                var timel = "9:35:00";
                classis = true;
            } else if (timex >= 9.35 && timex < 9.50) {
                bmessage = "Break - 9:35 to 9:50"
                period = "Break Time (15 min.)"
                var timel = "9:50:00";
                classis = false;
            } else if (timex >= 9.50 && timex < 10.35) {
                period = "Period 3"
                bmessage = "Period 3 - 9:50 to 10:35"
                var timel = "10:35:00";
                classis = true;
            } else if (timex >= 10.35 && timex < 10.40) {
                bmessage = "Period 3 & 4 Intermission - 10:35 to 10:40"
                period = "Class Intermission"
                var timel = "10:40:00";
                classis = false;
            } else if (timex >= 10.40 && timex < 11.30) {
                period = "Period 4"
                bmessage = "Period 4 - 10:40 to 11:30"
                var timel = "11:30:00";
                classis = true;
            } else if (timex >= 11.30 && timex < 11.35) {
                bmessage = "Period 4 & 5 Intermission - 11:30 to 11:35"
                period = "Class Intermission"
                var timel = "11:35:00";
                classis = false;
            } else if (timex >= 11.35 && timex < 12.20) {
                bmessage = "Period 5 - 11:35 to 12:20"
                period = "Period 5a"
                var timel = "12:20:00";
                classis = true;
            } else if (timex >= 12.20 && timex < 12.25) {
                bmessage = "Period 5 & 6 Intermission - 12:20 to 12:25"
                period = "Class Intermission"
                var timel = "12:25:00";
                classis = false;
            } else if (timex >= 12.25 && timex < 13.10) {
                bmessage = "Period 6 - 12:25 to 1:10"
                period = "Period 6"
                var timel = "13:10:00";
                classis = true;
            } else if (timex >= 13.10 && timex < 13.15) {
                bmessage = "Period 6 & 7 Intermission - 1:10 to 1:15"
                period = "Class Intermission"
                var timel = "13:15:00";
                classis = false;
            } else if (timex >= 13.15 && timex < 14.00) {
                bmessage = "Period 7 - 1:15 to 2:00"
                period = "Period 7"
                var timel = "14:00:00";
                classis = false;
            } else if (timex >= 14.00 && timex < 14.05) {
                bmessage = "Period 7 & 8 Intermission - 2:00 to 2:05"
                period = "Class Intermission"
                var timel = "14:05:00";
                classis = false;
            } else if (timex >= 14.05 && timex < 14.50) {
                bmessage = "Period 8 - 2:05 to 2:50"
                period = "Period 8"
                var timel = "14:50:00";
                classis = false;
            } else if (timex >= 14.50 && timex < 15.15) {
                bmessage = "Tutorial - 2:50 to 3:15"
                period = "Tutorial"
                var timel = "15:15:00";
                classis = false;
            } else if (timex >= 15.15 && timex <= 17.00) {
                bmessage = "The library *MAY BE* open until 5:00 PM"
                period = "Have a great rest of your day! Library Closes in..."
                var timel = "17:00:00";
                classis = false;
            } else if (timex >= 17.01 && timex <= 24.59) {
                period = "Have a great rest of your day!"
                var timel = "24:00:00";
                classis = false;
            } else {
                period = "Get to class!"
                var timel = "1:00:00";
                classis = false;
            }
        };




        ///// Tuesday (Odd Block)
        if (n == 2) {
            dayweek = "Tuesday"
            //var timex = new Date().getHours();
            if (timex >= 1.00 && timex < 8.00) {
                period = "Good Morning! School Starts in..."
                bmessage = "Early Bird Until 8:00"
                var timel = "8:00:00";
                classis = false;
            } else if (timex >= 8.00 && timex < 9.30) {
                period = "Period 1"
                bmessage = "Period 1 - 8:00 to 9:30"
                var timel = "9:30:00";
                classis = true;
            } else if (timex >= 9.30 && timex < 9.45) {
                bmessage = "Break - 9:30 to 9:45"
                period = "Break Time (15 min.)"
                var timel = "9:45:00";
                classis = false;
            } else if (timex >= 9.45 && timex < 11.20) {
                period = "Period 3"
                bmessage = "Period 3 - 9:45 to 11:20"
                var timel = "11:20:00";
                classis = true;
            } else if (timex >= 11.20 && timex < 11.25) {
                bmessage = "Period 3 & 5 Intermission - 11:20 to 11:25"
                period = "Class Intermission"
                var timel = "11:25:00";
                classis = false;
            } else if (timex >= 11.25 && timex < 12.10) {
                period = "Period 5"
                bmessage = "Period 5 - 11:25 to 12:10"
                var timel = "12:10:00";
                classis = true;
            } else if (timex >= 12.10 && timex < 12.15) {
                bmessage = "Period 5 & 6 Intermission - 12:10 to 12:15"
                period = "Class Intermission"
                var timel = "12:15:00";
                classis = false;
            } else if (timex >= 12.15 && timex < 13.00) {
                bmessage = "Period 6 - 12:15 to 1:00"
                period = "Period 6"
                var timel = "13:00:00";
                classis = true;
            } else if (timex >= 13.00 && timex < 13.05) {
                bmessage = "Period 6 & 7 Intermission - 1:00 to 1:05"
                period = "Class Intermission"
                var timel = "13:05:00";
                classis = false;
            } else if (timex >= 13.05 && timex < 14.40) {
                bmessage = "Period 7 - 1:05 to 2:40"
                period = "Period 7"
                var timel = "14:40:00";
                classis = false;
            } else if (timex >= 14.40 && timex < 15.15) {
                bmessage = "Tutorial - 2:40 to 3:15"
                period = "Tutorial"
                var timel = "15:15:00";
                classis = false;
            } else if (timex >= 15.15 && timex <= 17.00) {
                bmessage = "The library *MAY BE* open until 5:00 PM"
                period = "Have a great rest of your day! Library Closes in..."
                var timel = "17:00:00";
                classis = false;
            } else if (timex >= 17.01 && timex <= 24.59) {
                period = "Have a great rest of your day!"
                var timel = "24:00:00";
                classis = false;
            } else {
                period = "Get to class!"
                var timel = "1:00:00";
                classis = false;
            }
        };


        ///// Wednesday (Even Block)
        if (n == 3) {
            dayweek = "Wednesday"
            //var timex = new Date().getHours();
            if (timex >= 1.00 && timex < 8.00) {
                period = "Good Morning! School Starts in..."
                bmessage = "Early Bird Until 8:00"
                var timel = "8:00:00";
                classis = false;
            } else if (timex >= 8.00 && timex < 9.30) {
                period = "Period 2"
                bmessage = "Period 2 - 8:00 to 9:30"
                var timel = "9:30:00";
                classis = true;
            } else if (timex >= 9.30 && timex < 9.45) {
                bmessage = "Break - 9:30 to 9:45"
                period = "Break Time (15 min.)"
                var timel = "9:45:00";
                classis = false;
            } else if (timex >= 9.45 && timex < 11.20) {
                period = "Period 4"
                bmessage = "Period 4 - 9:45 to 11:20"
                var timel = "11:20:00";
                classis = true;
            } else if (timex >= 11.20 && timex < 11.25) {
                bmessage = "Period 4 & 5 Intermission - 11:20 to 11:25"
                period = "Class Intermission"
                var timel = "11:25:00";
                classis = false;
            } else if (timex >= 11.25 && timex < 12.10) {
                period = "Period 5"
                bmessage = "Period 5 - 11:25 to 12:10"
                var timel = "12:10:00";
                classis = true;
            } else if (timex >= 12.10 && timex < 12.15) {
                bmessage = "Period 5 & 6 Intermission - 12:10 to 12:15"
                period = "Class Intermission"
                var timel = "12:15:00";
                classis = false;
            } else if (timex >= 12.15 && timex < 13.00) {
                bmessage = "Period 6 - 12:15 to 1:00"
                period = "Period 6"
                var timel = "13:00:00";
                classis = true;
            } else if (timex >= 13.00 && timex < 13.05) {
                bmessage = "Period 6 & 8 Intermission - 1:00 to 1:05"
                period = "Class Intermission"
                var timel = "13:05:00";
                classis = false;
            } else if (timex >= 13.05 && timex < 14.40) {
                bmessage = "Period 8 - 1:05 to 2:40"
                period = "Period 8"
                var timel = "14:40:00";
                classis = false;
            } else if (timex >= 14.40 && timex <= 17.00) {
                bmessage = "The library *MAY BE* open until 5:00 PM"
                period = "Have a great rest of your day! Library Closes in..."
                var timel = "17:00:00";
                classis = false;
            } else if (timex >= 17.01 && timex <= 24.59) {
                period = "Have a great rest of your day!"
                var timel = "24:00:00";
                classis = false;
            } else {
                period = "Get to class!"
                var timel = "1:00:00";
                classis = false;
            }
        };

        if (n == 6) {
            dayweek = "Saturday!"
            period = "Please enjoy your weekend!"
            bmessage = "Enjoy Your Weekend!"
            var timel = "24:00:00";
        };

        if (n == 0) {
            dayweek = "Sunday :|"
            period = "Just one more day please......."
            bmessage = "Enjoy Your Weekend!"
            var timel = "24:00:00";
        }


        document.getElementById("demo-a").innerHTML = period;
        document.getElementById("demo2-a").innerHTML = timex;
        document.getElementById("demo3-a").innerHTML = dayweek;
        document.getElementById("demo4-a").innerHTML = bmessage;

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

        console.log(`seconds elapsed = ${Math.floor(millis / 1000)}, playing bell`);
        playAudio();
        scheduleA();
    }, timeoutx);

    /*
    if (accepted()) {
    
        document.cookie = "audioenabled = True";
    
    }
    */



    function exit(status) {

        var i;

        if (typeof status === 'string') {
            console.log(status);
        }

        window.addEventListener('error', function (e) { e.preventDefault(); e.stopPropagation(); }, false);

        var handlers = [
            'copy', 'cut', 'paste',
            'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
            'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
            'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
        ];

        function stopPropagation(e) {
            e.stopPropagation();
            // e.preventDefault(); // Stop for the form controls, etc., too?
        }
        for (i = 0; i < handlers.length; i++) {
            window.addEventListener(handlers[i], function (e) { stopPropagation(e); }, true);
        }

        if (window.stop) {
            window.stop();
        }

        throw '';
    }


}