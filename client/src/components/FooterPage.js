import React from "react";
import { Divider, Grid } from "semantic-ui-react";

const FooterPage = () => {
  return (
    <div
      style={{
        bottom: 0,
        position: "absolute",
        // height: "5em",
        width: "100%",
        paddingRight: "2em",
        paddingLeft: "2em",
        paddingBottom: "0.5em",
        marginBottom: "1em",
      }}
    >
      <Divider />
      <Grid>
        <Grid.Column
          width="6"
          textAlign="justified"
          style={{ paddingBottom: 0 }}
        >
          <div>
            <strong>Quando trovarci</strong>
          </div>
          <div>Cellulare: 340-2934089</div>
          <div>
            <strong>Orari</strong>
          </div>
          <div>Lunedì-Venerdì: 17.00 - 19.00</div>
          <div>Sabato: 10.00 - 12.00</div>
        </Grid.Column>
        <Grid.Column width="2" style={{ paddingBottom: 0 }}></Grid.Column>
        <Grid.Column width="8" style={{ paddingBottom: 0 }}>
          This site does not use any cookie
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default FooterPage;
