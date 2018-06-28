import React from "react";
import "./backdrop.css";
const BackDrop = props => {
  return <div className="backDrop" onClick={props.drawerDeactivate} />;
};

export default BackDrop;
