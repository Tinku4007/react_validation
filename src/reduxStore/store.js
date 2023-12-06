import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
    reducer: {
        [customReducer.name]: customReducer.reducer,
        [userReducer.name]: userReducer.reducer,
    },
});

export default store;
