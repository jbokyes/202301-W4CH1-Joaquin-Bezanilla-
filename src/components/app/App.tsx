import React from "react";
import "./App.css";
import { Gentleman } from "../gentleman/gentleman";
import { gentlemenMock } from "../../mocks/gentleman";
import { Info } from "../info/info";

function App() {
  return (
    <>
      <Info></Info>
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
    </>
  );
}

export default App;
