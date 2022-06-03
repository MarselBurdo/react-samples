import React, { useEffect, useRef, useState } from "react";

export default function LifeFunc() {
  const [counter, setCounter] = useState(0);
  const sova = useRef(null);
  let tmp = 100;

  useEffect(() => {
    console.log("Mounting");
  }, []);

  useEffect(() => {
    console.log("Update");
    sova.current = sova.current + 25;
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("SOVA in UseEffect", { sova });
  }, [sova]);

  const handleChange = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  const handleHumans = () => {
    console.log({ tmp });
    tmp += 100;
  };

  console.log("render()", { sova });

  return (
    <div>
      <form
        style={{
          marginBottom: "20px",
          border: "1px dashed red",
          padding: "25px",
        }}
        onSubmit={handleChange}
      >
        <p>{counter}</p>
        <button type="submit">Inc</button>
      </form>

      <p>{tmp}</p>
      <button type="button" onClick={handleHumans}>
        Inc Tmp
      </button>
    </div>
  );
}

// возможный способ использования размонтироваиня компонента
//   useEffect(() => {
//       const controller = new AbortController()
//       fetch('url',{body:JSON.stringify({signal:controller.signal})})
//     return () => {
//       console.log("Unmount");
//       controller.abort()
//     };
//   }, []);
