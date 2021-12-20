import React, { useState } from "react";
import { QuizContext } from "./helpers/contexts";

// importing styles
import "./App.css";

// importing some components
import Start from "./components/StartPage/Start";
import AboutUs from "./components/AboutUs/AboutUs";
import Details from "./components/Details/Details";
import Conclusion from "./components/Conclusion/Conclusion";

// declaring App function
function App() {
  const [gameState, setGameState] = useState("start");

  return (
    <div className="app">
      {/* making navigation with context and reactHooks */}
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "start" && <Start />}
        {gameState === "about" && <AboutUs />}
        {gameState === "details" && <Details />}
        {gameState === "conclusion" && <Conclusion />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
