import React from "react";
import RangePicker from "../../DateTimeRange/RangePicker";
import Title from "../../Title/Title";

type Props = {};

const DateTimeRangeView = (props: Props) => {
  return (
    <>
      {/* <Title titleText="Select Date and Time Range" /> */}
      <RangePicker />
    </>
  );
};

export default DateTimeRangeView;
