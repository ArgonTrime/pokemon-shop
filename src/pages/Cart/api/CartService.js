import { pokemonApiConfig as pokemonApi } from "api/config/pokemonApiConfig";

class CartService {
  static instance = new CartService();

  #urlParamForCart = "/cart";

  getItems() {
    return pokemonApi.get(this.#urlParamForCart);
  }

  addItem(item) {
    return pokemonApi.post(`${this.#urlParamForCart}/item`, item);
  }

  updateItem({ id, quantity }) {
    return pokemonApi.patch(`${this.#urlParamForCart}/item`, { id, quantity });
  }

  deleteItem(id) {
    return pokemonApi.delete(`${this.#urlParamForCart}/item/${id}`);
  }
  order({ customerId, totalPrice, itemsList }) {
    return pokemonApi.post("/order", { customerId, totalPrice, itemsList });
  }
  getOrders() {
    return pokemonApi.get("/order");
  }
}
export default CartService.instance;
