import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = () => {
  const [vehiclesData, setVehiclesData] = useState([]);
  const { actions } = useContext(Context);

  useEffect(() => {
    const fetchVehiclesData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/vehicles/");
        const data = await response.json();
        setVehiclesData(data.results);
      } catch (error) {
        console.error("Error fetching vehicles data:", error);
      }
    };

    fetchVehiclesData();
  }, []);

  const addToFavorites = (vehicleName) => {
    actions.addFavorites(vehicleName);
  };

  return (
    <div className="container text-center mt-5">
      <div className="row flex-nowrap overflow-auto">
        {vehiclesData.length > 0 ? (
          vehiclesData.map((vehicle, index) => (
            <div className="col-4" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://st2.depositphotos.com/1752660/9463/i/450/depositphotos_94633320-stock-photo-spaceship-on-black-with-blue.jpg"
                  className="card-img-top"
                  alt="Vehicle"
                />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <p className="card-text">
                    Model: {vehicle.model}
                  </p>
                  <p className="card-text">
                    Manufacturer: {vehicle.manufacturer}
                  </p>
                  <div className="ml-auto">
                    <Link to={`/vehicle-info/${vehicle.url.split("/").reverse()[1]}`}>
                      <button className="btn btn-outline-primary">Learn more!</button>
                    </Link>
                  </div>
                  <button onClick={() => addToFavorites(vehicle.name)} className="btn btn-outline-warning">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No, I am your father...</p>
        )}
      </div>
    </div>
  );
};

export default Vehicles;