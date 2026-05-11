import React from "react";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import {
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userLoggedIn } from "../../redux/user";
import { HOME } from "routes";

const NAME_USER = "usr";
const NAME_PSW = "psw";

const isFormBenFormata = (usr, psw) =>
  usr && usr.length > 0 && psw && psw.length > 0;

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [salvaCredenziali, setSalvaCredenziali] = React.useState(true);
  const [state, setState] = React.useState({
    usr: "",
    psw: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value || "",
    });
  };

  const handleSubmit = () => {
    const { usr, psw } = state;

    if (isFormBenFormata(usr, psw)) {
      dispatch(userLoggedIn({ email: usr, password: psw }));
      navigate(HOME);
    }
  };

  return (
    <Stack component="form" spacing={2} onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}>
      <TextField
        fullWidth
        autoFocus
        name={NAME_USER}
        value={state.usr}
        label="Username"
        placeholder="username..."
        error={!state.usr || state.usr.length === 0}
        onChange={handleChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <PersonRoundedIcon color="action" />
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        fullWidth
        name={NAME_PSW}
        value={state.psw}
        label="Password"
        type="password"
        error={!state.psw || state.psw.length === 0}
        onChange={handleChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LockRoundedIcon color="action" />
              </InputAdornment>
            ),
          },
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={salvaCredenziali}
            onChange={() => setSalvaCredenziali(!salvaCredenziali)}
          />
        }
        label="Resta connesso"
      />
      <Button variant="contained" type="submit" fullWidth>
        Login
      </Button>
    </Stack>
  );
};

export default LoginForm;
