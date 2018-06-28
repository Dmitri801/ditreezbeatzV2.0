import React from "react";
import { Grid, Divider } from "semantic-ui-react";
import ScrollableAnchor from "react-scrollable-anchor";
const Advertisement = () => {
  return (
    <ScrollableAnchor id="beatStore">
      <div
        className="advertisementSection"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Grid container textAlign="center">
          <Grid.Row columns={3} verticalAlign="middle">
            <Grid.Column>
              <Divider />
              <Divider />
            </Grid.Column>
            <Grid.Column>
              <h1
                style={{
                  color: "white",
                  textTransform: "uppercase",
                  fontWeight: "bold"
                }}
              >
                Instant Beat Store
              </h1>
            </Grid.Column>
            <Grid.Column>
              <Divider />
              <Divider />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </ScrollableAnchor>
  );
};

export default Advertisement;
