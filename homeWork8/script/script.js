"use strict";

/**
 * генератор HTML разметки итоговой стоимости
 * @param totalPrise {int} сумма всех продуктов
 * @return {string} строка с разметкой суммой всех продуктов
 */
function getHtmlTotalPrise(totalPrise) {
    return `<p class="total-price__text total-price">$${totalPrise}</p>`
}

/**
 * Вставка html разметки общей стоимости в корзине
 * @param totalPrise
 */
function renderTotalPrise(totalPrise) {
    let html = getHtmlTotalPrise(totalPrise);
    document.querySelector('.total-price').innerHTML = '';
    document.querySelector('.total-price').insertAdjacentHTML('afterbegin', html);

}

/**
 *  Подсчет общей стоимости в корзине
 * @param arr {array} массив с уникальными продуктами и их стоимостью
 * @return {*} сумму всех продуктов
 */
function getSumTotalPrise(arr) {
    let arrPrise = [];
    arr.forEach(e => {
        arrPrise.push(e.totalPrise);
    })
    return arrPrise.reduce(function (a, b) {
        return a + b;
    }, 0)
}

/**
 * вставка html разметки продуктов в корзине
 * @param productArray массив для отображения в корзине
 */
function renderProductInBasket(productArray) {
    let stringHtml = '';
    document.querySelector('.list-product').innerHTML = '';
    productArray.forEach(e => {
        stringHtml += getHtmlProduct(e);
    });
    document.querySelector('.list-product').insertAdjacentHTML('afterbegin', stringHtml);
}

/**
 * Подсчет количества повторяющихся элементов в корзине (по имени товара) и формирование массива для отображения в корзине
 * @param productsArray массив с объектами в корзине
 * @returns {*[]} итоговый массив объектов в корзине
 */
function getProductBasketUnique(productsArray) {
    let uniqueObj = {};
    productsArray.forEach((obj) => {
        //для определения уникальности используется весь объект в виде json
        let key = JSON.stringify(obj);
        uniqueObj[key] = (uniqueObj[key] || 0) + 1;
    });
    //формируем массив объектов в виде уникальных товаров и их количества
    let arrayObjProduct = [];
    //Вычитываю свойства входного объекта и и на их основе создаю новый объект
    Object.keys(uniqueObj).forEach(element => {
        arrayObjProduct.push(JSON.parse(element));
    });
    //у получившихся новых объектов добавляю свойство count и total
    for (let i = 0; i < Object.keys(uniqueObj).length; i++) {
        arrayObjProduct[i].count = uniqueObj[Object.keys(uniqueObj)[i]];
        arrayObjProduct[i].totalPrise = arrayObjProduct[i].count * arrayObjProduct[i].price;
    }
    return arrayObjProduct;
}

/**
 * Отображение числа количества продуктов в корзине
 * @param productsArray {array} массив с продуктами
 */
function countProductInBasket(productsArray) {
    document.querySelector('.count-basket-product').innerHTML = `${productsArray.length}`;
}

/**
 * Добавление продукт в общий массив продуктов
 * @param oneProduct {Product} объект с информации о продукте
 * @return {array}
 */
function addBasket(oneProduct) {
    productInBasket.push(oneProduct);
    countProductInBasket(productInBasket);
    return productInBasket
}

/**
 * Получаем информации о продукте в виде объекта
 * @param product блок с продуктами
 * @return {array} возвращает массив со всеми добавленными продуктами
 */
function getInfoProduct(product) {
    let productOne = new Product();
    //получаем адрес картинки
    productOne.img = product.querySelector('img').getAttribute('src');
    //получаем название товара
    productOne.name = product.querySelector('.card-info-name').textContent;
    //получаем цену товара
    productOne.price = product.querySelector('.praise').textContent;
    return addBasket(productOne);

}

/**
 * Добавляем событие на клик и получаем информацию о блоке на который нажали кнопку
 * @param button элемент события
 */
function addProductButton(button) {
    button.addEventListener("click", (event) => {
        //получаем информацию о продукте по которому нажали
        let getParent = event.currentTarget.parentNode;
        //получаем массив со всеми продуктами в корзине
        let arrayAllProduct = getInfoProduct(getParent);
        //получить массив уникальных продуктов (с общей стоимостью и количеством)
        let arrayUniqueProduct = getProductBasketUnique(arrayAllProduct);
        //получаем общую сумму всех продуктов
        let totalPrise = getSumTotalPrise(arrayUniqueProduct);
        //добавляем разметку продуктов
        renderProductInBasket(arrayUniqueProduct);
        //добавляем разметку информацию об общей суммы
        renderTotalPrise(totalPrise);
        //показать уведомление о действии
        showSnackbar("Добавлено в корзину");

    });
}

function start() {
//Находим все кнопки добавить в корзину на странице добавляем событие на клик
    let buttonAddCart = document.querySelectorAll('.box-add');
    buttonAddCart.forEach((element) => {
        addProductButton(element);

    });
}

let productInBasket = [];
//должна выполняться после загрузки страницы целиком
window.onload = start;





