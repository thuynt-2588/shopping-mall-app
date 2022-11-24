import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "../slices/app/appSlice";
import tabSlice from "../slices/tabs/tabSlice";

const rootReducer = combineReducers({
    app: appSlice,
    tab: tabSlice,
});

export default rootReducer;
