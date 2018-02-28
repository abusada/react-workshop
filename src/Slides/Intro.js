import React from "react";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import ReactLogo from "../Components/Logo";

function RaisedButtons(props) {
  return [
    <Typography variant="titheadlinele" component="h1">
      Yamsafer Month
    </Typography>,
    <Typography variant="subheading" component="p">
      React Workshop
      <ReactLogo />
    </Typography>
  ];
}

export default RaisedButtons;
