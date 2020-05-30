import React from "react";
import Products from "./Products";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
};

export default App;
