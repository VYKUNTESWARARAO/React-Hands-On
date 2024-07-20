import React from "react";

const Time = () => {
  let date = new Date();
  return (
    <div>
      <h4 className="lead">
        The current time is :: {date.toLocaleDateString()}-
        {date.toLocaleTimeString()}
      </h4>
    </div>
  );
};

export default Time;
