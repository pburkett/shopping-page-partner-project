import { ProxyState } from "../AppState.js"
import itemCardService from "../Services/ItemCardService.js"
import { cartService } from "../Services/CartService.js"

function _draw() {
    console.log('cartcontroller.draw() called');
    let targetElem = document.getElementById("item-rows")
    let cartTotalElem = document.getElementById("cart-total")
    let template = ''
    let cartTotal = 0
    ProxyState.cart.forEach(i => {
        template += i.CartTemplate
        cartTotal += i.cartTotal
    });
    targetElem.innerHTML = template
    cartTotalElem.innerText = cartTotal.toString()

}

export default class CartController {
    constructor() {
        console.log('cartcontroller constructor()');
    }
    addToCart(id) {
        cartService.addToCart(id)
        _draw()
    }
    deleteFromCart(id) {
        cartService.deleteFromCart(id)
        _draw()
    }

    checkout() {
        cartService.checkout()
        _draw()
    }

}