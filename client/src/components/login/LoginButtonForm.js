import React from "react";
import { Menu, Icon, Modal, Button, Divider } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginButtonForm = ({ position }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Menu.Item position={position} onClick={() => setModalOpen(true)}>
        <Icon name="user" /> Login
      </Menu.Item>
      {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
    </React.Fragment>
  );
};

export default LoginButtonForm;

const LoginModal = ({ setModalOpen }) => {
  return (
    <Modal closeIcon open dimmer="blurring" onClose={() => setModalOpen(false)}>
      <Modal.Header>Effettua il login...</Modal.Header>
      <Modal.Content>
        <LoginForm />
        <br />
        <Divider horizontal>oppure</Divider>
        <RegisterForm />
        <br />
        <Button positive fluid onClick={() => {}}>
          Registrati
        </Button>
        <br />
      </Modal.Content>
    </Modal>
  );
};
