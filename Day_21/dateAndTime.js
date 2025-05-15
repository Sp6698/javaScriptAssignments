setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // Getting current time and date
    function addZero(params) {
        if (params < 10) {
            params = '0' + params
            return params
        } else {
            return params
        }
    }
    let time = new Date();
    let nowYear = time.getFullYear()
    let month = addZero(time.getMonth())
    let date = addZero(time.getDate())
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "  PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = monthArray[month] + ' ' + date  + ',' +'  '+ nowYear+ ' ' + hour + ":" + min + ":" + sec + am_pm;

    let dateTime = document.getElementById("clock")
    dateTime.innerHTML = currentTime;
    // dateTime.style.backgroundColor='yellow'
    dateTime.style.width = '250px'
    dateTime.style.margin = 'auto'
    

    function changeColor() {
        --currentColor
        if (currentColor < 0) {
            currentColor = colors.length - 1
        }
        for (let i = 0; i < lis.length; i++) {
            dateAndTime[i].style.backgroundColor = colors[(currentColor + i) % colors.length]
        }
    }
    changeColor()

}

showTime();