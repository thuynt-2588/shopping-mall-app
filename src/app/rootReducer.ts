import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "../slices/app/appSlice";
import productSlice from "../slices/product/productSlice";
import tabSlice from "../slices/tabs/tabSlice";

const rootReducer = combineReducers({
    app: appSlice,
    tab: tabSlice,
    product: productSlice,
});

export default rootReducer;
