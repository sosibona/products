import {
  DELETE_PRODUCT,
  ADD_PRODUCT,
  SEARCH_PRODUCT,
  PIN_PRODUCT,
} from "./product.actions";

const initialState = {
  products: [
    {
      id: "1",
      name: "PUMA. FIFA QUALITY PRO BALL",
      description:
        "It is used in ball games, where the play of the game follows the stateof the ball as it is hit, kicked or thrown by players.",
      image: "https://i.ibb.co/F7c8gZc/ball.png",
      price: 150,
    },
    {
      id: "2",
      name: "DRYFT ELECTRIC BICYCLE",
      description:
        "An energetic blue and orange mountain bike, Dryft is meant to take you to those places where no other vehicle can. This robust e-Bike is as much an adventure junkie as you. It is the ideal companion to the thrill seeker in you. Wherever you decide to ride, your Dryft always has your back.",
      image: "https://i.ibb.co/hYwd8MC/bicycle.png",
      price: 5000,
    },
    {
      id: "3",
      name: "Samsung smart tv",
      description:
        "Smart TVs are internet-connected televisions. Though there many smart TV brands, models, and operating systems, almost all smart TVs have apps that let you watch TV shows and movies from streaming services like Netflix, Hulu, and HBO.",
      image: "https://i.ibb.co/CMX08T8/smart-tv.png",
      price: 2000,
    },
    {
      id: "4",
      name: "iPhone 11",
      description:
        "A new dual‑camera system captures more of what you see and love. The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less. And the highest‑quality video in a smartphone, so your memories look better than ever.",
      image: "https://i.ibb.co/2Fndm7L/iphone.png",
      price: 700,
    },
    {
      id: "6",
      name: "T-shirt",
      description:
        "stripe collar and sleeve sport golf polo t shirt custom 3d printed t-shirt for men wholesale men rugby polo shirt men polo",
      image: "https://i.ibb.co/fCYvcNd/t-shirt.png",
      price: 50,
    },
    {
      id: "7",
      name: "watch",
      description:
        "Openworked dial. Automatic movement. Blue alligator leather strap. Swiss made. Watch comes in the original packaging, with a set of documents and 2 years warranty. At Watches of Mayfair we offer new authentic watches at the best prices.",
      image: "https://i.ibb.co/xDfmSKt/watch.png",
      price: 100,
    },
  ],
  searchText: "",
  pinProduct: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT: {
      const updateProductList = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        products: updateProductList,
      };
    }
    case ADD_PRODUCT: {
      const updateProductList = state.products.concat(
        action.payload.productData
      );
      return {
        ...state,
        products: updateProductList,
      };
    }
    case SEARCH_PRODUCT: {
      return {
        ...state,
        searchText: action.payload.text,
      };
    }
    case PIN_PRODUCT: {
      if (!state.pinProduct) {
        return {
          ...state,
          pinProduct: action.payload.id,
        };
      } else {
        return {
          ...state,
          pinProduct: "",
        };
      }
      // console.log(action.payload.id);
      // return {
      //   ...state,
      //   pinProduct: action.payload.id,
      // };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
