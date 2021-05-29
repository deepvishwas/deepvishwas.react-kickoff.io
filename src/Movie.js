import { React, useRef } from "react";

export default function Movie({ movie, toggleStatus }) {
  const movieStatusRef = useRef(false);
  
  function onChange(e) {
    toggleStatus(movie.id);
  }

  return (
    <div className="alert alert-primary" role="alert">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          ref={movieStatusRef}
          type="checkbox"
          onChange={onChange}
          checked={movie.status}
        />
        <label className="form-check-label" for="flexSwitchCheckChecked">
          {movie.name}
        </label>
      </div>
    </div>
  );
}
