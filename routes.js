"use strict";

const express = require("express");
const cartItems = express.Router();

const shoppingCart = [
    {
        id:'1',
        product: "Apples",
        price: "3",
        quantity: "2"
    },
    {
        id:'2',
        product: "Bananas",
        price: "2",
        quantity: "4"
    },
    {
        id:'3',
        product: "Strawberries",
        price: "5",
        quantity: "8"
    },
    {
        id:'4',
        product: "Blueberries",
        price: "6",
        quantity: "5"
    }
 
];



cartItems.get("/cart-items", function(req, res) {
    res.send(shoppingCart);
    console.log("GET request made");
});


cartItems.get("/cart-items/:name", function(req, res) {
    console.log("GET items request made")                        // data that is the name parameter
    for (let item of shoppingCart){
        if(item === req.params.name){
            res.send(item);                     // representing the string, sends us the color
            break;
        }else{
            res.send("No item found");
        }                                       // if the color is in the string send the color if not send the string there is no color found
    }
});

    cartItems.post("/cart-items", function(req, res) {
        console.log(req.body)
        res.send(shoppingCart);
        console.log("POST request made");
    
    });

    
    cartItems.delete("/cart-items/:id", function(req,res) {
        console.log(req.params.id)
        res.send(shoppingCart);
        console.log("DELETE request made");
    });
    
    
    cartItems.put("/cart-items/:id", function(req,res) {                 // put updates
        console.log(req.params.id, req.body);
        res.send(req.params.id);                // sending the response to postman
            console.log("PUT request made");
    
});

module.exports = cartItems;