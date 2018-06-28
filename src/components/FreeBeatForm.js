import { Grid, Icon } from "semantic-ui-react";
import FancyForm from "./common/FancyForm";
import Radium from "radium";

import React, { Component } from "react";

class FreeBeatForm extends Component {
  state = {
    formComplete: false
  };

  formCompleted = () => {
    this.setState({
      formComplete: true
    });
  };
  render() {
    return (
      <div>
        <Grid
          container
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          {!this.state.formComplete && (
            <div>
              <h1 style={{ color: "#404040", textDecoration: "underline" }}>
                Subscribe To Our Mailing List
              </h1>
              <Icon
                name="long arrow alternate right"
                size="massive"
                className="arrowIcon"
              />
            </div>
          )}
          <FancyForm
            formComplete={this.state.formComplete}
            formCompleted={this.formCompleted}
          />
        </Grid>
      </div>
    );
  }
}

export default Radium(FreeBeatForm);
