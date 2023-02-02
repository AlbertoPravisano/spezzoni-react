import NavText from "components/NavText";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME } from "routes";
import { Form, Checkbox, Button } from "semantic-ui-react";
import { getDataMinimaMaggiorenne, isOverEighteen } from "utils/dates";

const regex = new RegExp(
  "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
);

const RegisterForm = () => {
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({});
  const [isError, setIsError] = React.useState(false);
  const options = [
    { key: "m", text: "Uomo", value: "male" },
    { key: "f", text: "Donna", value: "female" },
    { key: "o", text: "Altro", value: "other" },
  ];

  React.useEffect(() => {
    if (fields.psw !== fields.psw2) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [fields]);

  return (
    <Form error={isError} onSubmit={() => setIsError(true)}>
      <Form.Group widths="equal">
        <Form.Input
          autoFocus
          icon="user"
          iconPosition="left"
          label="Nome"
          placeholder="nome..."
          error={isError}
          onBlur={(e) => setFields({ ...fields, name: e.target.value })}
        />
        <Form.Input
          name="surname"
          icon="user"
          iconPosition="left"
          label="Cognome"
          placeholder="cognome..."
          error={isError}
          onBlur={(e) => setFields({ ...fields, surname: e.target.value })}
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
          error={isError || (fields.phone && !regex.test(fields.phone))}
          onBlur={(e) =>
            setFields({
              ...fields,
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
            isError || (fields.birthday && !isOverEighteen(fields.birthday))
          }
          max={getDataMinimaMaggiorenne()}
          onBlur={(e) => setFields({ ...fields, birthday: e.target.value })}
        />
        <Form.Select fluid name="sex" label="Sesso" options={options} />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          icon="user"
          iconPosition="left"
          label="Username"
          placeholder="username..."
          error={isError}
          onBlur={(e) => setFields({ ...fields, usr: e.target.value })}
        />
        <Form.Input
          icon="lock"
          iconPosition="left"
          label="Password"
          type="password"
          error={isError}
          onBlur={(e) => setFields({ ...fields, psw: e.target.value })}
        />
        <Form.Input
          icon="lock"
          iconPosition="left"
          label="Conferma password"
          type="password"
          error={isError}
          onBlur={(e) => setFields({ ...fields, psw2: e.target.value })}
        />
      </Form.Group>
      <Form.Field
        control={Checkbox}
        label={
          <label>
            Accetto i{" "}
            <NavText onClick={() => {}}>termini e le condizioni</NavText>
          </label>
        }
      />
      <Button positive onClick={() => navigate(HOME)}>
        Registrati
      </Button>
    </Form>
  );
};

export default RegisterForm;
