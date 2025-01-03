import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon, Confirm } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userLoggedOut } from "../../redux/user";

import { DASHBOARD, HOME } from "routes";
import * as storage from "common/sessionStorage";

const LoggedUserButtonDropdown = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Dropdown item text={user.name}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => navigate(DASHBOARD)}>
            <Icon name="user" />
            Vai al tuo profilo
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => setModalOpen(true)}>
            <Icon name="log out" />
            Disconnetti...
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Confirm
        open={modalOpen}
        header="Conferma logout"
        content="Sei sicuro di volerti disconnettere?"
        cancelButton="Annulla"
        confirmButton="Disconnetti"
        size="tiny"
        onCancel={() => setModalOpen(false)}
        onConfirm={() => {
          setModalOpen(false);
          dispatch(userLoggedOut());
          storage.deleteItem(storage.STORAGE_KEYS.AUTH);
          navigate(HOME);
        }}
      />
    </React.Fragment>
  );
};

LoggedUserButtonDropdown.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default LoggedUserButtonDropdown;
