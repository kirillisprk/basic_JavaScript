/**
 * генератор HTML разметки одной карточки продукта
 * @param productBox {Product} объект с информации о продукте
 * @return {string} строка с HTML разметкой одной карточки продукта
 */
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

/**
 * генератор HTML разметки одного продукта в корзине
 * @param product {object} объект продукта для отображения
 * @return {string}  строка с HTML разметкой одного продукта
 */
function getHtmlProduct(product) {
    return `<div class="product-basket">
                    <a href="Single_Page.html" class="add-product__item-basket">
                        <div class="item-basket__product-img">
                            <img class="product-img__img" src="${product.img}" alt="basket_1.png">
                        </div>
                        <div class="item-basket__product-description">
                            <h3 class="product-description__title">${product.name}</h3>
                            <p class="product-description__praise-text">
                                ${product.count} <span class="praise__special-text">x</span>$${product.price}
                            </p>
                        </div>
                    </a>
                        <div class="item-basket__product-delete">
                            <button class="product-delete__button">
                                <i class="button__icon-close fas fa-times-circle"></i>
                            </button>
                        </div>
            </div>`
}