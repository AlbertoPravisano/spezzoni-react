import React from "react";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import {
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserSpezzoni } from "../redux/spezzoni";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, spezzoni } = useSelector((state) => ({
    user: state.user.data,
    spezzoni: state.spezzoni.data,
  }));

  React.useEffect(() => {
    dispatch(getUserSpezzoni(user.id));
  }, [dispatch, user.id]);

  return (
    <Stack spacing={3}>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <PersonRoundedIcon color="primary" />
        <Typography variant="h4">Profilo di {user.name}</Typography>
      </Stack>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Nome"
              value={user.name}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Cognome"
              value={user.surname}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Città"
              value={user.city}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Telefono"
              value={user.phone}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Email"
              value={user.email}
              InputProps={{ readOnly: true }}
            />
          </Grid>
        </Grid>
      </Paper>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Inventory2RoundedIcon color="primary" />
        <Typography variant="h4">Spezzoni</Typography>
      </Stack>
      <Paper sx={{ p: 3 }}>
        {spezzoni.length > 0 ? (
          <Stack divider={<Divider flexItem />} spacing={2}>
            {spezzoni.map((spezzone) => (
              <Stack
                key={spezzone.id}
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
              >
                <Typography>
                  {spezzone.name} x({spezzone.quantity})
                </Typography>
                <Chip
                  label={spezzone.available ? "Disponibile" : "Non disponibile"}
                  color={spezzone.available ? "success" : "error"}
                  size="small"
                />
              </Stack>
            ))}
          </Stack>
        ) : (
          <Typography color="text.secondary">
            Nessun spezzone nell'elenco
          </Typography>
        )}
      </Paper>
    </Stack>
  );
};

export default Dashboard;
