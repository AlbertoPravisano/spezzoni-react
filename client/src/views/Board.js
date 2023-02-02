import React from "react";
import { Input, Button, Grid } from "semantic-ui-react";

const Board = () => {
  const path = process.env.PUBLIC_URL;
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
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered stretched>
        <Grid.Column width="five">
          <Button primary>Cerca</Button>
        </Grid.Column>
        <Grid.Column width="five">
          <Button positive>Offri</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Board;
