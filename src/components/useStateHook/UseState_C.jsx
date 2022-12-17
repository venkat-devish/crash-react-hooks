import React, { useState } from "react";

const UseState_C = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div style={{ display: "inline-block" }}>
      <h2>firstName: {name.firstName}</h2>
      <h2>lastname: {name.lastName}</h2>
      <h3>{JSON.stringify(name)}</h3>
      <form>
        <label>First Name</label>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value });
          }}
        />
        <label>Last Name</label>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value });
          }}
        />
      </form>
    </div>
  );
};

export default UseState_C;
