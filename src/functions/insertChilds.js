export default function insertChilds(parent, ...childs) {
    childs.forEach((child) => {
        parent.appendChild(child);
    });
}
