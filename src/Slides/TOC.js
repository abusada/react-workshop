import React from "react";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import ReactLogo from "../Components/Logo";

var list = [
  "What is React?",
  "Passing Data Through Props",
  "An Interactive Component",
  "Lifting State Up",
  "Functional Components"
];

var TableOfContent = function TableOfContent() {
  return React.createElement(
    "div",
    {
      style: {
        textAlign: "left"
      }
    },
    React.createElement("h1", null, "We will look into the following "),
    React.createElement(
      "ul",
      null,
      list.map(function(item, index) {
        return React.createElement("li", { key: index }, item);
      })
    )
  );
};

export default TableOfContent;
