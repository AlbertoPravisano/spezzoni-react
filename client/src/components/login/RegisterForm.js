import NavText from "components/NavText";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME } from "routes";
import { Form, Checkbox, Button } from "semantic-ui-react";
import { getDataMinimaMaggiorenne, isOverEighteen } from "common/dates";
import { isStringaValorizzata, isValorizzato } from "common/validations";
import { createUser } from "api/user";

const regex = new RegExp(
  "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
);

const isFormBenFormata = (
  name,
  surname,
  phone,
  birthday,
  city,
  email,
  psw,
  psw2
) =>
  isStringaValorizzata(name) &&
  isStringaValorizzata(surname) &&
  isStringaValorizzata(phone) &&
  isStringaValorizzata(birthday) &&
  isStringaValorizzata(city) &&
  isStringaValorizzata(email) &&
  isStringaValorizzata(psw) &&
  psw === psw2;

const RegisterForm = () => {
  const navigate = useNavigate();
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
  };

  const handleSubmit = () => {
    const { name, surname, phone, birthday, city, email, psw, psw2 } = state;

    if (
      isFormBenFormata(name, surname, phone, birthday, city, email, psw, psw2)
    ) {
      createUser({ name, surname, phone, birthday, city, email, password: psw })
        .then((data) => {
          console.log(data);
          navigate(HOME);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          autoFocus
          name="name"
          icon="user"
          iconPosition="left"
          label="Nome"
          placeholder="nome..."
          onChange={handleChange}
        />
        <Form.Input
          name="surname"
          icon="user"
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
          error={isStringaValorizzata(state.phone) && !regex.test(state.phone)}
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
            isStringaValorizzata(state.birthday) &&
            !isOverEighteen(state.birthday)
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
          label="Email"
          placeholder="xxxx@xxx.xx"
          onChange={handleChange}
        />
        <Form.Input
          icon="lock"
          name="psw"
          iconPosition="left"
          label="Password"
          type="password"
          onChange={handleChange}
        />
        <Form.Input
          name="psw2"
          icon="lock"
          iconPosition="left"
          label="Conferma password"
          type="password"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Field
        name="conditions"
        required
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
