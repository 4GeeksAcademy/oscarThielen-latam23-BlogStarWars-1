import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlanetInfo = () => {
  const { id } = useParams();
  const [planetInfo, setPlanetInfo] = useState(null);

  useEffect(() => {
    const fetchPlanetInfo = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
        const data = await response.json();
        setPlanetInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlanetInfo();
  }, [id]);

  return (
    <div className="planet-info">
      {planetInfo ? (
        <>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://public.blenderkit.com/thumbnails/assets/84b7387fe3a246f79cc0385584f97121/files/thumbnail_806db815-1535-45ec-8f24-dbb3a7729e7b.png.256x256_q85.png.webp?webp_generated=1646019400"
                alt={planetInfo.name}
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h2>{planetInfo.name}</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde ex eum omnis, inventore natus nulla illum quam error similique ad, ipsa iusto quasi modi odio sed iste! Quaerat, laudantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tempora quam, consequatur odit in deserunt dolore expedita, officia, perferendis iste magni molestiae error repudiandae nam ducimus sapiente asperiores dicta enim.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <hr />
            <p>
              <strong>Name:</strong> {planetInfo.name}
            </p>
            <p>
              <strong>Climate:</strong> {planetInfo.climate}
            </p>
            <p>
              <strong>Terrain:</strong> {planetInfo.terrain}
            </p>
            <p>
              <strong>Population:</strong> {planetInfo.population}
            </p>
            <p>
              <strong>Gravity:</strong> {planetInfo.gravity}
            </p>
            <p>
              <strong>Orbital Period:</strong> {planetInfo.orbital_period}
            </p>
          </div>
        </>
      ) : (
        <p>Hello there...</p>
      )}
    </div>
  );
};

export default PlanetInfo;