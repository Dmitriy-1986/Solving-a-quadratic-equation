'use strict';

// Обработка события DOMContentLoaded - для запуска скрипта после загрузки всего HTML
window.addEventListener('DOMContentLoaded', () => {
    const firstForm = document.querySelector('#first_form'),
          meaningA = firstForm.querySelector('#meaning_a'),
          meaningB = firstForm.querySelector('#meaning_b'),
          meaningC = firstForm.querySelector('#meaning_c');

    let result = document.querySelector('.result');

    firstForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Отменить действия формы по умолчанию (отменить перезагрузку страницы по клику на кнопку формы)

        // Принимаем данные из формы и преобразуем их в число с помощью Number()
        const allValue = Number(meaningA.value) + Number(meaningB.value) + Number(meaningC.value);
    
        // Проверка на ошибки в обработке скрипта с помощью try{}catch(){}
        try {
            // Функция isNaN() определяет является ли литерал или переменная нечисловым значением
            if(allValue <= 0) {
                result.innerHTML = 'Введено недопустимое значение!';
                result.style.color = 'red';
                return false;
            } else if (!isNaN(allValue)) {
                // Метод Math.sqrt() возвращает квадратный корень числа
                // Метод toFixed() количество цифр после десятичной запятой
                result.innerHTML = `Результат: ${Math.sqrt(allValue).toFixed(2)}`;
                // Задаем синюю окраску текста
                result.style.color = 'blue';
            } else {
                result.innerHTML = 'Введите в поле формы число!';
                // Задаем красную окраску текста
                result.style.color = 'red';
            }
        } catch (e) {
            result.innerHTML = `В JavaScript допущена ошибка: ${e}`;
        }

        firstForm.reset(); // Очищаем поля формы после ее отправки
    });
});
