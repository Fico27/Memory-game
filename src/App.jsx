import "./App.css";
import Header from "./components/header";
import CardContainer from "./components/card-container";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <>
      <Header score={score} highScore={highScore} />
      <CardContainer
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
