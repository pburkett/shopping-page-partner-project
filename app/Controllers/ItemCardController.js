import { ProxyState } from "../AppState.js"
import itemCardService from "../Services/ItemCardService.js"

function _draw() {
    console.log('controller.draw() called');
    let targetElem = document.getElementById("item-card-container")
    let template = ''
    ProxyState.itemCards.forEach(i => {
        template += i.Template
    });
    targetElem.innerHTML = template
}

export default class ItemCardController {
    constructor() {
        ProxyState.on('itemCards', _draw)
        _draw()
    }

}


