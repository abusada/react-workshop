import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import { FormControl, FormLabel, FormControlLabel } from "material-ui/Form";
import Radio, { RadioGroup } from "material-ui/Radio";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/CameraAlt';

import Camera from "../Camera";

const styles = theme => ({
  root: {
    flexGrow: 1,
    border: "1px solid red"
  },
  demo: {
    height: "100vh"
  },
  paper: {
    padding: 20
    // minWidth: '50vw',
    // minHeight: '50vh',
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const style = {
  preview: {
    position: "relative"
  },
  captureContainer: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    zIndex: 1,
    bottom: 0,
    width: "100%"
  },
  captureButton: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    height: 56,
    width: 56,
    color: "#000",
    margin: 20
  },
  captureImage: {
    width: "100%"
  }
};

class InteractiveGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.reader = new FileReader();
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e, this.state);
  }

  takePicture = () => {
    this.camera.capture().then(blob => {
      this.reader.readAsDataURL(blob);
      this.reader.onloadend = () => {
        this.setState({
          imgSrc: this.reader.result
        }, () => {
            console.log(this.state);
        });
        
      };
    });
  };

  render() {
    const { classes } = this.props;
    const { imgSrc } = this.state;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            alignItems={"center"}
            direction={"column"}
            justify={"center"}
          >
            <Paper className={classes.paper}>
              <form onSubmit={this.onSubmit} noValidate autoComplete="off">
               
                {!imgSrc && (
                  <Camera
                    style={style.preview}
                    ref={cam => {
                      this.camera = cam;
                    }}
                  >

                    <Button 
                        variant="fab" 
                        color="primary" 
                        aria-label="add"
                        onClick={this.takePicture}
                        style={{
                            position: 'absolute',
                            left: '40%',
                            bottom: "-13%",
                        }}
                    >
                        <AddIcon />
                    </Button>
                  </Camera>
                )}

                {imgSrc && <img style={style.captureImage} src={imgSrc} />}

                <TextField
                  id="name"
                  label="What's your name"
                  value={this.state.name}
                  onChange={this.onChange}
                  margin="normal"
                />
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

InteractiveGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InteractiveGrid);
