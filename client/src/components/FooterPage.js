import React from "react";
import { Divider } from "semantic-ui-react";

const FooterPage = () => {
  return (
    <div
      style={{
        bottom: 0,
        position: "absolute",
        height: "5em",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Divider /> This site does not use any cookie
    </div>
  );
};

export default FooterPage;
