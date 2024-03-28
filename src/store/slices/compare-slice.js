
import { createSlice } from '@reduxjs/toolkit';

const compareSlice = createSlice({
    name: "compare",
    initialState: {
        compareItems: []
    },
    reducers: {
        addToCompare(state, action) {
            state.compareItems.push(action.payload);

        },
        deleteFromCompare(state, action) {
            state.compareItems = state.compareItems.filter(item => item.id !== action.payload);

        }
    },
});

export const { addToCompare, deleteFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
