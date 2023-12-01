import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;

  const removeFavorite = (name) => {
    actions.removeFavorite(name);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
          alt="Star Wars Logo"
          style={{ width: '100px', height: 'auto' }}
        />
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="favoritesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <span className="badge bg-secondary">{favorites.length}</span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
            {favorites.length === 0 ? (
              <li>
                <span className="dropdown-item">No favorites added yet</span>
              </li>
            ) : (
              favorites.map((favorite, index) => (
                <li key={index}>
                  <span className="dropdown-item">
                    {favorite}
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => removeFavorite(favorite)}
                    >
                      X
                    </button>
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};