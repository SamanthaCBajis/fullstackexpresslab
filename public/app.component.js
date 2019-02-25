"use strict";
const cartItems = {
    template:  `
    <p class="title"> Shopping Cart Items </p>
    <div class="cardcontainer">
    <section class="card" ng-repeat="item in $ctrl.shoppingCart track by $index">
    <p class= "id"> Id:  {{item.id}} </p>
    <p class= "product"> Product:  {{item.product}} </p>
    <p class= "price"> Price:  {{item.price}} </p>
    <p class="quantity"> Quantity:  {{item.quantity}} </p>
    </section>
    </div>
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