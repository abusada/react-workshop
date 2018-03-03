import React from "react";

// 1. import the Tweet component, path is relative
import Tweet from "./Components/Tweet";

// 2. Define the host component
export default class Training extends React.Component {
  render() {
    // 3. Define data
    const model = {
      time: new Date().getTime(),
      text: "Welcome to Yamsafer Month - React Training",
      user: {
        displayName: "Moja Dameri",
        photoURL:
          "https://scontent.ftlv3-1.fna.fbcdn.net/v/t1.0-1/p320x320/27751557_2161231387496873_6385839033479938157_n.jpg?oh=32a7df58d62d17727a0482d05763b685&oe=5B4B5F4F"
      }
    };
    return (
      <section>
        {/*  4. uset Tweet component inside the render method of the host component  */}
        <Tweet user={model.user} timestamp={model.time} text={model.text} />
      </section>
    );
  }
}
