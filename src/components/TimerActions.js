import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  pauseTimer,
  resetTimer,
  startTimer,
  timerSelector
} from "../redux/reducers/timerReducer";
import { alertSelector, resetAlert } from "../redux/reducers/alertReducer";

export const TimerActions = () => {
  const dispatch = useDispatch();
  const { isRunning } = useSelector(timerSelector);
  const { message } = useSelector(alertSelector);

  useEffect(() => {
    let timeoutId;
    if (message) {
      timeoutId = setTimeout(() => {
        dispatch(resetAlert());
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [message, dispatch]);

  return (
    <div className="actions">
      {message && <div className="alert">{message}</div>}
      <button disabled={isRunning} onClick={() => dispatch(startTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      <button disabled={!isRunning} onClick={() => dispatch(pauseTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      <button onClick={() => dispatch(resetTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};