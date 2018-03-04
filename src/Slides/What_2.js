import React from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/styles/hljs";
import FinalResult from "../App";

const Section = ({ title = "Title", children, variant = "display1" }) => (
  <section style={{ marginBottom: 20 }}>
    <Typography variant={variant}>{title}</Typography>
    <Typography gutterBottom>{children}</Typography>
  </section>
);

const Link = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {" "}
    {children}{" "}
  </a>
);

const CodeSnippets = {
  "local-dev": `git clone git@github.com:abusada/react-workshop.git
cd react-workshop
npm install
npm start
`
};

function WhatWillWeDo(props) {
  return (
    <Grid container spacing={40}>
      <Grid item xs={12} sm={8}>
        <Section title="What we're building?">
          Together we will build a twitter like minimum viable product, you can
          login with your google account, tweet, and see tweets from other
          logged in users, You can see and play around with the final product on
          the right side.
        </Section>
        <Section title="How to follow along?">
          There are two ways to complete this tutorial: you could either write
          the code right in the browser, or you could set up a local development
          environment on your machine. You can choose either option depending on
          what you feel comfortable with.
        </Section>
        <Section
          variant="title"
          title="If You Prefer to Write Code in the Browser"
        >
          Open the following
          <Link href="https://codesandbox.io/s/github/abusada/react-workshop">
            link
          </Link>
          And you're all set to start writing code 👍
        </Section>
        <Section
          variant="title"
          title=" If You Prefer to Write Code on your machine"
        >
          <SyntaxHighlighter language="bash" style={dark}>
            {CodeSnippets["local-dev"]}
          </SyntaxHighlighter>
          You should now be all set to start writing code 🎉
        </Section>
      </Grid>
      <Grid item xs={12} sm={4}>
        <section style={{ overflowY: "visible", maxHeight: "90vh" }}>
          {/* <FinalResult /> */}
        </section>
      </Grid>
    </Grid>
  );
}

export default WhatWillWeDo;
