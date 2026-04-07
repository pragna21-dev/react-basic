import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Users from "./users";

function Welcome() {
  return <h2 style={{ color: "red" }}>Welcome,first component</h2>;
}
//Props
function User(props) {
  return (
    <h2>
      Hello,{props.name} is {props.age} Year old.
    </h2>
  );
}
//event
function handleClick(name) {
  alert(name + "Button Clicked !!!");
}
function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const name = "pragna";

  return (
    <>
      <h1>Hello,{name} First React</h1>
      <Welcome />
      <h2 style={{ color: "green" }}>Users:</h2>
      <User name="Thia" age="2" />
      <User name="Akshay" age="34" />
      <button onClick={() => handleClick(name)}>Click Me</button>
      <button onClick={() => setCount(count + 1)} disabled={count === 10}>
        count
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      {count} {show ? "Visible" : "Hidden"}
      <hr/>
      <Users />
    </>
  );
}

export default App;
