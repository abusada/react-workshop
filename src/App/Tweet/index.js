import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Card, { CardHeader, CardContent } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import red from "material-ui/colors/red";
import Timestamp from "../Timestamp";

const styles = theme => ({
  card: {
    marginBottom: 20
  },
  media: {
    height: 194
  },
  actions: {
    display: "flex",
    selfAlign: "flex-end"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class TweetCard extends React.Component {
  render() {
    const { classes, timestamp, tweet, user } = this.props;
    const avatar = (
      <Avatar
        src={user.photoURL}
        aria-label="Recipe"
        className={classes.avatar}
      />
    );
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={avatar}
          title={user.displayName}
          subheader={<Timestamp time={timestamp} />}
        />
        <CardContent>
          <Typography component="p">{tweet}</Typography>
        </CardContent>
      </Card>
    );
  }
}

TweetCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TweetCard);
