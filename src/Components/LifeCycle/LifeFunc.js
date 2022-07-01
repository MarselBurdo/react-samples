import React, { useEffect, useState, useRef, useCallback } from "react";

export default function LifeFunc() {
  const [counter, setCounter] = useState(0);
  const leopards = useRef("cool");
  let users = 1000;

  useEffect(() => {
    console.log("Mounting like componentDidMount");
  }, []);

  useEffect(() => {
    console.log("Updating like componentDidUpdate");
    leopards.current = leopards.current + 100;
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("Unmounting like componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect REF", leopards);
  }, [leopards.current]);

  useEffect(() => {
    console.log("USERS");
  }, [users]);

  console.log("render");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

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
