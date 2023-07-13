import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "redux/user";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, HOME } from "routes";

const LoggedUserButtonDropdown = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Dropdown item text={user.name}>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate(DASHBOARD)}>
          <Icon name="user" />
          Vai al tuo profilo
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => {
            dispatch(userLoggedOut());
            navigate(HOME);
          }}
        >
          <Icon name="log out" />
          Disconnetti...
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

LoggedUserButtonDropdown.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    surname: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default LoggedUserButtonDropdown;
