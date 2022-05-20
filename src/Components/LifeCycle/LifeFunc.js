import React, { useEffect, useRef, useState } from "react";

export default function LifeFunc() {
  const [counter, setCounter] = useState(0);
  const sova = useRef(null);

  let tmp = 25;
  useEffect(() => {
    console.log("Mounting");
  }, []);

  useEffect(() => {
    console.log("Update");
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("Unmount");
    };
  }, []);

  useEffect(() => {
    console.log(tmp);
  }, [tmp]);

  useEffect(() => {
    console.log(sova);
  });

  const update = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  console.log("render()");

  return (
    <>
      <form onSubmit={update}>
        <p>{counter}</p>
        <button type="submit" ref={sova}>
          Inc
        </button>
      </form>
      <p>{tmp}</p>
      <button
        type="button"
        onClick={() => {
          tmp += 10;
          //   sova.current = sova.current + 1;
          sova.current.style.backgroundColor = "red";
        }}
      >
        Inc
      </button>
    </>
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
