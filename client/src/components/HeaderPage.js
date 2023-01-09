import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

import { ABACO, BASE_PATH } from "../routes";
import LoginButtonForm from "./LoginButtonForm";

const HeaderPage = () => {
  return (
    <Menu>
      <Menu.Item>
        <Icon name="checkmark" /> Spezzoni
      </Menu.Item>
      <NavItem name="Bacheca" to={BASE_PATH} />
      <NavItem name="Abaco" to={ABACO} />
      <LoginButtonForm position="right" />
    </Menu>
  );
};

export default HeaderPage;

const NavItem = ({ to, name, icon }) => {
  const [active, setActive] = React.useState(false);
  return (
    <Menu.Item active={active}>
      <NavLink
        to={to}
        style={({ isActive }) => {
          setActive(isActive);
          return {};
        }}
      >
        {icon && <Icon name={icon} />}
        {name}
      </NavLink>
    </Menu.Item>
  );
};
