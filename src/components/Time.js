import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// change the timer actions imports
//import { incrementTimer } from "../redux/actions/timerActions";
import { timerActions } from "../redux/reducers/timerReducer";
import { timerSelector } from "../redux/reducers/timerReducer";

export const Time = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  //const { isRunning, elapsedTime } = useSelector((state) => state.timerReducer);
  const {isRunning, elapsedTime} = useSelector(timerSelector);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(timerActions.increment_timer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};
