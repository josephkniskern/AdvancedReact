import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  const [count, setState] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times!`);

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <div>
        {name} has clicked {count} times!
      </div>
      <button
        onClick={() => {
          setState(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setState(count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default Counter;
