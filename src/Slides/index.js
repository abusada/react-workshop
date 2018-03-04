import React from "react";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import SlideContainer from "./Components/SlideContainer";

import First from "./Intro_1";
import Second from "./What_2";
import Third from "./JsxAndBabel_3";
import Fourth from "./Tweet_4";
import Fifth from "./Lets_Begin_5";
class Slides extends React.Component {
  render() {
    const slides = [First, Second, Third, Fourth, Fifth];
    // const slides = [Fourth];
    return (
      <Grid container direction="column" alignItems={"stretch"}>
        <Grid item xs>
          {slides.map((Slide, index) => (
            <SlideContainer key={index}>
              <Slide />
            </SlideContainer>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default Slides;
