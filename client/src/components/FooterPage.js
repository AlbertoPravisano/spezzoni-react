import React from "react";
import { Divider, Grid } from "semantic-ui-react";
import SocialButton from "./button/SocialButton";

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
        <Grid.Column width="6" style={{ paddingBottom: 0 }}>
          <Contatti />
        </Grid.Column>
        <Grid.Column width="3" style={{ paddingBottom: 0 }}>
          <div>
            <strong>Contatti</strong>
          </div>
          <div>
            <SocialButton soloIcona href="https://www.telegram.me/" />
            <SocialButton soloIcona href="https://www.whatsapp.org/" />
            <SocialButton soloIcona href="https://www.linkedin.com/" />
          </div>
        </Grid.Column>
        <Grid.Column width="7" style={{ paddingBottom: 0 }}>
          This site does not use any cookie
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default FooterPage;

const Contatti = () => {
  return (
    <React.Fragment>
      <div>
        <strong>Quando trovarci</strong>
      </div>
      <div>
        Cellulare: <a href="tel:+393402934089">340-2934089</a>
      </div>
      <div>
        <strong>Orari</strong>
      </div>
      <div>Lunedì-Venerdì: 17.00 - 19.00</div>
      <div>Sabato: 10.00 - 12.00</div>
    </React.Fragment>
  );
};
