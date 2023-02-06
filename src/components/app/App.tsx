import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Gentleman } from "../gentleman/gentleman";
import { gentlemenMock } from "../../mocks/gentleman";

function App() {
  return gentlemenMock.map((elem) => (
    <Gentleman
      name={elem.name}
      status={elem.status}
      profession={elem.profession}
      twitter={elem.twitter}
      picture={elem.picture}
      alternativeText={elem.alternativeText}
    ></Gentleman>
  ));
}

export default App;
