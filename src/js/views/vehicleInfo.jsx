import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const VehicleInfo = () => {
  const { id } = useParams();
  const [vehicleInfo, setVehicleInfo] = useState(null);

  useEffect(() => {
    const fetchVehicleInfo = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/vehicles/${id}/`);
        const data = await response.json();
        setVehicleInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVehicleInfo();
  }, [id]);

  return (
    <div className="vehicle-info">
      {vehicleInfo ? (
        <>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://st2.depositphotos.com/1752660/9463/i/450/depositphotos_94633320-stock-photo-spaceship-on-black-with-blue.jpg"
                alt={vehicleInfo.name}
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h2>{vehicleInfo.name}</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde ex eum omnis, inventore natus nulla illum quam error similique ad, ipsa iusto quasi modi odio sed iste! Quaerat, laudantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tempora quam, consequatur odit in deserunt dolore expedita, officia, perferendis iste magni molestiae error repudiandae nam ducimus sapiente asperiores dicta enim.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <hr />
            <p>
              <strong>Name:</strong> {vehicleInfo.name}
            </p>
            <p>
              <strong>Model:</strong> {vehicleInfo.model}
            </p>
            <p>
              <strong>Manufacturer:</strong> {vehicleInfo.manufacturer}
            </p>
            <p>
              <strong>Cost in Credits:</strong> {vehicleInfo.cost_in_credits}
            </p>
            <p>
              <strong>Length:</strong> {vehicleInfo.length}
            </p>
            <p>
              <strong>Max Atmosphering Speed:</strong> {vehicleInfo.max_atmosphering_speed}
            </p>
            <p>
              <strong>Crew:</strong> {vehicleInfo.crew}
            </p>
          </div>
        </>
      ) : (
        <p>Its a trap!</p>
      )}
    </div>
  );
};

export default VehicleInfo;