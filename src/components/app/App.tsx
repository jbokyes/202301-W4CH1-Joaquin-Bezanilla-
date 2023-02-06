import React from "react";
import "./App.css";
import { Gentleman } from "../gentleman/gentleman";
import { gentlemenMock } from "../../mocks/gentleman";

function App() {
  return (
    <main className="main">
      <ul className="gentlemen">
        {gentlemenMock.map((elem) => (
          <Gentleman
            name={elem.name}
            status={elem.status}
            profession={elem.profession}
            twitter={elem.twitter}
            picture={elem.picture}
            alternativeText={elem.alternativeText}
          ></Gentleman>
        ))}
      </ul>
    </main>
  );
}

export default App;
