import React from "react";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { addProduct } from "../../redux/spezzoni";

const OffriSpezzone = () => {
  const user = useSelector((state) => state.user.data);

  const [open, setOpen] = React.useState(false);
  const [spezzone, setSpezzone] = React.useState({
    name: "",
    quantity: 1,
  });
  const [immagine, setImmagine] = React.useState(undefined);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addProduct({
        name: spezzone.name,
        quantity: Number(spezzone.quantity),
        owner: user.id,
      }),
    );
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSpezzone({
      ...spezzone,
      [name]: value || "",
    });
  };

  return (
    <React.Fragment>
      <Button
        fullWidth
        size="large"
        color="secondary"
        variant="contained"
        disabled={!user}
        onClick={() => setOpen(true)}
      >
        Offri
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Offri uno spezzone</DialogTitle>
        <DialogContent dividers>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
        <ImageSelector immagine={immagine} setImmagine={setImmagine} />
            <Stack spacing={2} sx={{ flex: 1 }}>
              <Typography variant="h6">Dati dello spezzone</Typography>
              <TextField
                autoFocus
                fullWidth
                name="name"
                label="Nome"
                placeholder="nome prodotto..."
                value={spezzone.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                name="quantity"
                label="Quantità"
                placeholder="1"
                type="number"
                value={spezzone.quantity}
                onChange={handleChange}
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
          Annulla
          </Button>
          <Button variant="contained" color="secondary" startIcon={<CheckRoundedIcon />} onClick={handleSubmit}>
            Offri
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default OffriSpezzone;

const ImageSelector = ({ immagine, setImmagine }) => {
  return (
    <Stack spacing={1} sx={{ minWidth: { sm: 220 } }}>
      <input
        type="file"
        id="invisibleupload1"
        accept="image/png, image/jpeg"
        className="file-input-hidden"
        onChange={(e) => setImmagine(e.target.files[0])}
      />
      <Box
        component="label"
        htmlFor="invisibleupload1"
        sx={{ cursor: "pointer" }}
      >
        <Box
          component="img"
        src={
          immagine
            ? URL.createObjectURL(immagine)
            : "https://placehold.co/320x240/e2e8f0/64748b?text=Anteprima"
        }
          alt="Anteprima spezzone"
          sx={{
            width: "100%",
            maxWidth: 240,
            aspectRatio: "4 / 3",
            objectFit: "cover",
            borderRadius: 3,
            border: "1px dashed",
            borderColor: "divider",
          }}
        />
      </Box>
      <Button variant="outlined" startIcon={<AddTaskRoundedIcon />} component="label" htmlFor="invisibleupload1">
        Carica immagine
      </Button>
    </Stack>
  );
};
