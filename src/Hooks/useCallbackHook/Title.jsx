import React, { memo } from "react";

const Title = () => {
  console.log("rendering title");
  return (
    <div>
      <h2>Use Callback Hook</h2>
    </div>
  );
};

export default memo(Title);
