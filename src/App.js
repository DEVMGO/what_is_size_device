import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(null)
  const [windowHeight, setWindowHeight] = useState(null)
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setWindowWidth(width);
      const height = window.innerHeight;
      setWindowHeight(height);
    }

    window.addEventListener("resize", handleResize);

    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <div className="width">
        <div className="line">
          <div className="w-left"></div>
          <div className="w-line"></div>
          <div className="w-right"></div>
        </div>
        <div className="data">
          <h5>width: {windowWidth}</h5>
        </div>
      </div>
      <div className="height">
        <div className="line">
          <div className="h-top"></div>
          <div className="h-line"></div>
          <div className="h-down"></div>
        </div>
        <div className="data">
          <h5>Height: {windowHeight}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
