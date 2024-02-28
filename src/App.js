import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(true);

  let textOneStyles = {
    transform: `translateX(${status ? "0px" : "20px"})`,
    opacity: status ? 0 : 1,
  };
  let textTwoStyles = {
    transform: `translateX(${status ? "0px" : "60px"})`,
    opacity: status ? 0 : 1,
    transitionDelay: "1s",
  };

  let textThreeStyles = {
    transform: `translateX(${status ? "0px" : "100px"})`,
    opacity: status ? 0 : 1,
    transitionDelay: "2s",
  };

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <div className="textContainer">
        <div className="textOne" style={textOneStyles}>
          ONE
        </div>
        <div className="textTwo" style={textTwoStyles}>
          TWO
        </div>
        <div className="textThree" style={textThreeStyles}>
          THREE
        </div>
      </div>
    </div>
  );
}

export default App;
