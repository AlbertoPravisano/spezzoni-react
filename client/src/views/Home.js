import React from "react";
import { Input, Button, Grid } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import OffriSpezzone from "components/button/OffriSpezzone";
import { ELENCO } from "routes";

const Home = () => {
  const path = process.env.PUBLIC_URL;
  const navigate = useNavigate();
  const [filterString, setFilterString] = React.useState("");
  return (
    <Grid>
      <Grid.Row />
      <Grid.Row />
      <Grid.Row />
      <Grid.Row centered>
        <div>
          <img alt="logo" src={`${path}/spezzoni/logo.png`} />
        </div>
        <div>
          <img
            alt="logo"
            src={`${path}/spezzoni/subtitle.png`}
            style={{ width: "40%" }}
          />
        </div>
      </Grid.Row>
      <Grid.Row />
      <Grid.Row centered stretched>
        <Grid.Column>
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Digita qui quello che vuoi cercare o offrire..."
            onChange={(e) => setFilterString(e.target.value)}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered stretched>
        <Grid.Column width="five">
          <Button
            primary
            onClick={() =>
              navigate(`${ELENCO}?s=${encodeURIComponent(filterString)}`)
            }
          >
            Cerca
          </Button>
        </Grid.Column>
        <Grid.Column width="five">
          <OffriSpezzone />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;
