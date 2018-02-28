import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

import { CircularProgress } from "material-ui/Progress";

export default class Twitter extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      tweet: "",
      percentage: 0,
      countsLeft: 280
    };
  }
  onChange(e) {
    const tweet = e.target.value;
    const percentage = tweet.length / 280 * 100;
    const countsLeft = 280 - tweet.length;
    this.setState({ tweet, percentage, countsLeft });
  }
  onSubmit(e) {
    console.log(e);
    e.preventDefault();
  }
  render() {
    const { tweet, percentage, countsLeft } = this.state;
    return (
      <form action="" onSubmit={this.onSubmit}>
        <TextField
          multiline
          fullWidth
          rowsMax="4"
          value={tweet}
          onChange={this.onChange}
          label="What's Happening"
          helperText={
            <CircularProgress
              variant="determinate"
              size={20}
              value={percentage}
              style={{
                float: "right"
              }}
            />
          }
        />
        <Button type="submit"> Tweet </Button>
      </form>
    );
  }
}
