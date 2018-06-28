import React, { Component } from "react";
import { StyleRoot } from "radium";
import ScrollableAnchor from "react-scrollable-anchor";
import ResponsiveForm from "./common/ResponsiveForm";
class ContactForm extends Component {
  render() {
    return (
      <ScrollableAnchor id="contactUs">
        <div
          style={{
            display: "flex",
            alignItems: "center",

            flexDirection: "column"
          }}
          className="contactUs"
        >
          <StyleRoot>
            <ResponsiveForm />
          </StyleRoot>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default ContactForm;
