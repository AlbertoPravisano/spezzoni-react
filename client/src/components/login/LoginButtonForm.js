import NavText from "components/NavText";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SIGNUP } from "routes";
import { Menu, Icon, Modal, Divider, Segment } from "semantic-ui-react";
import LoginForm from "./LoginForm";

const LoginButtonForm = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Menu.Item onClick={() => setModalOpen(true)}>
        <Icon name="user" /> Login
      </Menu.Item>
      {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
    </React.Fragment>
  );
};

export default LoginButtonForm;

const LoginModal = ({ setModalOpen }) => {
  const navigate = useNavigate();
  return (
    <Modal
      closeIcon
      open
      dimmer="blurring"
      size="tiny"
      onClose={() => setModalOpen(false)}
    >
      <Modal.Header>Effettua il login...</Modal.Header>
      <Modal.Content>
        <LoginForm />
        <br />
        <Divider horizontal>oppure</Divider>
        <Segment basic textAlign="center">
          Se non hai ancora un account,{" "}
          <NavText
            onClick={() => {
              setModalOpen(false);
              navigate(SIGNUP);
            }}
          >
            registrati
          </NavText>
        </Segment>
      </Modal.Content>
    </Modal>
  );
};
