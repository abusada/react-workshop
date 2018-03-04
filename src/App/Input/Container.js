import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import red from "material-ui/colors/red";
const styles = theme => ({
  card: {
    marginBottom: 20
  },
  media: {
    height: 194
  },
  actions: {
    display: "flex"
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
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  render() {
    const { user, classes, children } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.avatar} src={user.photoURL} />}
          title={user.displayName}
          subheader={user.email}
        />
        <CardContent>{children}</CardContent>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
