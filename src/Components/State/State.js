import React, { useMemo, useState } from "react";

const square = (counter) => {
  console.log(counter);
  return counter ** 2;
};

export default function StateComponent({ title }) {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 100);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const squareVar = useMemo(() => square(counter), [counter]);

  return (
    <span>
      <input type={"text"} name="currentText" onChange={handleChange} />

      <div>
        <div>
          {counter}
          <button
            type="button"
            onClick={handleIncrement}
            style={{
              marginLeft: "50px",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            Increment
          </button>
        </div>
      </div>
      <div>
        {squareVar} {text}
      </div>
    </span>
  );
}
