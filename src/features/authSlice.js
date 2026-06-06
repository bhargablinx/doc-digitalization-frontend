import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    userData: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        storeLogin: (state, action) => {
            ((state.isLogin = true), (state.userData = action.payload));
        },
        storeLogout: (state, action) => {
            ((state.isLogin = false), (state.userData = null));
        },
    },
});

export const { storeLogin, storeLogout } = authSlice.actions;

export default authSlice.reducer;
