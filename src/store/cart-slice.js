import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    items: [],
    changed: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            console.log(action.payload.items);
            state.items = action.payload.items;
        },
        addItem(state, { payload }) {
            const itemIndex = state.items.findIndex(item => item.id === payload.id);

            state.changed = true;

            if (itemIndex !== -1) {
                state.items[itemIndex].quantity++;
                state.items[itemIndex].total += payload.price;
                return;
            }

            state.items.push({
                id: payload.id,
                total: payload.price,
                quantity: 1,
                info: {
                    title: payload.title,
                    price: payload.price,
                }
            });
        },
        incrementQuantity(state, action) {
            state.changed = true;
            state.items.map(item => {
                if (item.id === action.payload) {
                    item.quantity++
                    item.total = item.total + item.info.price;
                }
            })
        },
        decrementQuantity(state, action) {
            const { items } = state;
            state.changed = true;
            const itemIndex = items.findIndex((item) => {
                return item.id === action.payload;
            });

            if (items[itemIndex].quantity > 1) {
                items[itemIndex].quantity--
                items[itemIndex].total -= items[itemIndex].info.price;
                return;
            }

            const newItems = items.filter(item => item.id !== action.payload);
            state.items = [...newItems];

            if (state.items.length) {
                state.changed = false;
            }
        }
    }
})



export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
