import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Checkbox, Button } from "semantic-ui-react";

import { HOME } from "routes";
import NavText from "components/NavText";
import { getDataMinimaMaggiorenne, isOverEighteen } from "common/dates";
import { isStringaValorizzata, isValorizzato } from "common/validations";
import { userRegistered } from "../../redux/user";

const phoneRegex = new RegExp(
  "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
);

const isFormBenFormata = (state) => {
  const { name, surname, phone, city, email, psw, psw2, conditions } = state;
  return (
    isStringaValorizzata(name) &&
    isStringaValorizzata(surname) &&
    isStringaValorizzata(phone) &&
    isStringaValorizzata(city) &&
    isStringaValorizzata(email) &&
    isStringaValorizzata(psw) &&
    psw === psw2 &&
    psw.length >= 6 &&
    conditions === true
  );
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isInError, setIsInError] = React.useState(false);
  const [state, setState] = React.useState({
    name: "",
    surname: "",
    phone: "",
    birthday: "",
    city: "",
    email: "",
    psw: "",
    psw2: "",
    conditions: false,
  });

  const handleChange = (_, data) => {
    const { name, value, checked } = data;
    setState({
      ...state,
      [name]: isValorizzato(checked) ? checked : value || "",
    });
    isInError && setIsInError(false);
  };

  const handleSubmit = () => {
    if (isFormBenFormata(state)) {
      dispatch(userRegistered(state));
      navigate(HOME);
    } else {
      setIsInError(true);
    }
  };

  return (
    <Form error={isInError} onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          autoFocus
          name="name"
          icon="user"
          error={isInError}
          iconPosition="left"
          label="Nome"
          placeholder="nome..."
          onChange={handleChange}
        />
        <Form.Input
          name="surname"
          icon="user"
          error={isInError}
          iconPosition="left"
          label="Cognome"
          placeholder="cognome..."
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          type="phone"
          name="phone"
          icon="phone"
          iconPosition="left"
          label="Numero di telefono"
          placeholder="+39 333-3333333"
          error={
            isInError ||
            (isStringaValorizzata(state.phone) && !phoneRegex.test(state.phone))
          }
          onBlur={(e) =>
            setState({
              ...state,
              phone: e.target.value.replace("-", "").replace(" ", ""),
            })
          }
        />
        <Form.Input
          type="date"
          name="birthday"
          icon="birthday"
          iconPosition="left"
          label="Data di nascita"
          error={
            isInError ||
            (isStringaValorizzata(state.birthday) &&
              !isOverEighteen(state.birthday))
          }
          max={getDataMinimaMaggiorenne()}
          onChange={handleChange}
        />
        <Form.Input
          name="city"
          icon="world"
          iconPosition="left"
          label="Residenza"
          placeholder="residenza..."
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          icon="at"
          name="email"
          iconPosition="left"
          error={isInError}
          label="Email"
          placeholder="xxxx@xxx.xx"
          onChange={handleChange}
        />
        <Form.Input
          icon="lock"
          name="psw"
          iconPosition="left"
          error={isInError}
          label="Password"
          type="password"
          onChange={handleChange}
        />
        <Form.Input
          name="psw2"
          icon="lock"
          iconPosition="left"
          error={isInError}
          label="Conferma password"
          type="password"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Field
        name="conditions"
        required
        error={isInError}
        control={Checkbox}
        onChange={handleChange}
        label={
          <label>
            Accetto i{" "}
            <NavText onClick={() => {}}>termini e le condizioni</NavText>
          </label>
        }
      />
      <Button positive type="submit">
        Registrati
      </Button>
    </Form>
  );
};

export default RegisterForm;
