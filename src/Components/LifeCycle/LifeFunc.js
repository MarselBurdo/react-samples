import React, { useState } from "react";

export default function LifeFunc() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <form
        style={{
          marginBottom: "20px",
          border: "1px dashed red",
          padding: "25px",
        }}
      >
        <p>{counter}</p>
        <button type="submit">Inc</button>
      </form>

      <p>{"tmp"}</p>
      <button type="button">Inc Tmp</button>
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
