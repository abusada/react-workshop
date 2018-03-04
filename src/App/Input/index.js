import React from "react";
import Button from "material-ui/Button";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";

import { CircularProgress } from "material-ui/Progress";
import Container from "./Container";
import blue from 'material-ui/colors/blue';

export default class Twitter extends React.Component {
  static defaultProps = {
    maxLength: 160
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      tweet: ""
    };
  }
  reset = () => {
    this.setState({ tweet: "" });
  };
  onChange(e) {
    const tweet = e.target.value;
    this.setState({ tweet });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onTweet(this.state.tweet);
    this.reset();
  }
  render() {
    const { tweet } = this.state;
    const { maxLength, user } = this.props;
    const percentage = tweet.length / maxLength * 100;
    const isReachedLimit = tweet.length >= maxLength;
    const charactersLeft = maxLength - tweet.length;
    const isCloseToReachLimit = charactersLeft < 20;

    return (
      <Container user={user}>
        <form action="" onSubmit={this.onSubmit}>
          <FormControl fullWidth style={{ marginBottom: 20 }}>
            <InputLabel>What's Happening</InputLabel>
            <Input
              multiline
              value={tweet}
              onChange={this.onChange}
              endAdornment={
                <InputAdornment position="end">
                  <CircularProgress
                    variant="determinate"
                    size={20}
                    value={percentage}
                  />
                </InputAdornment>
              }
            />
            {isCloseToReachLimit && (
              <FormHelperText error={isReachedLimit}>
                {charactersLeft}
              </FormHelperText>
            )}
          </FormControl>
          <Button
            disabled={tweet.length === 0 || isReachedLimit}
            fullWidth
            variant="raised"
            type="submit"
          >
            Tweet
          </Button>
        </form>
      </Container>
    );
  }
}
