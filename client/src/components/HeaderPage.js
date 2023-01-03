import React from "react";
import { Menu, MenuItem, Icon } from "semantic-ui-react";

const HeaderPage = () => {
  return (
    <Menu>
      <MenuItem>
        <Icon name="checkmark" /> Spezzoni
      </MenuItem>
      <MenuItem active>Abaco</MenuItem>
    </Menu>
  );
};

export default HeaderPage;
