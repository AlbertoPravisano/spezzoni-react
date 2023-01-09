import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

const HeaderPage = () => {
  return (
    <Menu>
      <Menu.Item>
        <Icon name="checkmark" /> Spezzoni
      </Menu.Item>
      <NavItem name="Bacheca" to="/" />
      <NavItem name="Abaco" to="/abaco" />
      <Menu.Item position="right" onClick={() => {}}>
        <Icon name="user" /> Login
      </Menu.Item>
    </Menu>
  );
};

export default HeaderPage;

const NavItem = ({ to, name, icon }) => {
  const [active, setActive] = React.useState(false);
  return (
    <Menu.Item as="a" active={active}>
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
