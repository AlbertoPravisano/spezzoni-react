import React from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userLoggedOut } from "../../redux/user";

import { DASHBOARD, HOME } from "routes";

const LoggedUserButtonDropdown = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <React.Fragment>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownRoundedIcon />}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {user.name}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            navigate(DASHBOARD);
          }}
        >
          <ListItemIcon>
            <PersonRoundedIcon fontSize="small" />
          </ListItemIcon>
          Vai al tuo profilo
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            setModalOpen(true);
          }}
        >
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
          Disconnetti...
        </MenuItem>
      </Menu>
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Conferma logout</DialogTitle>
        <DialogContent>Sei sicuro di volerti disconnettere?</DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)}>Annulla</Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              setModalOpen(false);
              dispatch(userLoggedOut());
              navigate(HOME);
            }}
          >
            Disconnetti
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

LoggedUserButtonDropdown.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default LoggedUserButtonDropdown;
