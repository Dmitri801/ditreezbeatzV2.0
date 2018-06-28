import React, { Component } from "react";

import ShowCase from "./components/ShowCase";
import BeatStore from "./components/BeatStore";
import FreeBeatForm from "./components/FreeBeatForm";
import Advertisement from "./components/Advertisement";
import LicensingIntro from "./components/LicensingIntro";
import Licensing from "./components/Licensing";
import Directions from "./components/Directions";
import ContactForm from "./components/ContactForm";
import SideDrawer from "./components/Nav/SideDrawer/SideDrawer";
import BackDrop from "./components/common/BackDrop";
import TestComponent from "./components/TestComponent";
import "./style.css";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({
      sideDrawerOpen: !prevState.sideDrawerOpen
    }));
  };

  drawerOnClickDeactivate = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  render() {
    console.log(window.innerWidth);
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop drawerDeactivate={this.drawerOnClickDeactivate} />;
    }
    return (
      <div className="App" style={{ height: "100%" }}>
        <ShowCase openSideDrawer={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <FreeBeatForm />
        <Advertisement />
        <BeatStore />
        <LicensingIntro />
        <Licensing />
        <Directions />
        <ContactForm />
        <TestComponent />
      </div>
    );
  }
}

export default App;
