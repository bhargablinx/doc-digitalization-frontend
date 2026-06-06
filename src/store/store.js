import { configureStore } from "@reduxjs/toolkit";
import documentSlice from "../features/documentSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        document: documentSlice,
    },
});
