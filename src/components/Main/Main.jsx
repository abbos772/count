import React, { useState } from "react";
import { inc } from "../../context/counter";
import { dec } from "../../context/counter";
import { res } from "../../context/counter";
import { inp } from "../../context/counter";
import { useDispatch } from "react-redux";
function Main() {
  let dispatch = useDispatch();
  let [inputValue, setDecrement] = useState("");
  const decrement = (e) => {
    e.preventDefault();
    const number = parseInt(inputValue);
    if (!isNaN(number)) {
      dispatch(inc(number));
      setDecrement("");
    }
  };
  return (
    <div className="btn">
      <form onSubmit={decrement} action="">
        <input
          onChange={(e) => setDecrement(e.target.value)}
          value={inputValue}
          type="number"
        />
        <button disabled={!inputValue}>ADD</button>
      </form>

      <button onClick={() => dispatch(inc(1))}>Click</button>
      <button onClick={() => dispatch(dec())}>Dec</button>
      <button onClick={() => dispatch(res())}>Res</button>
    </div>
  );
}

export default Main;
