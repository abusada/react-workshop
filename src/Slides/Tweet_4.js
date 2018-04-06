import React from "react";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Tweet from "../App/Tweet";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/styles/hljs";

const ItemBreakdown = ({ item, code }) => (
  <Grid container alignItems={"center"} justify={"flex-start"}>
    <Grid item xs={12} sm={6}>
      <SyntaxHighlighter language="jsx" style={docco}>
        {code}
      </SyntaxHighlighter>
    </Grid>
    <Grid item xs={12} sm={6}>
      {item}
    </Grid>
  </Grid>
);

export default class BuildingTheTweetComponent extends React.Component {
  render() {
    const now = new Date().getTime();
    const avatarImg =
      "https://avatars3.githubusercontent.com/u/2572320?s=460&v=4";
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="display3" gutterBottom>
            <code>Thinking in the web = Thinking in components</code>
          </Typography>
          <Typography variant="display1" gutterBottom>
            The <code>{`<Tweet />`}</code> Component
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <ItemBreakdown
            item={
              <Tweet
                tweet="Hello Nablus!, today we will be learning about building web components with react"
                timestamp={now}
                user={{
                  displayName: "Faris Abusada",
                  photoURL: avatarImg
                }}
              />
            }
            code={`
<Tweet
  tweet="Hello Nablus!, today we will be learning about building web components with react"
  timestamp={now}
  user={{
    displayName: "Faris Abusada",
    photoURL: "/images/abusada.png"
  }}
/>
            `}
          />

          <Typography variant="title">Let's break it down</Typography>
          <hr />
          <ItemBreakdown
            item={<Avatar src={avatarImg} />}
            code={`<Avatar src="/images/sayed_mel3aqa.png" />`}
          />
          <ItemBreakdown
            item={
              <CardHeader
                avatar={<Avatar src={avatarImg} />}
                title={"Name Here"}
                subheader={"a few seconds ago"}
              />
            }
            code={`
<CardHeader
  avatar={<Avatar src={avatarImg} />}
  title={"Name Here"}
  subheader={"a few seconds ago"}
/>`}
          />
          <ItemBreakdown
            item={<CardContent>Tweet Text Come Here</CardContent>}
            code={`
<CardContent>
  Tweet Text Come Here
</CardContent>`}
          />
          <ItemBreakdown
            item={<Card style={{ padding: 10 }}> Card ...... </Card>}
            code={`<Card>Card ......</Card>`}
          />
          <ItemBreakdown
            item={
              <Card>
                <CardHeader
                  avatar={<Avatar src={avatarImg} />}
                  title={"Name Here"}
                  subheader={"a few seconds ago"}
                />
                <CardContent>Tweet Text Come Here</CardContent>
              </Card>
            }
            code={`
<Card>
  <CardHeader
    avatar={<Avatar src={avatarImg} />}
    title={"Name Here"}
    subheader={"a few seconds ago"}
  />
    <CardContent>Tweet Text Come Here</CardContent>
</Card>
            `}
          />
        </Grid>
      </Grid>
    );
  }
}
