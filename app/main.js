// import ValuesController from "./Controllers/ValuesController.js";\
import itemCardController from "./Controllers/ItemCardController.js"
import cartController from "./Controllers/CartController.js"

class App {
  // valuesController = new ValuesController();

  itemCardController = new itemCardController();

  cartController = new cartController();
}

window["app"] = new App();
