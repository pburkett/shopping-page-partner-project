

export default class Cart {

    get Template() {
        return /*html*/`
        <div class="row my-3 mx-3 border-bottom border-dark">
            <div class="col">Product</div>
            <div class="col">Price</div>
            <div class="col">Qty</div>
            <div class="col">Total</div>
            <div class="col">Actions</div>
        </div>
        `
    }
}