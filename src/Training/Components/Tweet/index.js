import React from "react";
import PropTypes from "prop-types";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";

const cardStyle = { margin: 16, padding: 16 };

function Tweet(props) {
  return (
    <Card style={cardStyle}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nostrum
      similique eum tempore et voluptas, delectus aperiam numquam porro
      recusandae sequi quam totam deleniti accusamus, quis voluptatibus sint
      quia ducimus?
    </Card>
  );
}

Tweet.propTypes = {};

export default Tweet;
