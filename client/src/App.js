import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderPage from "./components/HeaderPage";
import Abaco from "./views/Abaco";
import Bacheca from "./views/Board";
import PageNotFound from "./views/PageNotFound";
import FooterPage from "./components/FooterPage";
import { ABACO, BASE_PATH } from "./routes";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <HeaderPage />
        <Container>
          <Routes>
            <Route path={BASE_PATH} element={<Bacheca />} />
            <Route path={ABACO} element={<Abaco />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
        <FooterPage />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
