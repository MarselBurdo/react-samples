import React, { useEffect, useState, useRef, useCallback } from "react";

export default function LifeFunc() {
  const [counter, setCounter] = useState(0);
  const bears = useRef(null);
  let users = 100;

  useEffect(() => {
    console.log("Mounting like componentDidMount");
  }, []);

  useEffect(() => {
    console.log("Updating like componentDidUpdate");
    bears.current = bears.current + 25;
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("Unmounting like componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    console.log("Update useRef");
  }, [bears]);

  useEffect(() => {
    console.log("Update users");
  }, [users]);

  console.log("render()", { bears });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setCounter((prev) => prev + 1);
    },
    [counter]
  );

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
          users += 100;
          console.log({ users });
        }}
      >
        Inc Tmp
      </button>
    </div>
  );
}

// возможный способ использования размонтироваиня компонента
// useEffect(() => {
//     const controller = new AbortController()
//     fetch('url',{body:JSON.stringify({signal:controller.signal})})
//   return () => {
//     console.log("Unmount");
//     controller.abort()
//   };
// }, []);
