import React from "react";
import moment from "moment";

const Timestamp = ({ time }) => {
  return moment(time).fromNow();
};

export default Timestamp;
