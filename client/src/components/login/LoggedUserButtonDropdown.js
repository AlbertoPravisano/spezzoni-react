import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "redux/user";

const LoggedUserButtonDropdown = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <Dropdown item text={user.name}>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Icon name="user" />
          Vai al tuo profilo
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => dispatch(userLoggedOut())}>
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
