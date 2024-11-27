import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../LayOut/Footer/Footer";
import Header from "../../LayOut/Header/Header";


const Mailcont = () => {
  return (
    <>
      <Header />
      <div className="container-fluid mw-100 p-0 overflow-hidden">
        <section className="mail-contact-section">
          <div className="container">
               <div className="inner-mail-contact">
               <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Contact Us</h2>
                <p className="text-muted">
                  For inquiries, please leave your email and phone number, and we'll get back to you as soon as possible.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                  <div className="mail-contact-buttons">
                  <div className="contact-item email-us-btn">
                  <Link to="mailto:detailingmastersvic@gmail.com" className="btn btn-primary btn-block">
                    <i className="far fa-envelope"></i> Email Us
                  </Link>
                </div>

                <div className="contact-item call-us-btn">
                  <Link to="tel:+61499382622" className="btn btn-primary btn-block">
                    <i className="fa fa-phone-alt"></i> Call Us
                  </Link>
                </div>
                  </div>
              </div>
            </div>
               </div>
          </div>
        </section>
        <Footer />
      </div>
   
    </>
  );
};

export default Mailcont;
