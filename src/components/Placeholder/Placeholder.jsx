import React from "react"
import "./Placeholder.css"

export default function Placeholder() {
  return (
    <div>
      <div className="card-container">
        <div className="card-image">
          <img className="placeholder" />
        </div>
        <div className="card-header">
          <h3 className="placeholder"></h3>
        </div>
        <div className="footer-content">
          <div className="price-container">
            <p className="placeholder"></p>
          </div>
          <div className="button-skeleton">
            <div className="placeholder"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <div>
<div className="card-container">
  <div className="card-image">
    <img className="placeholder" />
  </div>
  <div className="card-header">
    <h3 className="placeholder"></h3>
  </div>
  <div className="card-content">
    <div className="card-text">
      <p className="placeholder"></p>
      <p className="placeholder"></p>
    </div>
    <div className="button-1"></div>
  </div>
</div>
</div> */
}
