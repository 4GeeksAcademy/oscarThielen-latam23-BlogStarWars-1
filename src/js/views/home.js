import React from "react";
import { Character } from "../component/character.jsx";
import { Planets } from "../component/planets.jsx";
import { Vehicles } from "../component/vehicles.jsx";

export const Home = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col">
        <h2 className="text-left danger">
          <strong>Character</strong>
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Character />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2 className="text-left danger">
          <strong>Planets</strong>
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Planets />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2 className="text-left danger">
          <strong>Vehicles</strong>
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Vehicles />
      </div>
    </div>
  </div>
);