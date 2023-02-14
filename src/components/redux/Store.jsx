import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import MenuReducer from "./GetDataSlice";
import CartReducer from './CartSlice'
const store = configureStore({
  reducer: {
    items: MenuReducer,
    cart:CartReducer
  },
  middleware: [thunk],
});

export default store;
