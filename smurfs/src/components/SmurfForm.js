import React, { useContext, useState } from "react";
import axios from "axios";
import {SmurfFormContext} from "../Contexts/SmurfFormContext";

const SmurfForm = () => {
  const [smurfInput, setSmurfInput] = useState({});
  const { getData } = useContext(SmurfFormContext);

  const handleChange = e => {
    setSmurfInput({
      ...smurfInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurfInput)

      .then(function(response) {
        getData();
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="smurfForm">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={smurfInput.name}
        />
        <label>Age</label>
        <input
          id="age"
          type="text"
          name="age"
          onChange={handleChange}
          value={smurfInput.age}
        />
        <label>height</label>
        <input
          id="height"
          type="text"
          name="height"
          onChange={handleChange}
          value={smurfInput.height}
        />
        <button type="submit">
          Generate Smurf
        </button>
      </form>
    </div>
  );
};

export default SmurfForm;
