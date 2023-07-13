import React from "react";
import { Form, Button } from "semantic-ui-react";

import { isValorizzato } from "common/validations";
import {
  getValuesFromLocalStorage,
  setValueToLocalStorage,
} from "api/localStorage";
import { getUserIdFromCredentials } from "api/user";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "redux/user";
import { useNavigate } from "react-router-dom";
import { HOME } from "routes";

const NAME_USER = "usr";
const NAME_PSW = "psw";
const NAME_SAVE_CREDENTIALS = "saveCredentials";
const KEY_STORAGE_CREDENTIALS = "credentials";

const isFormBenFormata = (usr, psw) =>
  usr && usr.length > 0 && psw && psw.length > 0;

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultCredentials = getValuesFromLocalStorage(
    KEY_STORAGE_CREDENTIALS,
    { usr: "", psw: "" }
  );

  const [state, setState] = React.useState({
    ...defaultCredentials,
    saveCredentials: true,
  });

  const handleChange = (_, data) => {
    const { name, value, checked } = data;
    setState({
      ...state,
      [name]: isValorizzato(checked) ? checked : value || "",
    });
  };

  const handleSubmit = () => {
    const { usr, psw, saveCredentials } = state;

    if (saveCredentials) {
      setValueToLocalStorage(KEY_STORAGE_CREDENTIALS, { usr, psw });
    }

    if (isFormBenFormata(usr, psw)) {
      getUserIdFromCredentials(usr, psw)
        .then((data) => {
          console.log("Login effettuato");
          dispatch(userLoggedIn(data));
          navigate(HOME);
        })
        .catch((error) => {
          console.log(error.message);
        });
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
      <Form.Checkbox
        name={NAME_SAVE_CREDENTIALS}
        checked={state.saveCredentials}
        label="Ricorda le credenziali"
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
