"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - this.price * 0.25;
}

let product = new Product('text', 200);
product.make25PercentDiscount();
console.log(`В ES5:`);
console.log(product);