import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AppState {
    redirectToScreen?: string;
}

const initialState: AppState = {
    redirectToScreen: undefined,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        reset: () => initialState,
        setState: (state: AppState, action: PayloadAction<any>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { reset, setState } = appSlice.actions;

export default appSlice.reducer;
