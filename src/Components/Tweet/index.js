import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import red from "material-ui/colors/red";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import MoreVertIcon from "material-ui-icons/MoreVert";
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
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  render() {
    const { classes, timestamp, tweet, user } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              src={user.photoURL}
              aria-label="Recipe"
              className={classes.avatar}
            />
          }
          title={user.displayName}
          subheader={<Timestamp time={timestamp} />}
        />
        <CardContent>
          <Typography component="p">{tweet}</Typography>
        </CardContent>
        {/* <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions> */}
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
