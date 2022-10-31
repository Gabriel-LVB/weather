import "./index.style.css";
import header from "./components/header/header";
import insertChilds from "./functions/insertChilds";
import searchCity from "./functions/searchCity";
import createCard from "./components/createCard/createCard";

function removePreviousCity() {
    const previousCity = document.querySelector(".city-card");
    if (previousCity) {
        root.removeChild(previousCity);
    }
}

const root = document.querySelector("#root");
insertChilds(root, header());

const searchForm = document.querySelector("form.search");

async function loadContent(e) {
    e.preventDefault();
    const cityName = document.querySelector(".search input").value;
    const data = await searchCity(cityName);
    if (data) {
        removePreviousCity();
        insertChilds(root, await createCard(data));
        console.log(data);
    }
}

searchForm.addEventListener("submit", (e) => {
    loadContent(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
    loadContent(e);
});
