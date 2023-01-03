import React from "react";
import { Container, Header, Loader, Segment, Dimmer } from "semantic-ui-react";
import { read, utils } from "xlsx";

const App = () => {
  const [dataLoaded, setDataLoaded] = React.useState();

  React.useEffect(() => {
    fetch("./source.xlsx")
      .then((data) => {
        console.log(data);
        const workbook = read(data);
        setDataLoaded(workbook);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <br />
      <br />
      <Header>Spezzoni</Header>
      {!dataLoaded && (
        <Segment basic>
          <p />
          <Dimmer active inverted>
            <Loader state="active">Caricamento in corso...</Loader>
          </Dimmer>
        </Segment>
      )}
      {dataLoaded && dataLoaded.SheetNames[0]}
    </Container>
  );
};

export default App;
