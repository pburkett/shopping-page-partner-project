// import Value from "./Models/Value.js"
import ItemCard from "./Models/ItemCard.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {Value[]} */
  // values = []
  /** @type {itemCard} */
  itemCards = [new ItemCard({ name: 'Foot', price: 10, img: "https://i.ebayimg.com/thumbs/images/g/cPkAAOSw1SJdKo0y/s-l200.jpg", quantity: 5, description: "A nice foot" }),
  new ItemCard({ name: 'Shoes', price: 24, img: "https://static.vecteezy.com/system/resources/thumbnails/000/553/397/small/feet_002.jpg", quantity: 10, description: "A nice shoe" })
  ]

  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
