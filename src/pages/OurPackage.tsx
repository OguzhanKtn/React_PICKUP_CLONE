import React from "react";

function OurPackage() {
  return (
    <>      
      <div className="our-package-wrapper">
        <div className="our-package-content">
          <h2>
            <b style={{ color: "#fad648" }}>OUR</b>{" "}
            <span style={{ fontWeight: 10, color: "#ffff" }}>PACKAGE</span>
          </h2>
          <p style={{ fontSize: 12, color: "#ffff" }}>AUTOROOM</p>
        </div>
        <div className="row justify-content-center" style={{gap:20}}>
          <div
            className="card col-12 col-md-4"
            style={{
              width: "18rem",
              borderRadius: 0,
            }}
          >
            <i
              className="bi bi-taxi-front"
              style={{ backgroundColor: "gold" }}
            />
            <div className="card-body">
              <div className="container">
                <h5 className="card-title">SUPERIOR</h5>
                <p>
                  <b>$600.0<sup> /7 day</sup></b> 
                </p>
              </div>
              <ul className="list">
                <li style={{}}>CITY TRAVEL PERMIT</li>
                <hr />
                <li style={{}}>AC VEHICLE</li>
                <hr />
                <li style={{}}>3 TOURISM PLACE</li>
                <hr />
                <li style={{}}>TOURIST GUIDE</li>
                <hr />
                <li style={{}}>QUALITY VEHICLES</li>
                <hr />
              </ul>
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{
                  backgroundColor: "gold",
                  marginLeft: 70,
                  borderRadius: 0,
                  border: 0,
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                  fontFamily: '"Calibri Light"',
                }}
              >
                <b>GET NOW</b>
              </button>
            </div>
          </div>
          <div className="card col-12 col-md-4" style={{ width: "18rem", borderRadius: 0 }}>
            <i
              className="bi bi-taxi-front"
              style={{ backgroundColor: "gold" }}
            />
            <div className="card-body">
              <div className="container">
                <h5 className="card-title">EXCLUSIVE</h5>
                <p>
                <b>$900.0<sup> /15 day</sup></b> 
                </p>
              </div>
              <ul className="list">
                <li style={{}}>CITY TRAVEL PERMIT</li>
                <hr />
                <li style={{}}>AC VEHICLE</li>
                <hr />
                <li style={{}}>3 TOURISM PLACE</li>
                <hr />
                <li style={{}}>TOURIST GUIDE</li>
                <hr />
                <li style={{}}>QUALITY VEHICLES</li>
                <hr />
              </ul>
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{
                  backgroundColor: "gold",
                  marginLeft: 70,
                  borderRadius: 0,
                  border: 0,
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                  fontFamily: '"Calibri Light"',
                }}
              >
                <b>GET NOW</b>
              </button>
            </div>
          </div>
          <div className="card col-12 col-md-4" style={{ width: "18rem", borderRadius: 0 }}>
            <i
              className="bi bi-taxi-front"
              style={{ backgroundColor: "gold" }}
            />
            <div className="card-body">
              <div className="container">
                <h5 className="card-title">ADVANCED</h5>
                <p>
                <b>$1500.0<sup> /28 day</sup></b> 
                </p>
              </div>
              <ul className="list">
                <li style={{}}>CITY TRAVEL PERMIT</li>
                <hr />
                <li style={{}}>AC VEHICLE</li>
                <hr />
                <li style={{}}>3 TOURISM PLACE</li>
                <hr />
                <li style={{}}>TOURIST GUIDE</li>
                <hr />
                <li style={{}}>QUALITY VEHICLES</li>
                <hr />
              </ul>
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{
                  backgroundColor: "gold",
                  marginLeft: 70,
                  borderRadius: 0,
                  border: 0,
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                  fontFamily: '"Calibri Light"',
                }}
              >
                <b>GET NOW</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPackage;
