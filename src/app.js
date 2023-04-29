import { getRandomColor } from "./utils";

export default function initApp() {
    const buttonHTML = document.createElement('button');
    buttonHTML.className = 'button';
    buttonHTML.textContent = 'Изменить цвет страницы';
    document.body.append(buttonHTML);

    buttonHTML.addEventListener('click', ({ target }) => {
        document.body.style.backgroundColor = getRandomColor();
    })
}