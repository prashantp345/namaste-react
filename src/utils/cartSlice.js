import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=> {
            // vanialla (order Redux => Don't MUTATE State) we used to return newState; But internally its do same for RTK by using (Immer) library
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.splice(state.items.findIndex(function(i){
                return i.card.info.id === action.payload.card.info.id;
            }), 1);
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

