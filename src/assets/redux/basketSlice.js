import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {itemsBasket: []},

  reducers: {
    addToBasket: (state, action) => {
        
        state.itemsBasket.push(action.payload);
    },
    
  },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;