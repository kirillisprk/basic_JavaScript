"use strict";



/**
 * гениратор HTML разметки итоговой стоимости
 * @param totalPrise {int} сумма всех продуктов
 * @return {string} сторка с разметкой суммой всех продуктов
 */
function getHtmlTotalPrise(totalPrise) {
    return `<p class="total-price__text total-price">$${totalPrise}</p>`
}

/**
 * Вставка html разметки общей стоимости в коорзине
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
    let sum = arrPrise.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum);
    return sum
}

/**
 * гениратор HTML разметки одного продукта
 * @param product {object} объект продукта для тображения
 * @return {string}  строка с HTML разметкой одного продукта
 */
function getHtmlProduct(product) {
    return `<a href="Single_Page.html" class="add-product__item-basket">
                        <div class="item-basket__product-img">
                            <img class="product-img__img" src="${product.img}" alt="basket_1.png">
                        </div>
                        <div class="item-basket__product-description">
                            <h3 class="product-description__title">${product.name}</h3>
                            <p class="product-description__praise-text">
                                ${product.count} <span class="praise__special-text">x</span>$${product.price}
                            </p>
                        </div>
                        <div class="item-basket__product-delete">
                            <button class="product-delete__button">
                                <i class="button__icon-close fas fa-times-circle"></i>
                            </button>
                        </div>
                    </a>`
}


/**
 * вставка html разметки продуктов в корзине
 * @param productArray массив для тображения в корзине
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
 * Подсчет колчиесва повторяющихся элементов в корзине (по имени товара) и формирование масива для тображения в коорзине
 * @param productsArray массив с объектами в корзине
 * @returns {*[]} итоговый массив объектов в корзине
 */
function getProductBasketUnique(productsArray) {
    let uniqueObj = {};
    productsArray.forEach((obj) => {
        //для опредления уникальности используется весь объект в виде json
        let key = JSON.stringify(obj);
        uniqueObj[key] = (uniqueObj[key] || 0) + 1;
    });
    //формируем массив объектов в виде уникальных товаров и их колличесва
    let arrayObjProduct = [];
    //Вычитываю свойсва входного объекта и и на их основе создаю новый объект
    Object.keys(uniqueObj).forEach(element => {
        arrayObjProduct.push(JSON.parse(element));
    });
    //у получившихся новых объектов добавляю свойсво count и total
    for (let i = 0; i < Object.keys(uniqueObj).length; i++) {
        arrayObjProduct[i].count = uniqueObj[Object.keys(uniqueObj)[i]];
        arrayObjProduct[i].totalPrise = arrayObjProduct[i].count * arrayObjProduct[i].price;
    }
    return arrayObjProduct;
}

/**
 * Отображение числа количесва продуктов в коррзине
 * @param productsArray {array} массив с продуктами
 */
function countProductInBasket(productsArray) {
    document.querySelector('.count-basket-product').innerHTML = `${productsArray.length}`;
}

/**
 * Добавление продукт в общий массив продуктов
 * @param oneProduct {Product} объект с ифнормации о продукте
 * @return {array}
 */
function addBasket(oneProduct) {
    productInBasket.push(oneProduct);
    countProductInBasket(productInBasket);
    console.log('Все товары :');
    console.log(productInBasket);
    console.log('-----------');
    return productInBasket
}

/**
 * Получаем информации о продукте в виде объекта
 * @param product блок с продуктами
 * @return {array} возвращает массив со всеми добавлеными продуктами
 */
function getInfoProduct(product) {
    let productOne = new Product();
    //получаем адрес картинки
    productOne.img = product.querySelector('img').getAttribute('src');
    //получаем название тавара
    productOne.name = product.querySelector('.card-info-name').textContent;
    //получаем цену тавара
    productOne.price = product.querySelector('.praise').textContent;
    return addBasket(productOne);

}

/**
 * Добавляем событие на клик и получаем информацию о блоке на который нажали кнопку
 * @param button элемент события
 */
function addListenerButton(button) {
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

    });
}

let productInBasket = [];
//Находим все кнопки добавить в карзину на странице добавляем событие на клик
let buttonAddCart = document.querySelectorAll('.box-add');
buttonAddCart.forEach((element) => {
    addListenerButton(element);

});


