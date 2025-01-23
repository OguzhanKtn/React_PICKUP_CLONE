import React from "react";

function PassengerFeed() {
  return (
    <>
      <div className="passenger-feed-wrapper">
        <div className="row">
        <div className="col-lg-2" />
          <div className="col-12 col-md-6 col-lg-4">
            <h1 style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ color: "#333333" }}>
                <b>PASSENGER</b>
              </span>{" "}
              <b style={{ fontWeight: 12 }}>FEED</b>
            </h1>
            <h5 style={{ display: "flex", alignItems: "center", fontSize: 11 }}>
              <b>WHAT SAY OUR PASSENGER</b>
            </h5>
            <p className="mt-5" style={{ width: 380, fontWeight: 10 }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000.
            </p>
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{
                  backgroundColor: "gold",
                  borderRadius: 0,
                  border: 0,
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                <span style={{ fontSize: 13 }}>ADD YOUR FEED</span>
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{
                  backgroundColor: "white",
                  marginLeft: 30,
                  borderRadius: 0,
                  border: 0,
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                <span style={{ fontSize: 13 }}>VIEW ALL</span>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex gap-3">
              <img
                className="img-responsive"
                src="images/user_img.jpg"
                alt="#"
              />
              <div>
                <p style={{width:350}}><b>Contrary to popular belief, Lorem ipsum is not simply random text.</b></p>
                <span style={{fontSize:12}}><b>Byron Daniel</b></span> <br />
                <span style={{fontSize:10}}><b>Marketing</b></span>  <br/>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
              </div>    
          </div>    
        </div>
      </div>
    </>
  );
}

export default PassengerFeed;
