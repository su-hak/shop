import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        insertItem(state, action) {
            let num = state.findIndex((obj) => {
                return obj.id === action.payload.id;
            });
            if (num === -1) {
                state.push(action.payload);
            } else {
                state[num].count += action.payload.count;
            }
        },
        updateItemCount(state, action) {
            let num = state.findIndex((obj) => obj.id === action.payload.id);
            if (num !== -1) {
                if (action.payload.count > 0) {
                    state[num].count = action.payload.count;
                } else {
                    state.splice(num, 1);
                }
            }
        }
    },
});

export let { insertItem, updateItemCount } = cart.actions;
export default cart;
