import Navbar from "./Navbar";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("Luigi");
    setAge(30);
  };
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>
          {name} is {age} years old.
        </p>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
