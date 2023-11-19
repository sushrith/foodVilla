import { configureStore } from "@reduxjs/toolkit"
//by default it will export reducers which will be put inside store.
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
        cart: cartSlice,
    }
});

export default store;