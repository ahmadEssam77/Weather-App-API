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
    let myFullTime = JSON.parse(http.response).location.localtime;
    let d = new Date(myFullTime);

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
}




