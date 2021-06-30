"use strict";
/**
 * Функция сложения.
 * @param {number} a первое слогаемое
 * @param {number} b второе слогаемое
 * @returns {number} результат сложения
 */
function sum(a, b) {
    return a + b;
}

/**
 * Функция вычитания.
 * @param {number} a первое вычитаемое (из чего вычитаем )
 * @param {number} b второе вычитаемое (что вычитаем)
 * @returns {number} результат вычитания
 */
function sub(a, b) {
    return a - b;
}

/**
 * Функция умножение.
 * @param {number} a первый множитель
 * @param {number} b второй множитель
 * @returns {number} результат умножения
 */
function mul(a, b) {
    return a * b;
}

/**
 * Функция деления.
 * @param {number} a  делимое (что делим)
 * @param {number} b  делитель (на что делим)
 * @returns {number} результат деления (с округдением до 4 знака)
 */
function div(a, b) {
    return +(a / b).toFixed(4);
}

/**
 * Функция арефметической операции.
 * @param {number} arg1 значение первого аргумента,
 * @param {number} arg2 значение второго аргумента,
 * @param {string} operation строка с названием арефметической операции
 * "sum" - сумма;
 * "sub" - вычитание;
 * "mul" - умножение;
 * "div" - деление (с округлением до 4 знака);
 * @returns {number}|| {} результат арефметической операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case("sum"): {
            return sum(arg1, arg2);
        }
        case ("sub"): {
            return sub(arg1, arg2);
        }
        case ("mul"): {
            return mul(arg1, arg2);
        }
        case ("div"): {
            return div(arg1, arg2);
        }
        default:
            throw new Error(`Арефметическая операция ${operation} не реализована`);
    }

}

/**
 * Функция создает псевдорандомное число в указаном диапозоне.
 * @param {number} min  минимальное возможное число (включительно)
 * @param {number} max  максимальное возможное число (не включительно)
 * @returns {number} случайное число из указаного диапозона
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = getRndInteger(-100, 100);
let b = getRndInteger(-100, 100);
debugger
alert(`Результат функции сложения: ${mathOperation(a, b, "sum")} (а=${a}; b=${b})`)
alert(`Результат функции вычитания: ${mathOperation(a, b, "sub")} (а=${a}; b=${b})`)
alert(`Результат функции умножения: ${mathOperation(a, b, "mul")} (а=${a}; b=${b})`)
alert(`Результат функции деления: ${mathOperation(a, b, "div")} (а=${a}; b=${b})`)