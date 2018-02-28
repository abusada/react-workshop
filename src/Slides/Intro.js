import React from "react";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import ReactLogo from "../Components/Logo";

function Intro(props) {
  return (
    <div>
      <Typography variant="titheadlinele" component="h1">
        Yamsafer Month
      </Typography>,
      <Typography variant="subheading" component="p">
        React Workshop
      </Typography>,
      <ReactLogo />
    </div>
  );
}

export default Intro;
