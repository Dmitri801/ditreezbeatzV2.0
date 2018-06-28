import React from "react";
import classnames from "classnames";
import "./sidedrawer.css";
const SideDrawer = props => {
  let drawerClasses = ["sideDrawer"];
  console.log(props.show);
  if (props.show) {
    drawerClasses = ["sideDrawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <a href="#home" key="1">
            Home
          </a>
        </li>
        <li>
          <a href="#beatStore" key="2">
            Beat Store
          </a>
        </li>
        <li>
          <a href="#licensing" key="3">
            Licensing
          </a>
        </li>
        <li>
          <a href="#drumKits" key="4">
            Drum Kits
          </a>
        </li>
        <li>
          <a
            href="#contactUs"
            className={classnames({
              active: window.scrollY >= 2500
            })}
            key="5"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
