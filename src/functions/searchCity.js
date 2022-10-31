import moment from "moment";
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "appid=3eb5bc76f1c15585fc117ea8dd771fed";

class treatData {
    constructor({ name, main, sys, weather, wind, timezone }) {
        this.name = name;
        this.country = sys.country;
        this.temp = Math.round(main.temp);
        this.feelsLike = Math.round(main.feels_like);
        this.icon =
            "https://openweathermap.org/img/w/" + weather[0].icon + ".png";
        this.description = weather[0].description;
        this.humidity = main.humidity;
        this.wind = wind.speed;
        this.sunrise = moment(sys.sunrise * 1000).format("LT");
        this.sunset = moment(sys.sunset * 1000).format("LT");
    }
}

export default async function searchCity(cityName) {
    const completeUrl = baseUrl + apiKey + "&q=" + cityName + "&units=metric";
    try {
        const response = await fetch(completeUrl);
        if (response.status === 200) {
            const data = await response.json();
            return new treatData(data);
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}
