(function() {
    // gets clock hands and puts them into constants
    const HOURHAND = document.querySelector("#hour");
    const MINUTEHAND = document.querySelector("#minute");
    const SECONDHAND = document.querySelector("#second");

    // gets the current time and adds hours / mins / secs to individual let variables
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // converts current time into degrees of the 360 degree clock
    // the calculation on hr & min increments the clock smoothy instead of jumping from minute to minute or hour to hour it is  percentages of a minute / hour respectively
    let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
    let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
    let secPosition = (sec * 360) / 60;

    // function that sets clock to current time and adds a second to it every time it is called
    function runClock() {
        // adds degrees in an hour divide by seconds in an hour to previous time
        hrPosition += 30 / 3600;

        // adds degrees in a minute divide by seconds in an minute to previous time
        minPosition += 6 / 60;

        // adds degrees in a second to previous time
        secPosition += 6;

        // position clock hands to degrees values calculated above using transform rotate
        HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
        MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
        SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    }

    // interval that automates the clock by calling the runClock function every second
    var interval = setInterval(runClock, 1000);
})();