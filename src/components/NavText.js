import React from "react";

const NavText = ({ style, onClick, children, ...passThroughProps }) => {
  return (
    <span
      style={{ ...style, color: "#4183c4", cursor: "pointer" }}
      onClick={onClick}
      {...passThroughProps}
    >
      {children}
    </span>
  );
};

export default NavText;
