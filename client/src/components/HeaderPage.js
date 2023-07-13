import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import { ABACO, HOME } from "../routes";
import LoginButtonForm from "./login/LoginButtonForm";
import LoggedUserButtonDropdown from "./LoggedUserButtonDropdown";

const HeaderPage = ({ user }) => {
  console.log(user);
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
      <Menu.Menu position="right">
        {user ? <LoggedUserButtonDropdown user={user} /> : <LoginButtonForm />}
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(HeaderPage);

const NavItem = ({ to, name, icon, img, altImg }) => {
  return (
    <Menu.Item>
      <NavLink to={to}>
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
