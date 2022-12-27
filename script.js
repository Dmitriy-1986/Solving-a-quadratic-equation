'use strict';

const firstForm = document.querySelector('#first_form'),
      meaningA = firstForm.querySelector('#meaning_a'),
      meaningB = firstForm.querySelector('#meaning_b'),
      meaningC = firstForm.querySelector('#meaning_c'),
      result = document.querySelector('.result');

firstForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Отменить действия формы по умолчанию

    // Принимаем данные из формы и преобразуем их в число
    const allValue = +meaningA.value + +meaningB.value + +meaningC.value;

    // Метод Math.sqrt() возвращает квадратный корень числа
    // Метод toFixed() количество цифр после десятичной запятой
    // Функция isNaN() определяет является ли литерал или переменная нечисловым значением
    if(isNaN(allValue)) {
        result.innerHTML = 'Введите в поле формы число!';
    } else {
        result.innerHTML = Math.sqrt(allValue).toFixed(2);
    }

    firstForm.reset(); // Очищаем поля формы после ее отправки
})