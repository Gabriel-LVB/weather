import "./header.style.css";
import insertChilds from "../../functions/insertChilds";
import elementFactory from "../../functions/elementFactory";
import logoSrc from "../../images/icon.svg";

function logo() {
    const logo = elementFactory("div", "logo");
    const logoTitle = elementFactory("h1", "logo-title", "Weather Project");
    const logoImg = elementFactory("img", "logo-image");
    logoImg.src = logoSrc;
    insertChilds(logo, logoImg, logoTitle);
    return logo;
}

function search() {
    const search = elementFactory("form", "search");
    const searchInput = elementFactory("input", "search-input");
    searchInput.placeholder = "Enter Your City Name";
    searchInput.value = "Fortaleza";
    const searchBtn = elementFactory("button", "search-btn", "Search");
    insertChilds(search, searchInput, searchBtn);
    return search;
}

export default function header() {
    const header = elementFactory("div", "header");
    insertChilds(header, logo(), search());
    return header;
}
