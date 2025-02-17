import React from "react";

const AddTodo = () => {
  return (
    <div>
      <div className="text-container">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter ToDo Here"></input>
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button className="btn btn-success">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
