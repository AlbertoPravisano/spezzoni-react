import React from "react";
import { Input, Button, Grid } from "semantic-ui-react";

const Board = () => {
  return (
    <Grid>
      <Grid.Row centered stretched>
        <Grid.Column>
          <Input placeholder="Digita qui quello che vuoi cercare o proporre..." />
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
