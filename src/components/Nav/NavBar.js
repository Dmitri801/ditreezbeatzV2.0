import React, { Component } from "react";
import Scrollspy from "react-scrollspy";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import Radium from "radium";

class NavBar extends Component {
  state = {
    topOfPage: true,
    headerSection: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.navBarState);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navBarState);
  }

  navBarState = () => {
    if (window.scrollY < 58) {
      this.setState({
        topOfPage: true
      });
    }
    if (window.scrollY > 58 && window.scrollY < 740) {
      this.setState({
        topOfPage: false,
        headerSection: window.scrollY < 1148
      });
    }
    if (window.scrollY > 740) {
      this.setState({
        headerSection: false
      });
    }
  };

  render() {
    console.log(this.state.headerSection);
    const { topOfPage, headerSection } = this.state;
    let navStyle;
    let linkStyle;
    if (topOfPage && headerSection) {
      navStyle = {
        base: {
          background: "transparent",
          transition: "background-color 0.7s ease"
        }
      };
      linkStyle = {
        base: {
          transition: "font-size 0.8s",
          ":hover": {
            color: "black",
            fontSize: "25px",
            fontWeight: "bold",
            background: "white",
            textTransform: "uppercase",
            paddingTop: "10px",
            borderRadius: "50px"
          }
        }
      };
    } else if (!topOfPage && headerSection) {
      navStyle = {
        base: {
          background: "rgba(20, 20, 20, 0.87)",
          boxShadow: "0 8px 6px -6px",
          transition: "background-color 0.7s ease"
        }
      };
      linkStyle = {
        base: {
          transition: "font-size 0.5s",
          ":hover": {
            color: "white",
            fontSize: "25px",
            fontWeight: "bold"
          }
        }
      };
    } else {
      navStyle = {
        base: {
          background: "rgba(20, 20, 20, 0.95)",
          boxShadow: "0 8px 6px -6px",
          zIndex: "1000"
        }
      };
      linkStyle = {
        base: {
          transition: "font-size 0.5s",
          ":hover": {
            color: "white",
            fontSize: "25px",
            fontWeight: "bold"
          }
        }
      };
    }

    return (
      <nav style={[navStyle.base]}>
        <div className="menu-icon">
          <Icon name="sidebar" size="big" onClick={this.props.openSideDrawer} />
        </div>
        <Scrollspy
          className="navbarWrapper"
          items={["home", "beatStore", "licensing", "drumKits", "contactUs"]}
          currentClassName="is-current"
        >
          <li>
            <a
              href="#home"
              style={[linkStyle.base]}
              className={classnames({
                active: window.scrollY < 846 && !topOfPage
              })}
              key="1"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#beatStore"
              style={[linkStyle.base]}
              className={classnames({
                active: window.scrollY >= 846 && window.scrollY < 1831
              })}
              key="2"
            >
              Beats
            </a>
          </li>
          <li>
            <a
              href="#licensing"
              style={[linkStyle.base]}
              className={classnames({
                active: window.scrollY >= 1831 && window.scrollY < 3439
              })}
              key="3"
            >
              Licensing
            </a>
          </li>
          <li>
            <a href="#drumKits" style={[linkStyle.base]} key="4">
              Drum Kits
            </a>
          </li>
          <li>
            <a
              href="#contactUs"
              style={[linkStyle.base]}
              className={classnames({
                active: window.scrollY >= 3439
              })}
              key="5"
            >
              Contact Us
            </a>
          </li>
          {/* <li>
            <a href="#test" style={[linkStyle.base]} key="6">
              {window.scrollY}
            </a>
          </li> */}
        </Scrollspy>
      </nav>
    );
  }
}

export default withRouter(Radium(NavBar));
