import React from "react";

const Item1 = () => {
  return (
    <div className="row">
      <div className="col-6">
        <h2>Gym</h2>
      </div>
      <div className="col-4">22/07/2024</div>
      <div className="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Item1;
