import React from "react";
import PropTypes from "prop-types";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";

function Tweet(props) {
  return <p>{props.text}</p>;
}

Tweet.propTypes = {};

export default Tweet;
