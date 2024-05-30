// remove the timer action creators imports
// import {
//   INCREMENT_TIMER,
//   PAUSE_TIMER,
//   RESET_TIMER,
//   START_TIMER
// } from "../actions/timerActions";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

// refactor to use the createSlice method
// export const timerReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case START_TIMER:
//       return { ...state, isRunning: true };
//     case PAUSE_TIMER:
//       return { ...state, isRunning: false };

//     case RESET_TIMER:
//       return { isRunning: false, elapsedTime: 0 };
//     case INCREMENT_TIMER:
//       return { ...state, elapsedTime: ++state.elapsedTime };
//     default:
//       return state;
//   }
// };

// export the timer reducer function and action creators here
const timerSlice = createSlice({
  name: "timer",
  initialState: INITIAL_STATE,
  reducers:{
    start_timer: (state)=>{
      state.isRunning = true;
    },
    pause_timer:(state)=>{
      state.isRunning = false;
    },
    increment_timer:(state)=>{
      state.elapsedTime+=1;
    },
    reset_timer:(state)=>{
      state.isRunning = false;
      state.elapsedTime = 0;
    }
  }
});

export const timerReducer = timerSlice.reducer;
export const timerActions = timerSlice.actions;
export const timerSelector = (state) => state.timerReducer;