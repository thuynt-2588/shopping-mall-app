import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
    filterProduct?: string;
}

const initialState: ProductState = {
    filterProduct: "",
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        reset: () => initialState,
        changeFilterProduct(state: ProductState, { payload: productId }) {
            state.filterProduct = productId
        },
    },
});

export const { reset, changeFilterProduct } = productSlice.actions;

export default productSlice.reducer;
