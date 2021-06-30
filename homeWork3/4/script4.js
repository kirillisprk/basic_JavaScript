"use strict";
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
//Получить все товары, у которых есть фотографии, можете использовать метод filter
const productsPhotos = products.filter(element => element.hasOwnProperty("photos") && element.photos.length > 0);
console.log(productsPhotos);

//2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
console.log(products.sort((a, b) => {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price < b.price) {
            return -1;
        }
        return 0;
    }
    )
);
