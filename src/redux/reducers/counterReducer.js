// remove the counter action creators imports
// import {
//   DECREMENT_COUNTER,
//   INCREMENT_COUNTER,
//   RESET_COUNTER
// } from "../actions/counterActions";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { count: 0 };

// refactor to use the createSlice method
// export const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { count: ++state.count };
//     case DECREMENT_COUNTER:
//       return { count: --state.count };

//     case RESET_COUNTER:
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// export the counter reducer function and action creators here
const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state)=>{
      state.count += 1;
    },
    decrement: (state)=>{
      state.count -= 1;
    },
    reset: (state)=>{
      state.count = 0;
    }
  }
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;