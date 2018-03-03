import React from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/styles/hljs";
import FinalResult from "../Twitter";

function WhatWillWeDo(props) {
  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <section style={{ overflow: "hidden", maxHeight: "90vh" }}>
          <FinalResult />
        </section>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography gutterBottom variant="title">
          What we're building?
        </Typography>
        <Typography gutterBottom>
          Together we will build a twitter like minimum viable product, you can
          login with your google account, tweet, and see tweets from other
          logged in users, You can see and play around with the final product on
          the right side.
        </Typography>
        <Typography gutterBottom />
        <br />

        <Typography gutterBottom variant="title">
          How to follow along?
        </Typography>
        <Typography gutterBottom>
          There are two ways to complete this tutorial: you could either write
          the code right in the browser, or you could set up a local development
          environment on your machine. You can choose either option depending on
          what you feel comfortable with.
        </Typography>
        <br />
        <Typography gutterBottom variant="subheading">
          If You Prefer to Write Code in the Browser
        </Typography>
        <Typography gutterBottom>
          Open the following &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codesandbox.io/s/github/abusada/react-workshop"
          >
            Link
          </a>{" "}
          &nbsp; And you're all set to start writing code 👍
        </Typography>
        <Typography gutterBottom>
          If you would like to write code on your machine, also open the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codesandbox.io/s/github/abusada/react-workshop"
          >
            Link
          </a>{" "}
          and download the project code 😜
        </Typography>
        <Typography gutterBottom>
          Unzip the project, open your terminal to the dowload directory
        </Typography>
        <SyntaxHighlighter language="bash" style={dark}>
          {`cd yamsafer-month-react-workshop
npm install
npm start`}
        </SyntaxHighlighter>
        <br />
        <Typography gutterBottom variant="title">
          You should now be all set to start writing code{" "}
          <span role="img" aria-label="party" style={{ fontSize: "larger" }}>
            🎉
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default WhatWillWeDo;
