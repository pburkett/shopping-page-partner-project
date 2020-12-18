import { ProxyState } from "../AppState.js"

class CartService {
    constructor() {
    }

    addToCart(id) {
        let matchingCartItem = ProxyState.cart.find(i => i.id == id)
        if (matchingCartItem) {
            matchingCartItem.cartQuantity++
            console.log(matchingCartItem.cartTotal);
            matchingCartItem.cartTotal += matchingCartItem.price

            this._updateStock(id)
            return
        }
        ProxyState.cart = [...ProxyState.cart, this._updateStock(id)]


    }

    _updateStock(id) {
        let itemToAdd = ProxyState.itemCards.find(i => i.id == id);
        itemToAdd.quantity -= 1
        console.log(itemToAdd.quantity);
        if (itemToAdd.quantity == 0) {
            console.log(`${id}-buy-button`);
            let btnId = `${id}-buy-button`
            // $(`#${id}-buy-button`).prop('disabled', true);
            document.getElementById(btnId).classList.add("btn-disabled")
        }
        ProxyState.itemCards = ProxyState.itemCards
        return itemToAdd
    }


    deleteFromCart(id) {
        let itemToDelete = ProxyState.cart.find(i => i.id == id);
        itemToDelete.cartQuantity -= 1
        itemToDelete.cartTotal -= itemToDelete.price
        if (itemToDelete.cartQuantity == 0) {
            ProxyState.cart = ProxyState.cart.filter(i => i.id != id)
        }

        ProxyState.itemCards.forEach(i => {
            if (itemToDelete.id == i.id) {
                console.log(i);
                i.quantity += 1
                ProxyState.itemCards = ProxyState.itemCards
            }
        })

    }
    checkout() {
        ProxyState.cart = []
    }
}


export const cartService = new CartService