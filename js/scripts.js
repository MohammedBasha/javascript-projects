const timerH = document.querySelector('h1'); // The h1 element to output the countdown
let timeSeconds = 3600; // The time in seconds to countdown

// Displaying the countdown function
function displayTime(seconds) { // taking 'seconds' argument
    let hour = Math.floor(seconds / 60 / 60); // Converting the seconds to hours
    
    // Converting the seconds to minutes
    // Also, subtract the number of hours in minutes from the total minutes
    let min = (hour) ? Math.floor((seconds / 60) - (hour * 60)) : Math.floor(seconds / 60);
    
    let sec = Math.floor(seconds % 60); // The rest of seconds

    // The output 
    timerH.innerHTML =
        `${hour < 10 ? 0 : ''}${hour}:${min < 10 ? 0 : ''}${min}:${sec < 10 ? 0 : ''}${sec}`;
}

displayTime(timeSeconds); // Calling the display function

// Set the time interval
const timer = setInterval(() => {
    timeSeconds--; // subtract a second from the counter vevery second
    displayTime(timeSeconds); // Calling the display function

    if (timeSeconds <= 0 || timeSeconds < 1) { // Checking if the number of seconds is 0
        timerH.innerHTML = 'Time out';
        clearInterval(timer); // Clear the time interval
    }
}, 1000);