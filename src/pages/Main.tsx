import React from 'react'

function Main() {
  return (
    <div className="" id="firstPage">
        <div className="row">
        <hr/>
          <div className="col-2"/>
          <div className="col">
            <p style={{marginTop:20}}>
              REACH YOUR <strong>DESTINATIONS</strong>
            </p>
            <h1 style={{ marginTop: "30px", fontSize: "85px" }}>
              <strong className='d-flex'>
                LET'S
                <span style={{
                  color: "#fcdf35",
                  border: "none", 
                  borderRadius: "50%", 
                  backgroundColor: "#2b2b2b", 
                  width: "100px", 
                  height: "100px",
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  fontSize: "55px", 
                  fontWeight: "bold",
                  marginLeft:10
                }}>
                  GO
                </span>
              </strong>
            </h1>
            <h2>
              START AT $5 <sup>/K.M</sup>
            </h2>
            <p style={{ fontFamily: "Calibri", marginTop: 50 }}>
              There are many variations of passages of Lorem Ipsum
              <br />
              available,but the majority.
            </p>
            <button
              type="button"
              className="btn btn-outline-secondary"
              style={{
                backgroundColor: "azure",
                borderRadius: 0,
                border: 0,
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                  fontFamily: 'Calibri Light'
              }}
            >
              <b>BOOK NOW</b>
            </button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <img src="images/taxi.png" style={{padding:10}} />
              </div>
        </div>
      </div>
  )
}

export default Main