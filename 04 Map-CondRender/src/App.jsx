import React from "react";

const App = () => {
  let parts = ["Eyes", "Nose", "Ears", "Skeleton", "Legs", "Skin"];
  return (
    <>
      <h1> Parts of The Body</h1>
      <ul className="list-group">
        {parts.map((part) => (
          <li className="list-group-item" key={part}>
            {part}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
