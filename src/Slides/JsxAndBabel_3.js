import React from "react";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/styles/hljs";

function JsxAndBabel(props) {
  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item xs={12}>
        <Typography variant="display1" gutterBottom>
          JSX & Babel
        </Typography>
        <Typography variant="headline" gutterBottom>
          Through <a href="https://babeljs.io/">babel</a>,{" "}
          <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>{" "}
          produces React “elements” as javascript.
        </Typography>
        <Typography>
          Add a breif about javascript history, es5, es6, how new features make
          it to the language &nbsp;
          <a href="https://github.com/tc39/proposals">proopsals</a>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SyntaxHighlighter language="javascript" style={docco}>
          {`          
            const element = <h1>Hello, world!</h1>;
          `}
        </SyntaxHighlighter>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
            var element = React.createElement("h1", null, "Hello, world!");
          `}
        </SyntaxHighlighter>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
            const ThingsToLearn = (props) => (
              <div className="list">
                <h1> Things t o learn </h1>
                <ul>
                  <li>Babel</li>
                  <li>Jsx</li>
                  <li>React</li>
                </ul>
              </div>
            )
      


        `}
        </SyntaxHighlighter>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
            var ThingsToLearn = function ThingsToLearn(props) {
              return React.createElement(
                "div",
                { className: "list" },
                React.createElement("h1", null, " Things t o learn "),
                React.createElement(
                  "ul",
                  null,
                  React.createElement("li", null, "Babel"),
                  React.createElement("li", null, "Jsx"),
                  React.createElement("li", null, "React")
                )
              );
            };`}
        </SyntaxHighlighter>
      </Grid>
      <Grid item xs={12}>
        Play with babel, jsx and the above examples{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=usage&code_lz=MYewdgzgLgBAKgCwJZgOYTiAMk6MC8MAFAA4BOIJEAlAQHzEBQMLrAPACZIBuMwANgEMIEAHKCAtgFN8AIn64osus1Zq2CAIwNEKdDFggY_KYLJgYbAPRaVa9QFd-d--oV0AQoIBGU_tfdVVxY2dwApCAAPAKQXYMt3ACVTYCgYuPtrJwyQqy5uDOpGIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=true&lineWrap=false&presets=react%2Cenv&prettier=true&targets=&version=6.26.0&envVersion=1.6.2"
        >
          here
        </a>
      </Grid>
    </Grid>
  );
}

export default JsxAndBabel;
