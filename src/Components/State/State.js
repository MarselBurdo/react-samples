import React, { useState } from "react";

const square = (counter) => {
  return counter ** 2;
};

export default function StateComponent({ title }) {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const handleIncrement = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 100);
    // await setCounter(counter + 1);
    // await setCounter(counter + 100);
    setCounter((state) => {
      return state + 1;
    });
    setCounter((state) => {
      return state + 100;
    });
  };

  const handleChange = (e) => {
    // console.log(e);
    setText(e.target.value);
  };

  const squareVar = square(counter);

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