import React from "react";
import Button from "material-ui/Button";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";

class TweetInput extends React.Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onTweet(this.state.text)
    this.setState({
      text: "",
    })
  }
  render() {
    const text = this.state.text;
    const textLength = text.length;
    const maxLength = 60;
    const charactersLeft = maxLength - textLength;
    const isCloseToReachLimit = charactersLeft <= 10;
    const isReachedLimit = charactersLeft <= 0;

    return (
      <form onSubmit={this.onSubmit}>
        <FormControl fullWidth>
          <InputLabel> What's happening </InputLabel>
          <Input
            type="text"
            value={text}
            placeholder={this.props.placeholder}
            onChange={this.onChange}
          />
          <FormHelperText>
            {isCloseToReachLimit && (
              <span>You have {charactersLeft} characters left</span>
            )}
          </FormHelperText>
          <Button
            fullWidth
            multiline
            variant="raised"
            color="primary"
            type="submit"
            disabled={textLength === 0 || isReachedLimit}
          >
            Tweet
          </Button>
        </FormControl>
      </form>
    );
  }
}

export default TweetInput;
