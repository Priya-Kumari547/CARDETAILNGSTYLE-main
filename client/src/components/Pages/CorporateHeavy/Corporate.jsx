import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import benifits_coverimg from "../../../Assest/benifits_coverimg.jpeg";
import Header from "../../LayOut/Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../../LayOut/Footer/Footer";

const Corporate = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSeePackages = () => {
    navigate("/mailcont"); // Navigate to the Pricing component when "See Packages" is clicked
  };

  const toggleMoreLess = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Header />
      <section className="corporate-page-bg before-class">
          <div className="container">
              <div className="inner-exterior">
              </div>
          </div>
      </section>
      <div className="master_benefits">
        <div className="container">      
          <h1 className="heading mb-3 mt-0" data-aos="fade-up">CORPORATE & HEAVY VEHICLES</h1>
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="content-column m-0 p-0 corporate_img">
                <img
                  src={benifits_coverimg}
                  alt=""
                  className="rounded img-fluid"
                  data-aos="fade-right"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="corporate-content">
                <div className="benefit" data-aos="fade-up" data-aos-delay="200">
                  <div className="benefit_inner">
                    <FontAwesomeIcon icon={faTruck} className="icon" />
                    <h4>Welcome to our corporate and heavy vehicles section</h4>
                  </div>
                  <p className="py-3">
                  <h5>FREE ON SITE ASSESSMENT</h5>
                    If your company is looking to have multiple vehicles detailed, please email or call us for a FREE ONSITE ASSESSMENT & custom quote. We will discuss your company vehicles' needs and personally come out and visit your fleet or even see one of your vehicles to assess what's needed and provide a custom quote on the spot.
                    Our team can handle small, medium & large fleets, delivering high-quality detailing to large amounts of vehicles in a short amount of time.
                  </p>
                  <Button className="see-packegs btn-custom" variant="primary" onClick={handleSeePackages}>
                    See Packages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Corporate;
