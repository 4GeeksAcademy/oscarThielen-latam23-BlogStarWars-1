import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterInfo = () => {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState(null);

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const data = await response.json();
        setCharacterInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacterInfo();
  }, [id]);

  return (
    <div className="character-info">
      {characterInfo ? (
        <>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://cdn.pixabay.com/photo/2015/09/04/18/55/yoda-922520_640.png"
                alt={characterInfo.name}
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h2>{characterInfo.name}</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde ex eum omnis, inventore natus nulla illum quam error similique ad, ipsa iusto quasi modi odio sed iste! Quaerat, laudantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit tempora quam, consequatur odit in deserunt dolore expedita, officia, perferendis iste magni molestiae error repudiandae nam ducimus sapiente asperiores dicta enim.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <hr />
            <p>
              <strong>Name:</strong> {characterInfo.name}
            </p>
            <p>
              <strong>Birth Year:</strong> {characterInfo.birth_year}
            </p>
            <p>
              <strong>Gender:</strong> {characterInfo.gender}
            </p>
            <p>
              <strong>Height:</strong> {characterInfo.height} cm
            </p>
            <p>
              <strong>Skin Color:</strong> {characterInfo.skin_color}
            </p>
            <p>
              <strong>Eye Color:</strong> {characterInfo.eye_color}
            </p>
          </div>
        </>
      ) : (
        <p>Chewy I have a bad feeling about this...</p>
      )}
    </div>
  );
};

export default CharacterInfo;