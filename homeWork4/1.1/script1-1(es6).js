"use strict";

class ProductEs6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscountEs6() {
        this.price = this.price - this.price * 0.25
    }

}

let productEs6 = new ProductEs6('text', 200);
productEs6.make25PercentDiscountEs6();
console.log(`В ES6:`);
console.log(productEs6);