import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //increment

        //its okay to do this becuse immer makes it immutable
        incremented(state) {
            state.value++;
        },

        incrementedBy(state, actions: PayloadAction<number>) {
          state.value += actions.payload  
        }
        //decrement


        //reset
    }
});

export const { incremented, incrementedBy } = counterSlice.actions;
export default counterSlice.reducer;
