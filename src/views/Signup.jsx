import React from "react";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import { Stack, Typography } from "@mui/material";
import RegisterForm from "components/login/RegisterForm";

const Signup = () => {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <PersonAddAlt1RoundedIcon color="primary" />
        <Typography variant="h4">Modulo di registrazione</Typography>
      </Stack>
      <RegisterForm />
    </Stack>
  );
};

export default Signup;
