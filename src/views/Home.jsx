import React from "react";
import { useNavigate } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Box, Button, InputAdornment, Stack, TextField } from "@mui/material";

import { useLoading } from "common/hooks";
import OffriSpezzone from "components/button/OffriSpezzone";
import { ELENCO } from "routes";

const Home = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const [filterString, setFilterString] = React.useState("");
  const { renderLoader } = useLoading();
  return (
    <Stack spacing={4} sx={{ alignItems: "center", py: { xs: 2, md: 6 } }}>
      {renderLoader({ inverted: true })}
      <Box sx={{ textAlign: "center", width: "100%" }}>
        <Box
          component="img"
          alt="logo"
          src={`${baseUrl}spezzoni/logo.png`}
          sx={{ maxWidth: "min(100%, 460px)" }}
        />
        <Box
          component="img"
          alt="subtitle"
          src={`${baseUrl}spezzoni/subtitle.png`}
          sx={{ width: { xs: "80%", md: "40%" }, mt: 1 }}
        />
      </Box>
      <Stack spacing={2} sx={{ width: "100%", maxWidth: 720 }}>
        <TextField
          fullWidth
          placeholder="Digita qui quello che vuoi cercare o offrire..."
          onKeyDown={(e) =>
            e.key === "Enter" &&
            navigate(`${ELENCO}?s=${encodeURIComponent(filterString)}`)
          }
          onChange={(e) => setFilterString(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon color="primary" />
                </InputAdornment>
              ),
            },
          }}
        />
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            fullWidth
            size="large"
            variant="contained"
            onClick={() =>
              navigate(`${ELENCO}?s=${encodeURIComponent(filterString)}`)
            }
          >
            Cerca
          </Button>
          <OffriSpezzone />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
