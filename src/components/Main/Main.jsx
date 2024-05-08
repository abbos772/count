import React, { useState } from "react";
import { inc } from "../../context/counter";
import { dec } from "../../context/counter";
import { res } from "../../context/counter";
import { useDispatch } from "react-redux";
function Main() {
  let dispatch = useDispatch();
  const [num, setCount] = useState("");
  const handleInputChange = (event) => {
    const inputNumber = parseInt(event.target.value);
    if (!isNaN(inputNumber)) {
      setCount(inc);
    }
  };

  return (
    <div className="btn">
      <div>
        <form action="">
          <input onChange={(e) => setCount(e.target.value)} type="number" />
        </form>
      </div>
      <button onClick={() => dispatch(inc())}>Click</button>
      <button onClick={() => dispatch(dec())}>Dec</button>
      <button onClick={() => dispatch(res())}>Res</button>
    </div>
  );
}

export default Main;
