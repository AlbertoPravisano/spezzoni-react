import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { HOME } from "../routes";
import LoginButtonForm from "./login/LoginButtonForm";
import LoggedUserButtonDropdown from "./login/LoggedUserButtonDropdown";
import { userSessionRestored } from "../redux/user";

const HeaderPage = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  React.useEffect(() => {
    if (!user) {
      dispatch(userSessionRestored());
    }
  }, [dispatch, user]);

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          mx: { xs: 1, md: 3 },
          mt: 2,
          borderRadius: 4,
          bgcolor: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(15, 118, 110, 0.12)",
          justifyContent: "space-between",
        }}
      >
        <Button
          component={NavLink}
          to={HOME}
          color="inherit"
          sx={{
            gap: 1.5,
            px: 1,
            color: "text.primary",
            fontWeight: 700,
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          <Box
            component="img"
            alt="home"
            src={`${baseUrl}spezzoni/icon.png`}
            sx={{ width: 40, height: 40 }}
          />
          Home
        </Button>
        <Box>{user ? <LoggedUserButtonDropdown user={user} /> : <LoginButtonForm />}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPage;
