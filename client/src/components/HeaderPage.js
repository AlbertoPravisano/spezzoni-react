import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

import { ABACO, HOME } from "../routes";
import LoginButtonForm from "./login/LoginButtonForm";

const HeaderPage = () => {
  const path = process.env.PUBLIC_URL;
  const image = "/spezzoni/icon.png";
  return (
    <Menu>
      <Menu.Item>
        <img alt="home" src={path + image} /> Home
      </Menu.Item>
      <NavItem name="Bacheca" to={HOME} />
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
