function initCountdown() {
    var time = document.getElementById("userTime").value;
    var hour = time.substring(0, 2);
    var minute = time.substring(3, 5);
    var second = 0;

    validTime(hour, minute); //If the input time is not valid, an error is thrown

    var now = new Date();
    var absolute = new Date();
    absolute.setHours(hour, minute, second);

    if (hasHappened(now, hour, minute)) {
        absolute.setDate(absolute.getDate() + 1);
    }

    countdown(now, absolute);

    return false;
}

function countdown(now, absolute) {
    var counter = setInterval(function () {
        var msLeft = timeDifference(now, absolute); //Time left in milliseconds
        var timeLeft = calculateTime(msLeft); //Time left in HH:MM:SS
        displayTime(timeLeft); //Time is displayed

        if (msLeft < 1000) {
            //If the time reaches zero, the counter stops
            clearInterval(counter);
            return false;
        }
    }, 1000);
}

function validTime(hour, minute) {
    var invalidTime = new Error("Invalid request");
    if (hour < 0 || hour > 23) {
        //If the input hour is outside the 24-hour clock, it is invalid
        throw invalidTime;
    }
    if (minute < 0 || minute > 59) {
        //If the input minute is outside the 60 minute hour, it is invalid
        throw invalidTime;
    }
}

function hasHappened(now, hour, minute) {
    if (now.getHours() > hour) {
        //If the current hour is greated than the input hour, it has already happened
        return true;
    } else if (now.getHours() == hour && now.getMinutes() > minute) {
        //If the current hour match the input hour, the minutes are checked and if the current minute is greated than the input minute, it has already happened
        return true;
    }
    return false; //Returns false if the input time on this date has yet to happen
}

function timeDifference(now, absolute) {
    now = new Date().getTime();
    absolute = absolute.getTime();
    return absolute - now; //Time left in milliseconds is returned
}

function calculateTime(msLeft) {
    return {
        //The calculations from milliseconds to HH:MM:SS can be found here: https://stackoverflow.com/a/10874133
        hours: Math.floor((msLeft / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((msLeft / (1000 * 60)) % 60),
        seconds: Math.floor((msLeft / 1000) % 60),
    };
}

function displayTime(timeLeft) {
    console.log(`Hours: ${timeLeft.hours} \nMinutes: ${timeLeft.minutes}\nSeconds: ${timeLeft.seconds}`);
}