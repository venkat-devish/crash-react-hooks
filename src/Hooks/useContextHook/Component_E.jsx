import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../../App";

const Component_E = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <h4>
        {user} - {channel}
      </h4>
    </div>
  );
};

export default Component_E;
