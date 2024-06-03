import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetAlert } from "../redux/reducers/alertReducer";
import {
  counterSelector,
  decrementCounter,
  incrementCounter,
  resetCounter
} from "../redux/reducers/counterReducer";
import { alertSelector } from "../redux/reducers/alertReducer";

export const CounterActions = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(counterSelector);
  const {message} = useSelector(alertSelector);
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
      <button
        disabled={count <= 0}
        onClick={() => dispatch(decrementCounter())}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      <button
        disabled={count >= 10}
        onClick={() => dispatch(incrementCounter())}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      <button onClick={() => dispatch(resetCounter())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
