import React, { useEffect, useState, useRef, useCallback } from "react";

export default function LifeFunc() {
  const [counter, setCounter] = useState(0);
  const wolf = useRef("cool");
  let users = 1000;

  useEffect(() => {
    console.log("Mounting like componentDidMount");
  }, []);

  useEffect(() => {
    console.log("Update like componentDidUpdate");
    wolf.current = wolf.current + 100;
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("Unmount like componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect WOLF!!!!!!!", wolf);
  }, [wolf]);

  useEffect(() => {
    console.log("users", { users });
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
