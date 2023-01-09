import React from "react";
import { Menu, Icon, Modal, Button, Form, Message } from "semantic-ui-react";

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
  const [isError, setIsError] = React.useState();
  return (
    <Modal closeIcon open dimmer="blurring" onClose={() => setModalOpen(false)}>
      <Modal.Header>Login</Modal.Header>
      <Modal.Content>
        <Form error={isError} onSubmit={() => setIsError(true)}>
          {isError && (
            <Message
              error
              header="Action Forbidden"
              content="Questa funzione non è ancora stata implementata"
            />
          )}
          <Form.Input
            fluid
            name="usr"
            label="Username"
            placeholder="username..."
            error={isError}
          />
          <Form.Input
            fluid
            name="psw"
            label="Password"
            type="password"
            error={isError}
          />
          <Form.Checkbox
            name="save_credentials"
            label="Ricorda le credenziali"
          />
          <Button primary type="submit" floated="right">
            Invia
          </Button>
          <br />
          <br />
        </Form>
      </Modal.Content>
    </Modal>
  );
};
