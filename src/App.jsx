import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

 function Welcome() {
    return <h2 style={{color:"red"}}>Welcome,first component</h2>
  }

function App() {
  const [count, setCount] = useState(0);
  const name = "pragna";

   return (
    <>
      <h1>Hello,{name} First React</h1>
      <Welcome />
    </>
  );
}

export default App;
