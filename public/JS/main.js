const weatherBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city = document.getElementById("city_name");
const temp = document.getElementById("temp_data");
const tempStatus = document.getElementById("temp_status");
const Day = document.getElementById("day");
const Today = document.getElementById("today_date");
city.innerHTML = "_____"
temp_status.innerHTML = "_____"
temp_data.innerHTML = "_____"
const date = new Date();
const day = date.getDay();
const datenum = date.getDate();
const month = date.getMonth();
let dayname;
let monthname;
switch (day) {
    case 1:
        dayname = "Monday";
        break;
    case 2:
        dayname = "Tuesday";
        break;
    case 3:
        dayname = "Wednesday";
        break;
    case 4:
        dayname = "Thursday";
        break;
    case 5:
        dayname = "Friday";
        break;
    case 6:
        dayname = "Saturday";
        break;
    case 7:
        dayname = "Sunday";
        break;
}
switch (month) {
    case 0:
        monthname = "Jan";
        break;
    case 1:
        monthname = "Feb";
        break;
    case 2:
        monthname = "Mar";
        break;
    case 3:
        monthname = "Apr";
        break;
    case 4:
        monthname = "May";
        break;
    case 5:
        monthname = "June";
        break;
    case 6:
        monthname = "Jul";
        break;
    case 7:
        monthname = "Aug";
        break;
    case 8:
        monthname = "Sept";
        break;
    case 9:
        monthname = "Oct";
        break;
    case 10:
        monthname = "Nov";
        break;
    case 11:
        monthname = "Dec";
        break;
}
Day.innerHTML = dayname;
Today.innerHTML = `${datenum} ${monthname}`
const getInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    if (cityVal != "") {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cb0b8e4a29b0f49de945eb8bc6f9df16`;
            let respone = await fetch(url);
            const data = await respone.json();
            let tempStatusCode;
            const arrdata = [data];
            temp.innerHTML = arrdata[0].main.temp;
            tempStatusCode = arrdata[0].weather[0].main;
            console.log(tempStatusCode);
            city.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            if (tempStatusCode === "Clear") {
                tempStatus.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else if (tempStatusCode === "Clouds") {
                tempStatus.innerHTML = '<i class="fa-solid fa-cloud"></i>';
            } else if (tempStatusCode === "Rain") {
                tempStatus.innerHTML = '<i class="fa-solid fa-rain"></i>';
            } else if (tempStatusCode === "Haze") {
                tempStatus.innerHTML = '<i class="fa-solid fa-smog"></i>';
            } else if (tempStatusCode === "Smoke") {
                tempStatus.innerHTML = '<i class="fa-solid fa-volcano"></i>';
            } else {
                tempStatus.innerHTML = "?"; // Default case
            }
        } catch {
            alert("Something wents wrong");
        }
    } else {
        alert("write name before search");
    }
};
weatherBtn.addEventListener("click", getInfo);
