import React from "react";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import { Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import * as spezzoniActions from "../redux/spezzoni";
import { useLoading } from "common/hooks";

const ElencoSpezzoni = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { renderLoader } = useLoading();
  const spezzoni = useSelector((state) => state.spezzoni.data);

  React.useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterString = queryParams.get("s");

    dispatch(spezzoniActions.getSpezzoniByString(filterString));
  }, [dispatch, location.search]);

  return (
    <Stack spacing={3}>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Inventory2RoundedIcon color="primary" />
        <Typography variant="h4">Spezzoni</Typography>
      </Stack>
      {renderLoader({ inverted: true })}
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

export default ElencoSpezzoni;
