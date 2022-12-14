import { createSlice } from "@reduxjs/toolkit";

export interface TabState {
    currentTab?: string | number;
}

const initialState: TabState = {
    currentTab: 1,
};

export const tabSlice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        reset: () => initialState,
        changeSelectedTab(state: TabState, { payload: tabId }) {
            state.currentTab = tabId
        },
    },
});

export const { reset, changeSelectedTab } = tabSlice.actions;

export default tabSlice.reducer;
