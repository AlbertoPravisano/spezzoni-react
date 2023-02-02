import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderPage from "./components/HeaderPage";
import Abaco from "./views/Abaco";
import Home from "./views/Board";
import Signup from "views/Signup";
import PageNotFound from "./views/PageNotFound";
import FooterPage from "./components/FooterPage";
import { ABACO, HOME, SIGNUP, BASE_PATH } from "./routes";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter basename={BASE_PATH}>
        <HeaderPage />
        <Container>
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={ABACO} element={<Abaco />} />
            <Route path={SIGNUP} element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
        <FooterPage />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
