import React, { useState } from "react";

function OurVehicle() {
  const [activeCategory, setActiveCategory] = useState("CAB");

  const categories = ["CAB", "TAXI", "SUV"];

  return (
    <>
      <div className="our-vehicle-wrapper">
        <div className="our-vehicle-header">
          <h2>
            <b>OUR</b>{" "}
            <span style={{ fontWeight: 10, color: "#9b9cab" }}>VEHICLE</span>
          </h2>
          <p style={{ fontSize: 12 }}>AUTOROOM</p>
        </div>
        <div className="category">
          {categories.map((category) => (
            <button
              key={category}
              className={`nav-link ${
                activeCategory === category ? "active-link" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="vehicles">
        <div className="row">
          <div className="card col-12 col-md-4" style={{ width: "14rem" }}>
            <img src="images/audi.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">VEHICLE C1</h5>
              <p className="card-text">
                START FROM $27 <sup>/DAY</sup>
              </p>
              <hr />
              <p className="card-author">DAVID BERGMAN</p>
              <div className="card-rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
          <div className="card col-12 col-md-4" style={{ width: "14rem" }}>
            <img src="images/bmw-2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">VEHICLE C2</h5>
              <p className="card-text">
                START FROM $57 <sup>/DAY</sup>
              </p>
              <hr />
              <p className="card-author">DAVID BERGMAN</p>
              <div className="card-rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
          <div className="card col-12 col-md-4" style={{ width: "14rem" }}>
            <img src="images/bmwpn.png" className="card-img-top" alt="..." />
            <div className="card-body mt-4">
              <h5 className="card-title">VEHICLE C3</h5>
              <p className="card-text">
                START FROM $90 <sup>/DAY</sup>
              </p>
              <hr />
              <p className="card-author">DAVID BERGMAN</p>
              <div className="card-rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
          <div className="card col-12 col-md-4" style={{ width: "14rem" }}>
            <img src="images/indir.png" className="card-img-top" alt="..." />
            <div className="card-body mt-4">
              <h5 className="card-title">VEHICLE C4</h5>
              <p className="card-text">
                START FROM $95 <sup>/DAY</sup>
              </p>
              <hr />
              <p className="card-author">DAVID BERGMAN</p>
              <div className="card-rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurVehicle;
