import { useSelector } from "react-redux";
import { counterSelector } from "../redux/reducers/counterReducer";
export const Count = () => {
  // change as per the store implementation
  //const { count } = useSelector((state) => state.counterReducer);
  const {count} = useSelector(counterSelector);

  return <b>{count}</b>;
};
