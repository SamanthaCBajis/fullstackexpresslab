"use strict";
const cartItems = {
    template:  `
    <p> Shopping Cart Items </p>
    <section ng-repeat="item in $ctrl.shoppingCart track by $index">
    <p> Id:  {{item.id}} </p>
    <p> Product:  {{item.product}} </p>
    <p> Price:  {{item.price}} </p>
    <p> Quantity:  {{item.quantity}} </p>
    </section>
    `,


    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then(response => {
            console.log(response);
            vm.shoppingCart = response.data;
        });
    }]
};



angular
.module("App")
.component("cartItems", cartItems)