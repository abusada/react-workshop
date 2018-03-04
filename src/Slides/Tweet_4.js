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
      "https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-old-lady-3295dab3713f6121-512x512.png";
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="display1" gutterBottom>
            The <code>{`<Tweet />`}</code> Component
          </Typography>
          <Typography>
            We will use the{" "}
            <a href="https://material-ui-next.com/demos/cards/">card</a>{" "}
            Component from{" "}
            <a href="https://material-ui-next.com">material-ui</a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <ItemBreakdown
            item={
              <Tweet
                tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea maiores consequuntur aliquid vel harum totam optio quo eos!"
                timestamp={now}
                user={{
                  displayName: "Name Here",
                  photoURL: avatarImg
                }}
              />
            }
            code={`
<Tweet
  tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea maiores consequuntur aliquid vel harum totam optio quo eos!"
  timestamp={now}
  user={{
    displayName: "Name Here",
    photoURL: "/images/sayed_mel3aqa.png"
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
