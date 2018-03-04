import React from "react";
import PropTypes from "prop-types";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import moment from "moment";

function Tweet(props) {
  const formattedDate = moment(props.timestamp).fromNow();

  return (
    <Card style={{ marginBottom: 20 }}>
      <CardHeader
        avatar={<Avatar src={props.user.photoURL} />}
        title={props.user.displayName}
        subheader={formattedDate}
      />
      <CardContent>{props.text}</CardContent>
    </Card>
  );
}

Tweet.propTypes = {};

export default Tweet;
