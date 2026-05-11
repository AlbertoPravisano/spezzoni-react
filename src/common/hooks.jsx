import { Fragment } from "react";
import { Backdrop, CircularProgress, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const useLoading = () => {
  const loading = useSelector(
    (state) => state.user.loading || state.spezzoni.loading
  );
  const renderLoader = (props) => (
    <Fragment>
      {loading && (
        <Backdrop
          open
          sx={{
            color: props?.inverted ? "#fff" : "primary.main",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: props?.inverted
              ? "rgba(15, 23, 42, 0.42)"
              : "rgba(244, 247, 245, 0.72)",
          }}
        >
          <Stack alignItems="center" spacing={2}>
            <CircularProgress color="inherit" />
            <Typography variant="body2">Caricamento</Typography>
          </Stack>
        </Backdrop>
      )}
    </Fragment>
  );

  return { loading, renderLoader };
};
