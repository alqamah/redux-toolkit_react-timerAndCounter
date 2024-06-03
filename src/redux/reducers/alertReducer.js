import {createSlice} from '@reduxjs/toolkit'
const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below
const alertSlice = createSlice({
  name: 'alert',
  initialState : INITIAL_STATE,
  reducers:{
    reset:(state)=>{
      state.message="";
    }
  },
  extraReducers:{
    "timer/startTimer":(state)=>{
      state.message = "Timer started";
    },
    "timer/pauseTimer":(state)=>{
      state.message = "Timer Paused";
    },
    "timer/resetTimer":(state)=>{
      state.message = "Timer Reset to 0";
    },

    "counter/incrementCounter":(state)=>{
      state.message = "Counter Incremented";
    },
    "counter/decrementCounter":(state)=>{
      state.message = "Counter Decremented";
    },
    "counter/resetCounter":(state)=>{
      state.message = "Counter Reset";
    }
  }
});
// export the alert reducer function here

// create and export alert selector function here
export const alertReducer = alertSlice.reducer;
export const resetAlert = alertSlice.actions.reset;
export const alertSelector = (state)=> state.alertReducer;