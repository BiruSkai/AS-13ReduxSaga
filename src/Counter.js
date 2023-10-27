import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/Counter";

const Counter = (props) => {
  const { name } = props;
  const [vote, setVote] = React.useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    setVote(vote + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setVote(vote - 1);
  };

  return (
    <div>
      <h4>{name}</h4>
      <p>{`vote: ${vote}`}</p>
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
