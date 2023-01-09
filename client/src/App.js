import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderPage from "./components/HeaderPage";
import Abaco from "./views/Abaco";
import Bacheca from "./views/Board";
import PageNotFound from "./views/PageNotFound";
import FooterPage from "./components/FooterPage";
import { ABACO, HOME, BASE_PATH } from "./routes";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter basename={BASE_PATH}>
        <HeaderPage />
        <Container>
          <Routes>
            <Route path={HOME} element={<Bacheca />} />
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
