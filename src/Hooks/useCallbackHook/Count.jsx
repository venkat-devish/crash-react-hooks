import React, { memo } from "react";

const Count = ({ text, count }) => {
  console.log(`rendering ${text}, ${count}`);
  return (
    <div>
      {text}-{count}
    </div>
  );
};

export default memo(Count);
