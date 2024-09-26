import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";

import { userLoggedIn } from "../../redux/user";
import { HOME } from "routes";

const NAME_USER = "usr";
const NAME_PSW = "psw";

const isFormBenFormata = (usr, psw) =>
  usr && usr.length > 0 && psw && psw.length > 0;

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    usr: "",
    psw: "",
  });

  const handleChange = (_, data) => {
    const { name, value } = data;
    setState({
      ...state,
      [name]: value || "",
    });
  };

  const handleSubmit = () => {
    const { usr, psw } = state;

    if (isFormBenFormata(usr, psw)) {
      console.log("Login effettuato");
      dispatch(userLoggedIn(usr, psw));
      navigate(HOME);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        fluid
        autoFocus
        name={NAME_USER}
        value={state.usr}
        icon="user"
        iconPosition="left"
        label="Username"
        placeholder="username..."
        error={!state.usr || state.usr.length === 0}
        onChange={handleChange}
      />
      <Form.Input
        fluid
        name={NAME_PSW}
        value={state.psw}
        icon="lock"
        iconPosition="left"
        label="Password"
        type="password"
        error={!state.psw || state.psw.length === 0}
        onChange={handleChange}
      />
      <br />
      <Button primary type="submit" fluid>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
