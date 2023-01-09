import React from "react";
import {
  Menu,
  Icon,
  Modal,
  Button,
  Form,
  Message,
  Divider,
  Checkbox,
} from "semantic-ui-react";

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
        <SubscribeForm />
        <br />
        <Button positive fluid onClick={() => {}}>
          Registrati
        </Button>
        <br />
      </Modal.Content>
    </Modal>
  );
};

const LoginForm = () => {
  const [isError, setIsError] = React.useState(false);
  return (
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
        icon="user"
        iconPosition="left"
        label="Username"
        placeholder="username..."
        error={isError}
      />
      <Form.Input
        fluid
        name="psw"
        icon="lock"
        iconPosition="left"
        label="Password"
        type="password"
        error={isError}
      />
      <Form.Checkbox name="save_credentials" label="Ricorda le credenziali" />
      <br />
      <Button primary type="submit" fluid>
        Login
      </Button>
    </Form>
  );
};

const SubscribeForm = () => {
  // const [fields, setFields] = React.useState({});
  const [isError, setIsError] = React.useState(false);
  const options = [
    { key: "m", text: "Uomo", value: "male" },
    { key: "f", text: "Donna", value: "female" },
    { key: "o", text: "Altro", value: "other" },
  ];
  return (
    <Form error={isError} onSubmit={() => setIsError(true)}>
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          icon="user"
          iconPosition="left"
          label="Nome"
          placeholder="nome..."
          error={isError}
        />
        <Form.Input
          name="surname"
          icon="user"
          iconPosition="left"
          label="Cognome"
          placeholder="cognome..."
          error={isError}
        />
        <Form.Select
          fluid
          name="sex"
          iconPosition="left"
          label="Sesso"
          options={options}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="usr"
          icon="user"
          iconPosition="left"
          label="Username"
          placeholder="username..."
          error={isError}
        />
        <Form.Input
          name="psw"
          icon="lock"
          iconPosition="left"
          label="Password"
          type="password"
          error={isError}
        />
        <Form.Input
          name="psw2"
          icon="lock"
          iconPosition="left"
          label="Conferma password"
          type="password"
          error={isError}
        />
      </Form.Group>
      <Form.Field
        control={Checkbox}
        label={
          <label>
            Accetto i <a href="/">termini e le condizioni</a>
          </label>
        }
      />
    </Form>
  );
};
