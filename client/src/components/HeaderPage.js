import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import { HOME } from "../routes";
import LoginButtonForm from "./login/LoginButtonForm";
import LoggedUserButtonDropdown from "./login/LoggedUserButtonDropdown";
import * as storage from "common/sessionStorage";
import { userLoggedIn } from "../redux/user";

const HeaderPage = () => {
  const path = process.env.PUBLIC_URL;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  React.useEffect(() => {
    const auth = storage.getItem(storage.STORAGE_KEYS.AUTH);
    if (auth && !user) {
      const { email, password } = JSON.parse(auth);
      dispatch(userLoggedIn({ email, password }));
    }
  }, [dispatch, user]);

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
      {/* <Menu.Item as={NavLink} to={ABACO}>
        Abaco
      </Menu.Item> */}
      <Menu.Menu position="right">
        {user ? <LoggedUserButtonDropdown user={user} /> : <LoginButtonForm />}
      </Menu.Menu>
    </Menu>
  );
};

export default HeaderPage;
