import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

import { ABACO, HOME } from "../routes";
import LoginButtonForm from "./login/LoginButtonForm";

const HeaderPage = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <Menu>
      <NavItem
        name="Home"
        to={HOME}
        altImg="home"
        img={`${path}/spezzoni/icon.png`}
      />
      <NavItem name="Abaco" to={ABACO} />
      <LoginButtonForm position="right" />
    </Menu>
  );
};

export default HeaderPage;

const NavItem = ({ to, name, icon, img, altImg }) => {
  const [active, setActive] = React.useState(false);
  const navItemStyle = ({ isActive }) => {
    setActive(isActive);
    return {};
  };
  return (
    <Menu.Item active={active}>
      <NavLink to={to} style={navItemStyle}>
        {icon && <Icon name={icon} />}
        {img && (
          <img
            alt={altImg}
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              margin: "-.3em 0",
              width: "2.5em",
            }}
            src={img}
          />
        )}
        {name}
      </NavLink>
    </Menu.Item>
  );
};
