import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const handleClick = (name, e) => {
    console.log("Hello " + name, e.target);
  };
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <button onClick={(e) => handleClick("Mario", e)}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
