import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
import { SmurfListContext } from "../Contexts/SmurfListContext";
import { SmurfFormContext } from "../Contexts/SmurfFormContext";

function App() {
  console.log("tesssssst");
  const [smurfData, setSmurfData] = useState([]);

  console.log("smurrrrrfs", smurfData);

  const getData = () => {
    Axios.get("http://localhost:3333/smurfs")
      .then(response => {
        setSmurfData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(getData, []);

  return (
    <div className="App">
      <SmurfFormContext.Provider value={{ getData }}>
        <SmurfForm />
      </SmurfFormContext.Provider>
      <SmurfListContext.Provider value={{ smurfData }}>
        <SmurfList />
      </SmurfListContext.Provider>
    </div>
  );
}

export default App;
