import React from "react";
import { Form, Message, Button } from "semantic-ui-react";

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
      <Form.Checkbox
        name="save_credentials"
        defaultChecked={true}
        label="Ricorda le credenziali"
      />
      <br />
      <Button primary type="submit" fluid>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
