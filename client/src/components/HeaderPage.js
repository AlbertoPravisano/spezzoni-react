import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import { connect } from "react-redux";

import { ABACO, HOME } from "../routes";
import LoginButtonForm from "./login/LoginButtonForm";
import LoggedUserButtonDropdown from "./login/LoggedUserButtonDropdown";

const HeaderPage = ({ user }) => {
  const path = process.env.PUBLIC_URL;
  return (
    <Menu>
      <Menu.Item as={NavLink} to={HOME}>
        <Image
          alt="home"
          src={`${path}/spezzoni/icon.png`}
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            margin: "-.3em 0",
            width: "2.5em",
          }}
        />
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} to={ABACO}>
        Abaco
      </Menu.Item>
      <Menu.Menu position="right">
        {user ? <LoggedUserButtonDropdown user={user} /> : <LoginButtonForm />}
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user.data };
};

export default connect(mapStateToProps)(HeaderPage);
