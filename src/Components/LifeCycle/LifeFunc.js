import React, { useEffect, useState, useRef } from "react";

export default function LifeFunc() {
  const [counter, setCounter] = useState(0);
  const foxes = useRef("cool");
  let users = 1000;

  useEffect(() => {
    console.log("Like a componentDidMount()");
  }, []);

  useEffect(() => {
    console.log("Like a componentDidUpdate()");
    foxes.current = foxes.current + 100;
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("Like a componen23tWillUnmount()");
    };
  }, []);

  useEffect(() => {
    console.log("UseEffect FOXES!!!!!!", { foxes });
  }, [foxes]);

  useEffect(() => {
    console.log("UseEffect users", { users });
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    users += 1000;
  };
  console.log(users);
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
