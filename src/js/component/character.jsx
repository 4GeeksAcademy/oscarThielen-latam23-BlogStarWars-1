import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Character = () => {
  const [characterData, setCharacterData] = useState([]);
  const { actions } = useContext(Context);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        setCharacterData(data.results);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchCharacterData();
  }, []);

  return (
    <div className="container text-center mt-5">
      <div className="row flex-nowrap overflow-auto">
        {characterData.length > 0 ? (
          characterData.map((character, index) => (
            <div className="col-4" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://cdn.pixabay.com/photo/2015/09/04/18/55/yoda-922520_640.png"
                  className="card-img-top"
                  alt="Character"
                />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">
                    Gender: {character.gender}
                  </p>
                  <p className="card-text">
                    Hair Color: {character.hair_color}
                  </p>
                  <p className="card-text">
                    Eye Color: {character.eye_color}
                  </p>
                  <div className="ml-auto">
                    <Link to={`/character-info/${character.url.split("/").reverse()[1]}`}>
                      <button className="btn btn-outline-primary">Learn more!</button>
                    </Link>
                  </div>
                  <button onClick={() => actions.addFavorites(character.name)} className="btn btn-outline-warning">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Be patience, young padawan...</p>
        )}
      </div>
    </div>
  );
};