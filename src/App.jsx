import React, { useEffect, useState } from "react";
import RobotList from "./components/RobotList";


function App(props) {
  // state is initialized by a props
  const [title, setTitle] = useState(props.title);
  const [count, setCount] = useState(0);
  const [robots, setRobots] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleMouseOver = () => {
    setCount((prev) => prev + 1);
  };

   useEffect(() => {
    fetch("https://robot-cpe-2024.cleverapps.io/robots")
      .then((response) => response.json())
      .then((data) => setRobots(data));
  }, []);


  console.log(robots);

  return (
    <div className="App">
      <h1> this is my first React Component</h1>
      <label htmlFor="titleInput">Title</label>
      <input
        type="text"
        id="titleInput"
        onChange={handleChangeTitle}
        value={title}
      />
      <h3 onMouseOver={handleMouseOver}>{title}</h3>
      <p>Compteur de survol : {count}</p>
      <RobotList robots={robots} />
    </div>
  );
}
export default App;
