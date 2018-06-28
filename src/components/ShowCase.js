import NavBar from "./Nav/NavBar";

import React, { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import ScrollableAnchor from "react-scrollable-anchor";
class ShowCase extends Component {
  render() {
    return (
      <ScrollableAnchor id="home">
        <div className="showCase">
          {<NavBar openSideDrawer={this.props.openSideDrawer} />}

          <Container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "20%"
            }}
          >
            <h1
              style={{
                marginTop: "240px",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "10px",
                fontSize: "40px",
                textShadow: "3px 2px #383838",
                fontWeight: "bold"
              }}
            >
              Ditreez Beatz
            </h1>
          </Container>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "100px",
              minHeight: "70%"
            }}
          >
            <Button
              style={{ flex: "1" }}
              className="showCaseBtn"
              size="massive"
              circular
              inverted
              color="black"
              href="#beatStore"
            >
              Shop Now
            </Button>
          </Container>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default ShowCase;
