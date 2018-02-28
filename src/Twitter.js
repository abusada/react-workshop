import React from "react";
import Input from "./Components/Input";
import Paper from "material-ui/Paper";

export default class Twitter extends React.Component {
  render() {
    return (
      <Paper
        style={{
          textAlign: "center",
          margin: 20,
          padding: 20
        }}
        elevation={4}
      >
        <Input />
      </Paper>
    );
  }
}
