import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";
import requstedReducer from "./slices/serviceProviderSlice";

const store = configureStore({
    reducer: {
        [customReducer.name]: customReducer.reducer,
        [userReducer.name]: userReducer.reducer,
        [requstedReducer.name]: requstedReducer.reducer
    },
});

export default store;
