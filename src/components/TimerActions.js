import { useDispatch, useSelector } from "react-redux";
// change the timer actions imports
// import {
//   pauseTimer,
//   resetTimer,
//   startTimer
// } from "../redux/actions/timerActions";
import { timerActions } from "../redux/reducers/timerReducer";
import { timerSelector } from "../redux/reducers/timerReducer";

export const TimerActions = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  //const { isRunning } = useSelector((state) => state.timerReducer);
  const {isRunning} = useSelector(timerSelector);
  return (
    <div className="actions">
      <button disabled={isRunning} onClick={() => dispatch(timerActions.start_timer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      <button disabled={!isRunning} onClick={() => dispatch(timerActions.pause_timer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      <button onClick={() => dispatch(timerActions.reset_timer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
