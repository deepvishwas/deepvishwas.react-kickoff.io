import React, {useEffect} from "react"

export default function Movie({ movie, toggleStatus }) {
 
  useEffect(() => {
    if(!movie.status){
      movie.status = false
    }
  })

  function onChange(e) {
    toggleStatus(movie.id)
  }

  return (
    <div className="alert alert-primary" role="alert">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={onChange}
          checked={movie.status}
        />
        <label className="form-check-label">
          {movie.original_title}
        </label>
      </div>
    </div>
  )
}
