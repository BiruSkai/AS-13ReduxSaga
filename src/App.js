import React, { useEffect } from "react";
import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./redux/ducks/User";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);
  const count = useSelector((state) => state.counter.count);

  const voters = [
    { name: "Mario", id: 1 },
    { name: "Luigi", id: 2 },
    { name: "Chun", id: 3 }
  ];

  return (
    <div className="App">
      {user && <h1>Hello, {user[0].username}</h1>}
      <h2>Total votes: {count}</h2>
      {voters.map((voter) => (
        <div key={voter.id}>
          <Counter name={voter.name} />
        </div>
      ))}
    </div>
  );
}
