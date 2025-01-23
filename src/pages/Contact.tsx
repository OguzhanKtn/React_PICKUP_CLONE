import React from "react";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="row">
        {/* Contact Info */}
        <div className="col-12 col-lg-3 contact-info">
          <h2 className="mb-4">
            <b style={{ color: "#fad634" }}>CONTACT</b>
          </h2>
          <h6>HEAD OFFICE</h6>
          <p>
            40 Street No, Evenue Building <br />
            Airport Country, 012-213
          </p>
          <p>
            <i className="bi bi-headphones" /> (99) 999 - 888 - 12
          </p>
          <p>
            <i className="bi bi-printer-fill" /> 123 - 456 - 7890
          </p>
          <p>
            <i className="bi bi-envelope" /> support@pickup.com
          </p>
          <p>
            <i className="bi bi-briefcase-fill" /> career@pickup.com
          </p>
          <div className="social-icons mt-4">
            <i className="bi bi-facebook mx-2" />
            <i className="bi bi-twitter mx-2" />
            <i className="bi bi-youtube mx-2" />
            <i className="bi bi-linkedin mx-2" />
            <i className="bi bi-pinterest mx-2" />
          </div>
        </div>

        {/* Form Card */}
        <div className="col-12 col-lg-5">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <h6 className="card-title-form">TOLL-FREE (99) 999 - 888 -22</h6>
              <p>IF YOU HAVE A QUESTION ? FILL THE FORM</p>
              <form>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control my-3"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control my-3"
                />
                <textarea
                  placeholder="Type message"
                  rows={5}
                  className="form-control my-3"
                />
                <button
                  type="button"
                  className="btn btn-warning w-100 text-dark fw-bold"
                >
                  <i className="bi bi-send" /> SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-12 col-lg-4">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25523.268280651748!2d30.678039660628585!3d36.904495421890985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1str!2str!4v1737567718966!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
