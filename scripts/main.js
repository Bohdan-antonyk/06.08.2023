let inputEl = document.querySelector('.input-block');
let selectEl = document.querySelector('.select');
let buttonEl = document.querySelector('.button');
let resultEl = document.querySelector('.result-block');


buttonEl.addEventListener('click', () => {
    if (inputEl.value > 100) {
        resultEl.innerHTML = `Більше 100 років майже ніжто не живе)))`;
    } else if (inputEl.value < 18) {
        resultEl.innerHTML = `Тобі ще не має 18 років , так що ти ще маленький`;
    } else if (inputEl.value >= 18 && inputEl.value <= 100) {
        console.log('Вік корректний')
        if (selectEl.value === 'чоловік') {
            resultEl.innerHTML = `Тобі ${inputEl.value} років і Ви Чоловік`;
        } else if (selectEl.value === 'жінка') {
            resultEl.innerHTML = `Тобі ${inputEl.value} років і Ви Жінка`;
        }
    }
})