import React from "react";
import { Container } from "semantic-ui-react";
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

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={BASE_PATH}>
        <HeaderPage />
        <Container>
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
      </BrowserRouter>
    </Provider>
  );
};

export default App;
