import React from "react";
import { Container } from "semantic-ui-react";
import HeaderPage from "./components/HeaderPage";
import Abaco from "./views/Abaco";

const App = () => {
  return (
    <React.Fragment>
      <HeaderPage />
      <Container>
        <Abaco />
      </Container>
    </React.Fragment>
  );
};

export default App;
