import React from "react";

function BookCab() {
  return (
    <div className="book-cab-wrapper">
      <div className="book-cab-content">
        <div className="row">
          <div className="book-cab-left col-12 col-md-6">
            <h1 className="book-title">
              BOOK <span className="italic-text">A CAB</span>
            </h1>
            <p className="book-description">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a...
            </p>
            <ul className="book-features">
              <li>✅ Super & reliable services</li>
              <li>✅ 24 x 7 customer support provide</li>
              <li>✅ Large Range of Car Models</li>
              <li>✅ GPS Tracking and help</li>
              <li>✅ Powerful Security Offer</li>
            </ul>
            <div className="button-group">
              <button className="btn btn-outline-light contact-us">CONTACT US</button>
              <button className="btn btn-outline-light about-us">ABOUT US</button>
            </div>
          </div>
          <div className="book-cab-right col-12 col-md-6">
            <div className="form-container">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Select Vehicle"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pick-up Location"
                    />
                  </div>
                  <div className="col">
                    <input type="datetime-local" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Drop-off Location"
                    />
                  </div>
                  <div className="col">
                    <input type="datetime-local" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="cabType"
                        id="regularCab"
                      />
                      <label className="form-check-label" htmlFor="regularCab">
                        <i className="bi bi-car-front-fill"></i>
                        <span style={{ marginLeft: 5 }}>Regular Cab</span>{" "}
                        <br /> <b>$50</b> <br /> 1 Passenger
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="cabType"
                        id="proCab"
                      />
                      <label className="form-check-label" htmlFor="proCab">
                        <i className="bi bi-car-front-fill"></i>
                        <span style={{ marginLeft: 5 }}>
                          Pro Cab
                        </span> <br /> <b>$120</b> <br /> 3 Passengers
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="cabType"
                        id="advancedCab"
                      />
                      <label className="form-check-label" htmlFor="advancedCab">
                        <i className="bi bi-car-front-fill"></i>
                        <span style={{ marginLeft: 5 }}>Advanced Cab</span>{" "}
                        <br />
                        <b>$180</b> <br /> 4 Passengers
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <button type="submit" className="btn btn-dark">
                    SUBMIT FORM
                  </button>
                  <button
                    type="reset"
                    className="btn btn-light"
                    style={{ marginLeft: 10 }}
                  >
                    RESET
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCab;
