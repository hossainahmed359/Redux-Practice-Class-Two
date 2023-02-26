import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dynamicIncrement ,dynamicDecrement} from "../redux/dynamicCounter/actionTypes";

const HooksCounter = ({}) => {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(dynamicIncrement({ value: 10 }));
  };

  const decrementHandler = () => {
    dispatch(dynamicDecrement({ value: 25 }));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={incrementHandler}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrementHandler}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HooksCounter;
