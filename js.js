
const hideBotton = document.querySelector('.main__description_btn');

const hiddenSlides = document.querySelector('.brend-list');

const hideIcon = document.querySelector('.main__description_png');

let isHidden = true;

let showList = () => {
    console.log(hiddenSlides);
    hiddenSlides.classList.add('visible');
    isHidden = false;
    hideBotton.innerHTML = 'Скрыть';
    hideIcon.style = 'transform: rotate(180deg)'
}

let hideList = () => {
    hiddenSlides.classList.remove('visible');
    isHidden = true;
    hideBotton.innerHTML = 'Показать все';
    hideIcon.style = 'transform: rotate(0deg)'
}

hideBotton.addEventListener('click', () => {
    if (isHidden) {
        showList();
    } else {
        hideList();
    }
})