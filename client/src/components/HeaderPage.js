import React from "react";
import { Menu, MenuItem, Icon } from "semantic-ui-react";

const HeaderPage = () => {
  return (
    <Menu>
      <MenuItem>
        <Icon name="checkmark" /> Spezzoni
      </MenuItem>
      <MenuItem onClick={() => {}}>Bacheca</MenuItem>
      <MenuItem active>Abaco</MenuItem>
      <MenuItem position="right" onClick={() => {}}>
        <Icon name="user" /> Login
      </MenuItem>
    </Menu>
  );
};

export default HeaderPage;
