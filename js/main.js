// =============== Select Nav links and active the active class ===============
// const navLinks = document.querySelectorAll("nav ul a");
// for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener("click", function(e) {
//         for (let j = 0; j < navLinks.length; j++) {
//             navLinks[j].classList.remove("active");
//         }
//         e.target.classList.add("active");
//     });
// }

// =============== Weather Forecase API ===============
let http = new XMLHttpRequest();
http.open("GET", "https://api.weatherapi.com/v1/forecast.json?key=69ec5dd962594da7879100928211909&q=Cairo&days=3&aqi=yes&alerts=yes");
http.send();

http.addEventListener('readystatechange', function () {
    if (http.readyState == 4 && http.status == 200) {
        // =============== Invoking ===============
        displayCountryName();
        displayFullTime();
        weatherCondition();
        // displayIcons();
    }
});

// =============== Display Country Name Function ===============
function displayCountryName() {
    let countryName = document.getElementById('countryName');
    countryName.innerHTML = JSON.parse(http.response).location.name;
}

// =============== Display Week Days Function ===============
function displayFullTime() {
    let weekDay = document.getElementById('weekDay');
    let weekDayNext = document.getElementById('weekDayNext');
    let weekDayAfterNext = document.getElementById('weekDayAfterNext');

    let theActualDay = document.getElementById('theActualDay');
    let theMonth = document.getElementById('theMonth');

    let myFullTime = JSON.parse(http.response).location.localtime;  // Get the time from API
    let d = new Date(myFullTime);   // Convert it to a date

    theActualDay.innerHTML = d.getDate();  // Set the day here in number 1 => 31

    // Days
    switch (d.getDay()) {
        case 0:
            weekDay.innerHTML = "Sunday";
            weekDayNext.innerHTML = "Monday";
            weekDayAfterNext.innerHTML = "Tuesday";
            break;
        case 1:
            weekDay.innerHTML = "Monday";
            weekDayNext.innerHTML = "Tuesday";
            weekDayAfterNext.innerHTML = "Wednesday";
            break;
        case 2:
            weekDay.innerHTML = "Tuesday";
            weekDayNext.innerHTML = "Wednesday";
            weekDayAfterNext.innerHTML = "Thursday";
            break;
        case 3:
            weekDay.innerHTML = "Wednesday";
            weekDayNext.innerHTML = "Thursday";
            weekDayAfterNext.innerHTML = "Friday";
            break;
        case 4:
            weekDay.innerHTML = "Thursday";
            weekDayNext.innerHTML = "Friday";
            weekDayAfterNext.innerHTML = "Saturday";
            break;
        case 5:
            weekDay.innerHTML = "Friday";
            weekDayNext.innerHTML = "Saturday";
            weekDayAfterNext.innerHTML = "Sunday";
            break;
        case 6:
            weekDay.innerHTML = "Saturday";
            weekDayNext.innerHTML = "Sunday";
            weekDayAfterNext.innerHTML = "Monday";
            break;
        default:
            weekDay.innerHTML = "Not a day";
            weekDayNext.innerHTML = "Not a day";
            weekDayAfterNext.innerHTML = "Not a day";
    }


    // Months
    switch (d.getMonth()) {
        case 0:
            theMonth.innerHTML = "January";
            break;
        case 1:
            theMonth.innerHTML = "February";
            break;
        case 2:
            theMonth.innerHTML = "March";
            break;
        case 3:
            theMonth.innerHTML = "April";
            break;
        case 4:
            theMonth.innerHTML = "May";
            break;
        case 5:
            theMonth.innerHTML = "June";
            break;
        case 6:
            theMonth.innerHTML = "July";
            break;
        case 7:
            theMonth.innerHTML = "August";
            break;
        case 8:
            theMonth.innerHTML = "September";
            break;
        case 9:
            theMonth.innerHTML = "October";
            break;
        case 10:
            theMonth.innerHTML = "November";
            break;
        case 11:
            theMonth.innerHTML = "December";
            break;
        default:
            theMonth.innerHTML = "Not a month";

    }
}

// =============== Display Weather Condition ===============
function weatherCondition() {
    let weatherCondition1 = document.getElementById('weatherCondition1');
    weatherCondition1.innerHTML = JSON.parse(http.response).forecast.forecastday[0].day.condition.text;
    let weatherCondition2 = document.getElementById('weatherCondition2');
    weatherCondition2.innerHTML = JSON.parse(http.response).forecast.forecastday[1].day.condition.text;
    let weatherCondition3 = document.getElementById('weatherCondition3');
    weatherCondition3.innerHTML = JSON.parse(http.response).forecast.forecastday[2].day.condition.text;
}

// =============== Display Temperatures ===============
// function getTemp() {

// }


// =============== Display Icons ===============
// function displayIcons() {
//     let icon2 = document.getElementById('icon2');
//     let iconSrcAPI = JSON.parse(http.response).forecast.forecastday[2].day.condition.icon;
//     console.log(iconSrcAPI);
//     icon2.setAttribute('src', iconSrcAPI);
// }




