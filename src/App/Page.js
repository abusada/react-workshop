import React from "react";
import App from "./";
import Grid from "material-ui/Grid";

const Page = () => (
  <Grid container>
    <Grid item xs={12} sm={3} md={4} />
    <Grid item xs={12} sm={6} md={4} style={{ padding: 20 }}>
      <App />
    </Grid>
  </Grid>
);

export default Page;
