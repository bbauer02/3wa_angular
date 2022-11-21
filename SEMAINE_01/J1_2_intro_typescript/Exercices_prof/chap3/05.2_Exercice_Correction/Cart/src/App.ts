import { Product } from './Product';
import { Details, Delivery, MockDetails, MockDelivery } from './data/MockProducts';

let products: Array<Product<Details, Delivery>> = [];


MockDetails.forEach((detail) => {

    let id = detail.id;
    let delivery = MockDelivery.find(delivery => delivery.id == id);

    console.log(delivery.delivery);

    products.push(new Product<Details, Delivery>(detail, delivery.delivery));

});

// Affichez que les produits dont l'option est "spécial"

let specialProducts = products.filter(product => product.option === Delivery.Special );

console.log(specialProducts);
// console.log(products);

