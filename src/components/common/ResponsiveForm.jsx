import React, { Component } from "react";
import Radium from "radium";
const containerStyle = {
  maxWidth: "1170px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "100px",
  color: "#fff"
};

const inputStyle = {
  width: "100%",
  padding: "1em",
  fontSize: "20px",
  fontWeight: "bold"
};

const buttonStyle = {
  base: {
    width: "100%",
    padding: "1em",
    backgroundColor: "#222",
    border: "0",
    textTransform: "uppercase",
    color: "white",

    ":hover": {
      backgroundColor: "#fff",
      color: "#222",
      outline: "0",
      transition: "background-color 1s ease-out",
      cursor: "pointer",
      fontSize: "1.1em"
    }
  }
};

const wrapperStyle = {
  base: {
    boxShadow: "0 0 20px 0 rgba(72, 94, 116, 0.7)",
    "@media (min-width: 700px)": {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      padding: "2em"
    }
  }
};

const imgStyle = {
  filter: "grayscale(1)",
  "@media (min-width: 700px)": {
    height: "520px",
    margin: "0px auto"
  }
};

class ResponsiveForm extends Component {
  state = {
    name: "",
    company: "",
    email: "",
    message: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, company, email, message } = this.state;
    return (
      <div className="container" style={containerStyle}>
        <div className="wrapper" style={wrapperStyle.base}>
          <div className="company-info" style={{ backgroundColor: "#999" }}>
            <img
              src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55a1e60cd6799d5761c7ec40c4954569&auto=format&fit=crop&w=1350&q=80"
              className="img-fluid"
              style={imgStyle}
              alt="img"
            />
          </div>
          <div
            className="contact"
            style={{ backgroundColor: "rgb(68, 68, 68)" }}
          >
            <h3>Contact Us</h3>
            <form
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "20px"
              }}
            >
              <p>
                <label style={{ display: "block", marginBottom: "0" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  style={inputStyle}
                  value={name}
                  onChange={this.onInputChange}
                />
              </p>
              <p>
                <label style={{ marginBottom: "0" }}>Company</label>
                <input
                  type="text"
                  name="company"
                  style={inputStyle}
                  value={company}
                  onChange={this.onInputChange}
                />
              </p>
              <p>
                <label style={{ marginBottom: "0" }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  style={inputStyle}
                  value={email}
                  onChange={this.onInputChange}
                />
              </p>
              <p style={{ gridColumn: "1 / 3" }}>
                <label style={{ marginBottom: "0" }}>Message</label>
                <textarea
                  name="message"
                  rows="10"
                  style={inputStyle}
                  value={message}
                  onChange={this.onInputChange}
                />
              </p>

              <p style={{ gridColumn: "1 /3" }}>
                <button style={buttonStyle.base}>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(ResponsiveForm);
