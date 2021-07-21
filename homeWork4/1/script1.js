"use strict";

/**
 * Класс описывающий разряды числа в виде:
 * - единицы (в свойстве units)
 * - десятки (в свойстве tens)
 * - сотни (в свойстве hundreds)
 * @param number {number} любое число от 0 до 999 целое число
 */
class NumberInfo {

    constructor(number) {
        this.hundreds = Math.floor(number / 100);
        this.tens = Math.floor(number / 10) % 10;
        this.units = number % 10;
    }
}

/**
 * Функция проверки, что число входит в диапазон от 0 до 999,
 * Результат проверки выводи в консоль
 * @param userNumber {string} теоретическое число в виде строки которое хотим проверить.
 * @returns {boolean}
 */
function validateNumber(userNumber) {
    if (!(Boolean(userNumber.trim()))) {
        console.log('Значение отсутствует')
        return false
    }
    if (isNaN(+userNumber)) {
        console.log(`Введённое значение: ${userNumber}, не является числом`)
        return false
    }
    if (!(Number.isInteger(+userNumber))) {
        console.log(`Введённое значение: ${userNumber}, не является целым числом`)
        return false
    }
    if (userNumber.length > 3) {
        console.log(`Введённое значение: ${userNumber}, не входит в диапазон от 0 до 999`)
        return false
    }
    console.log(`Введённое значение: ${userNumber} прошла проверку`);
    return true
}

let numberInfo;
let userNumber = prompt('Введите число от 0 до 999');

if (validateNumber(userNumber) === true) {
    numberInfo = new NumberInfo(+userNumber);
} else {
    numberInfo = {};
}
console.log(numberInfo)


