import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
  const [planetsData, setPlanetsData] = useState([]);
  const { actions } = useContext(Context);

  useEffect(() => {
    const fetchPlanetsData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets/");
        const data = await response.json();
        setPlanetsData(data.results);
      } catch (error) {
        console.error("Error fetching planets data:", error);
      }
    };

    fetchPlanetsData();
  }, []);

  return (
    <div className="container text-center mt-5">
      <div className="row flex-nowrap overflow-auto">
        {planetsData.length > 0 ? (
          planetsData.map((planet, index) => (
            <div className="col-4" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://public.blenderkit.com/thumbnails/assets/84b7387fe3a246f79cc0385584f97121/files/thumbnail_806db815-1535-45ec-8f24-dbb3a7729e7b.png.256x256_q85.png.webp?webp_generated=1646019400"
                  className="card-img-top"
                  alt="Planet"
                />
                <div className="card-body">
                  <h5 className="card-title">{planet.name}</h5>
                  <p className="card-text">
                    Climate: {planet.climate}
                  </p>
                  <p className="card-text">
                    Terrain: {planet.terrain}
                  </p>
                  <p className="card-text">
                    Population: {planet.population}
                  </p>
                  <div className="ml-auto">
                    <Link to={`/planet-info/${planet.url.split("/").reverse()[1]}`}>
                      <button className="btn btn-outline-primary">Learn more!</button>
                    </Link>
                  </div>
                  <button onClick={() => actions.addFavorites(planet.name)} className="btn btn-outline-warning">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No! Try not. Do. Or do not. There is no try...</p>
        )}
      </div>
    </div>
  );
};