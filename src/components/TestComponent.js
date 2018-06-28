import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import ScrollableAnchor from "react-scrollable-anchor";
class TestComponent extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "200px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <h1>Test</h1>
        <div>
          <Scrollspy
            items={["section-1", "section-2", "section-3"]}
            currentClassName="is-current"
          >
            <li>
              <a href="#section-1">section 1</a>
            </li>
            <li>
              <a href="#section-2">section 2</a>
            </li>
            <li>
              <a href="#section-3">section 3</a>
            </li>
          </Scrollspy>
          <div>
            <ScrollableAnchor id="test">
              <section>section 2</section>
            </ScrollableAnchor>
            <section id="section-3">section 3</section>
          </div>
        </div>
      </div>
    );
  }
}
export default TestComponent;
