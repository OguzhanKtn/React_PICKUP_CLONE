import React from "react";

function PickApp() {
  return (
    <>
      <div className="pickapp-wrapper">
        <div className="row">
          <div className="col-12 col-md-8">
            <h1 style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ color: "#ffff", fontWeight: 12, fontSize: 60 }}>
                PICK
              </span>{" "}
              <b style={{ fontSize: 60 }}>APP</b>
            </h1>
            <hr style={{ color: "#ffff", width: 60, border: "2px solid" }} />
            <h3>
              <b>DOWNLOAD</b>{" "}
              <span style={{ fontWeight: 15 }}> APP TO YOUR</span>
            </h3>
            <h2 style={{ marginTop: 80 }}>İPHONE, İPAD & ANDROİD</h2>
            <h4 style={{ color: "#fff" }}>NOW AVAILABLE ON</h4>
            <div style={{ marginTop: 20 }}>
              <button type="button" className="btn btn-dark" style={{borderRadius:7}}>
                <i className="bi bi-google-play">
                  {" "}
                  <span style={{ fontSize: 13 }}>Google Play</span>
                </i>
              </button>
              <button
                type="button"
                className="btn btn-dark"
                style={{ marginLeft: 30,borderRadius:7 }}
              >
                <i className="bi bi-apple">
                  {" "}
                  <span style={{ fontSize: 13 }}>Apple Store</span>
                </i>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex">
            <img src="images/PickUp.png" />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default PickApp;
