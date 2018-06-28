import React from "react";
import { Grid, Divider } from "semantic-ui-react";

const LicensingIntro = () => {
  return (
    <div className="licensingIntro">
      <Grid
        container
        columns={2}
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Grid.Column style={{ color: "white", zIndex: "0" }}>
          <p className="lead">
            By{" "}
            <strong style={{ color: "black", fontWeight: "bold" }}>
              purchasing
            </strong>, you agree to and are bound by the{" "}
            <span style={{ color: "#404040" }}>licensing</span> terms below.
          </p>
        </Grid.Column>
      </Grid>
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
              Licensing Information
            </h1>
          </Grid.Column>
          <Grid.Column>
            <Divider />
            <Divider />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid
        container
        columns={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid.Column
          style={{
            color: "#404040",
            textTransform: "uppercase",
            marginTop: "-20px"
          }}
        >
          <p>
            If You Have Questions, <a>Contact Us</a>
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LicensingIntro;
