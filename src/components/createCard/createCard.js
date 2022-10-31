import "./createCard.style.css";
import insertChilds from "../../functions/insertChilds";
import ef from "../../functions/elementFactory";

async function getGif(word) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZnImcL5BfxNgIki3uxGgSO03rcfHfQsM&q=${word}&limit=20&offset=0&rating=g&lang=en`;
    const response = await fetch(url);
    if (response.status === 200) {
        const resolve = await response.json();
        return resolve.data[Math.floor(Math.random() * 20)].images.original.url;
    } else {
        return null;
    }
}

export default async function createCard(data) {
    const cityCard = ef("div", "city-card");
    const name = ef("h1", "name", data.name + " - " + data.country);
    const description = ef("h2", "description", data.description);
    const icon = ef("img", "city-icon");
    icon.src = await getGif(data.temp >= 25 ? "hot+day" : "cold+day");
    const temp = ef("h1", "temp", data.temp + "º");
    const feelsLike = ef(
        "h3",
        "feels-like",
        "Feels like: " + data.feelsLike + "º"
    );
    const humidity = ef("h2", "humidity", "Humidity: " + data.humidity + "%");
    const wind = ef("h3", "wind", "Wind: " + data.wind + "km/h");
    const sunrise = ef("h3", "sunrise", "Sunrise: " + data.sunrise);
    const sunset = ef("h3", "sunset", "Sunset: " + data.sunset);
    const sun = ef("div", "sun");
    insertChilds(sun, sunrise, sunset);

    insertChilds(
        cityCard,
        name,
        description,
        icon,
        temp,
        feelsLike,
        humidity,
        wind,
        sun
    );
    return cityCard;
}
