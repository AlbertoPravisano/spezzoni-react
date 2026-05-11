import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import NavText from "components/NavText";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SIGNUP } from "routes";
import LoginForm from "./LoginForm";

const LoginButtonForm = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="text" color="inherit" startIcon={<LoginRoundedIcon />} onClick={() => setModalOpen(true)}>
        Login
      </Button>
      {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
    </React.Fragment>
  );
};

export default LoginButtonForm;

const LoginModal = ({ setModalOpen }) => {
  const navigate = useNavigate();
  return (
    <Dialog open onClose={() => setModalOpen(false)} fullWidth maxWidth="xs">
      <DialogTitle>Effettua il login...</DialogTitle>
      <DialogContent>
        <LoginForm />
        <Divider sx={{ my: 3 }}>oppure</Divider>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" component="span">
          Se non hai ancora un account,{" "}
          </Typography>
          <NavText
            onClick={() => {
              setModalOpen(false);
              navigate(SIGNUP);
            }}
          >
            registrati
          </NavText>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
