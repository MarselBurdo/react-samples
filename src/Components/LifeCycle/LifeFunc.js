import React, { useState, useRef, useEffect } from "react";

let users = 1000;

export default function LifeFunc() {
  const [counter, setCounter] = useState(0);
  const wolf = useRef("cool");

  useEffect(() => {
    console.log("useEfffect like a componentDidMount()");
  }, []);

  useEffect(() => {
    console.log("useEfffect like a componentDidUpdate()");
    wolf.current = wolf.current + 100;
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("useEfffect like a componentWillUnmount()");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect WOLF", { wolf });
  }, [wolf.current]);

  useEffect(() => {
    console.log("useEffect USERS", { users });
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  console.log("render()");
  return (
    <div>
      <form
        style={{
          marginBottom: "20px",
          border: "1px dashed red",
          padding: "25px",
        }}
        onSubmit={handleSubmit}
      >
        <p>{counter}</p>
        <button type="submit">Inc</button>
      </form>

      <p>{users}</p>
      <button
        type="button"
        onClick={() => {
          users += 1000;
          console.log("onClick", { users });
        }}
      >
        Inc Tmp
      </button>
    </div>
  );
}
