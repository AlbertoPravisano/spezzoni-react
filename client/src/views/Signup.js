import RegisterForm from "components/login/RegisterForm";
import React from "react";
import { Header, Icon } from "semantic-ui-react";

const Signup = () => {
  return (
    <div>
      <Header as="h2">
        <Icon name="signup" />
        <Header.Content>Modulo di registrazione</Header.Content>
      </Header>
      <RegisterForm />
    </div>
  );
};

export default Signup;
