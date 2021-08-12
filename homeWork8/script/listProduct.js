"use strict";
renderProductList(productData);

function renderProductList(productData) {
    let stringHtml = '';
    document.querySelector('.product-cards').innerHTML = '';
    productData.forEach(e => {
        stringHtml += getHtmlProductList(e);
    });
    document.querySelector('.product-cards').insertAdjacentHTML('afterbegin', stringHtml);
}


