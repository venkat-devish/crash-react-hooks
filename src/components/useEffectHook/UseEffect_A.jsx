import React, { useEffect, useState } from "react";

const UseEffect_A = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  console.log("rendered");
  useEffect(() => {
    console.log("Effect ran");
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>{count} times</button>
    </div>
  );
};

export default UseEffect_A;
