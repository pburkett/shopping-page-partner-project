import { generateId } from "../Utils/GenerateId.js"

export default class ItemCard {
    // @ts-ignore
    constructor({ name, price, img, quantity, description }) {
        console.log('creating itemcard');
        this.name = name
        this.price = price
        this.img = img
        this.quantity = quantity
        this.description = description
        this.id = generateId()
        this.cartTotal = this.price
        this.cartQuantity = 1
    }



    get Template() {
        return /*html*/`
            \<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.description}</p>
                    <button onclick="app.cartController.addToCart('${this.id}')" id="${this.id}-buy-button" class="btn btn-primary">Add to cart</button>
                    <h5>$${this.price} - ${this.quantity} in stock</h5>
                </div>
            </div>
            `
    }

    get CartTemplate() {
        return /*html*/`
        <div class="row my-3 mx-3 border-bottom border-dark">
            <div class="col">${this.name}</div>
            <div class="col">${this.price}</div>
            <div class="col">${this.cartQuantity}</div>
            <div class="col">${this.cartTotal}</div>
            <div class="col"><button onclick="app.cartController.deleteFromCart('${this.id}')">REMOVE</button></div>
        </div>
        `
    }
}
