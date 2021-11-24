import React, { useState, useEffect } from "react";
import axios from "axios";
import { QuizContext } from "./helpers/contexts";

// importing styles
import "./App.css";

// importing some components
import Start from "./components/StartPage/Start";
import AboutUs from "./components/AboutUs/AboutUs";
import Details from "./components/Details/Details";
import Conclusion from "./components/Conclusion/Conclusion";
import Form from "./components/Form/Form";

// declaring App function
function App() {
  const [gameState, setGameState] = useState("start");
  //creating IP state
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  return (
    <div className="app">
      {/* making navigation with context and reactHooks */}
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "start" && <Start />}
        {gameState === "about" && <AboutUs />}
        {gameState === "details" && <Details />}
        {gameState === "conclusion" && <Conclusion />}
        {gameState === "reg" && <Form ipForm={ip} />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
