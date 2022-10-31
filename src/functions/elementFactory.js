export default function elementFactory(type, className, textContent = "") {
    const element = document.createElement(type);
    element.className = className;
    element.textContent = textContent;
    return element;
}
