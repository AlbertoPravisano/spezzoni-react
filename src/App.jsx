import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import HeaderPage from "./components/HeaderPage";
import Abaco from "./views/Abaco";
import Home from "./views/Home";
import Signup from "views/Signup";
import PageNotFound from "./views/PageNotFound";
import FooterPage from "./components/FooterPage";
import { ABACO, HOME, SIGNUP, BASE_PATH, DASHBOARD, ELENCO } from "./routes";
import Dashboard from "views/Dashboard";
import ElencoSpezzoni from "views/ElencoSpezzoni";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f766e",
    },
    secondary: {
      main: "#f59e0b",
    },
    background: {
      default: "#f4f7f5",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
    h2: {
      fontWeight: 700,
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={BASE_PATH}>
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(180deg, rgba(15,118,110,0.08) 0%, rgba(244,247,245,1) 22%, rgba(244,247,245,1) 100%)",
            }}
          >
            <HeaderPage />
            <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
              <Routes>
                <Route path={HOME} element={<Home />} />
                <Route path={ABACO} element={<Abaco />} />
                <Route path={SIGNUP} element={<Signup />} />
                <Route path={DASHBOARD} element={<Dashboard />} />
                <Route path={ELENCO} element={<ElencoSpezzoni />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Container>
            <FooterPage />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
