import React from "react";
import { Grid, Icon } from "semantic-ui-react";

const Directions = () => {
  return (
    <div id="directionSection" className="d-none d-lg-block directionSection">
      <div
        className="dark-overlay"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Grid container columns={3}>
          <Grid.Column>
            <Icon name="paypal" size="massive" />
            <h1>Secure Checkout Using Paypal, And Beatstars</h1>
          </Grid.Column>
          <Grid.Column>
            <Icon name="download" size="massive" />
            <h1>Instant Download Sent To Your Email</h1>
          </Grid.Column>
          <Grid.Column>
            <Icon name="music" size="massive" />
            <h1>Highest Quality Production In The Industry</h1>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Directions;
