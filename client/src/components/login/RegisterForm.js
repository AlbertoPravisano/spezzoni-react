import NavText from "components/NavText";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME } from "routes";
import { Form, Checkbox, Button } from "semantic-ui-react";

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
