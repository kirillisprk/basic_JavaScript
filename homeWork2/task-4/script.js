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
alert(`Результат функции сложения: ${sum(a, b)} (а=${a}; b=${b})`)
alert(`Результат функции вычитания: ${sub(a, b)} (а=${a}; b=${b})`)
alert(`Результат функции умножения: ${mul(a, b)} (а=${a}; b=${b})`)
alert(`Результат функции деления: ${div(a, b)} (а=${a}; b=${b})`)