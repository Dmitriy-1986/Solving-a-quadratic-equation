'use strict';

// Обработка события DOMContentLoaded - для запуска скрипта после загрузки всего HTML
window.addEventListener('DOMContentLoaded', () => {
    const firstForm = document.querySelector('#first_form'),
        meaningA = firstForm.querySelector('#meaning_a'),
        meaningB = firstForm.querySelector('#meaning_b'),
        meaningC = firstForm.querySelector('#meaning_c'),
        result = document.querySelector('.result');

    firstForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Отменить действия формы по умолчанию (отменить перезагрузку страницы по клику на кнопку формы)

        // Принимаем данные из формы и преобразуем их в число с помощью Number()
        const allValue = Number(meaningA.value) + Number(meaningB.value) + Number(meaningC.value);

        // Метод Math.sqrt() возвращает квадратный корень числа
        // Метод toFixed() количество цифр после десятичной запятой
        // Функция isNaN() определяет является ли литерал или переменная нечисловым значением
        if (!isNaN(allValue)) {
            result.innerHTML = `Результат: ${Math.sqrt(allValue).toFixed(2)}`;
            // Задаем синюю окраску текста
            //result.style.color = 'blue';
            // Добавить класс - синий цвет текста
            result.classList.add('res-blue');
        } else {
            result.innerHTML = 'Введите в поле формы число!';
            // Задаем красную окраску текста
            //result.style.color = 'red';
            // Добавить класс - красный цвет текста
            result.classList.add('res-red');
        }

        firstForm.reset(); // Очищаем поля формы после ее отправки
    });
});
