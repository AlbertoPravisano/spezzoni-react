import React from "react";
import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import SocialButton from "./button/SocialButton";

const FooterPage = () => {
  return (
    <Box component="footer" sx={{ pb: 3, px: 2, mt: 6 }}>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 3 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Contatti />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              Contatti
            </Typography>
            <Stack direction="row" spacing={1}>
              <SocialButton soloIcona href="https://www.telegram.me/" />
              <SocialButton soloIcona href="https://www.whatsapp.org/" />
              <SocialButton soloIcona href="https://www.linkedin.com/" />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 8, md: 4 }}>
            <Typography variant="body2" color="text.secondary">
              This site does not use any cookie
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterPage;

const Contatti = () => {
  return (
    <Stack spacing={0.5}>
      <Typography variant="subtitle1" fontWeight={700}>
        Quando trovarci
      </Typography>
      <Typography variant="body2">
        Cellulare: <a href="tel:+393402934089">340-2934089</a>
      </Typography>
      <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 1 }}>
        Orari
      </Typography>
      <Typography variant="body2">Lunedì-Venerdì: 17.00 - 19.00</Typography>
      <Typography variant="body2">Sabato: 10.00 - 12.00</Typography>
    </Stack>
  );
};
