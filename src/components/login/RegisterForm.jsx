import React from "react";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setState({
      ...state,
      [name]: type === "checkbox" ? checked : isValorizzato(checked) ? checked : value || "",
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
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      <Stack component="form" spacing={2.5} onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
          autoFocus
          name="name"
          error={isInError}
          label="Nome"
          placeholder="nome..."
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
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
          name="surname"
          error={isInError}
          label="Cognome"
          placeholder="cognome..."
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
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
          type="phone"
          name="phone"
          label="Numero di telefono"
          placeholder="+39 333-3333333"
          error={
            isInError ||
            (isStringaValorizzata(state.phone) && !phoneRegex.test(state.phone))
          }
              onChange={handleChange}
          onBlur={(e) =>
            setState({
              ...state,
              phone: e.target.value.replace("-", "").replace(" ", ""),
            })
          }
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneRoundedIcon color="action" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
          type="date"
          name="birthday"
          label="Data di nascita"
              value={state.birthday}
          error={
            isInError ||
            (isStringaValorizzata(state.birthday) &&
              !isOverEighteen(state.birthday))
          }
          max={getDataMinimaMaggiorenne()}
          onChange={handleChange}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
                htmlInput: {
                  max: getDataMinimaMaggiorenne(),
                },
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthRoundedIcon color="action" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
          name="city"
          label="Residenza"
          placeholder="residenza..."
          onChange={handleChange}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageRoundedIcon color="action" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
          name="email"
          error={isInError}
          label="Email"
          placeholder="xxxx@xxx.xx"
          onChange={handleChange}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailRoundedIcon color="action" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
          name="psw"
          error={isInError}
          label="Password"
          type="password"
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
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
          name="psw2"
          error={isInError}
          label="Conferma password"
          type="password"
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
          </Grid>
        </Grid>
        <FormControlLabel
          control={
            <Checkbox
              name="conditions"
              required
              checked={state.conditions}
              onChange={handleChange}
            />
          }
          label={
            <span>
              Accetto i{" "}
              <NavText onClick={() => {}}>termini e le condizioni</NavText>
            </span>
          }
        />
        <Button color="secondary" variant="contained" type="submit" sx={{ alignSelf: "flex-start" }}>
        Registrati
        </Button>
      </Stack>
    </Paper>
  );
};

export default RegisterForm;
