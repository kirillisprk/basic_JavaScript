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

function getHtmlProductList(productBox) {
    return `<div class="one-card one-card-fix">
                <a href="Single_Page.html" class="card card-fix">
                    <img class="card-img-png card-img-png-fix" src="${productBox.img}"
                         alt="${productBox.name}.png">
                    <div class="card-info">
                        <p class="card-info-name">${productBox.name}</p>
                        <div class="price-and-rating">
                            <p class="card-info-price">$<span class="praise">${productBox.price}</span></p>
                            <div class="product-page-content__rating focus-visible">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
    
                    </div>
                </a>
                <div class="box-add">
                    <button class="add">
                        <img class="add-img" src="img/cart-add.svg" alt="cart-add.svg">
                        <p class="add-text">Add to cart</p>
                    </button>
                </div>
            </div>`

}
