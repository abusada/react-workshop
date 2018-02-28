import React from "react";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.onNext = this.onNext.bind(this);
    this.onPrev = this.onPrev.bind(this);
  }
  state = {
    currentSlide: 0
  };
  onNext() {
    this.setState(({ currentSlide }) => ({
      currentSlide: currentSlide + 1
    }));
  }
  onPrev() {
    this.setState(({ currentSlide }) => ({
      currentSlide: currentSlide - 1
    }));
  }
  renderSlide = index => {
    const Slide = this.props.slides[index];
    console.log(index, this.props.slides);
    return <Slide />;
  };
  render() {
    const { slides } = this.props;
    const { currentSlide } = this.state;
    return (
      <div style={{ minHeight: '100vh' }}>
        <Paper style={{ margin: 20, padding: 20 }} elevation={4}>
          {slides[currentSlide]}
        </Paper>
        <section>
          <Button
            color="primary"
            disabled={currentSlide === 0}
            onClick={this.onPrev}
          >
            Prev
          </Button>
          <Button
            disabled={currentSlide === slides.length - 1}
            onClick={this.onNext}
          >
            Next
          </Button>
        </section>
      </div>
    );
  }
}
