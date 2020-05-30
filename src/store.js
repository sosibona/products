import { createStore } from "redux";
import productReducer from "./product/product.reducer";

const store = createStore(productReducer);

export default store;
