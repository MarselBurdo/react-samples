import React, { useRef, useState } from "react";

export default function LifeFunc() {
  const [counter, setCounter] = useState(0);
  const sova = useRef(null);

  return (
    <>
      <form>
        <p>{counter}</p>
        <button type="submit" ref={sova}>
          Inc
        </button>
      </form>
      <p>{"tmp"}</p>
      <button type="button">Inc Tmp</button>
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
