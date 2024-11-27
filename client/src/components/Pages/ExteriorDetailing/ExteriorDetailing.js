import React from "react";
import Header from "../../LayOut/Header/Header";
import Content from "../Content/Content";
import car2 from "../../../Assest/ExteriorDetailing/ext2.JPG";
import Footer from "../../LayOut/Footer/Footer";
// import car1 from "../../../Assest/ExteriorDetailing/ext1.JPG"
import service1 from "../../../Assest/clientimage/service1.JPG"

const ExteriorDetailing = () => {
  const contentData = {
    title: "DIAMOND EXTERIOR FROM - $399",
    description: (
      <>
        {/* Job would take APPROX 3 HOURS. A professional wash and cut and polish to revive the gloss and brilliance on your vehicle's paint.
        <ul className="ps-3 detailed-list">
          <li>Snow Foam and hand washed</li>
          <li>2 stage cut and polish</li>
          <li>Clay bar treatment to remove contaminants that block wax from sticking to paint</li>
          <li>Full pressure clean & Chamois dry</li>
          <li>Tyre soak & Deep alloy cleanse on rims/exhaust tips/trays & side steps</li>
          <li>Door boot jams and mirrors cleaned</li>
          <li>Fuel door detailed</li>
          <li>Tyres dressed</li>
          <li>Black plastic and rubber trim cleaned</li>
          <li>All windows cleaned</li>
        </ul>
        SMALL SURCHARGE CAN BE APPLIED UPON VEHICLE'S CONDITION OR LARGE SUVS/VANS AND TRUCKS.
        <br />
        EXTRA SERVICES WE OFFER */}
            <div className="row custom-div-main gy-5"> 
        <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-lg-5 pe-sm-0 pe-md-5">
          <p>Job would take APPROX 3 HOURS. A professional wash and cut and polish to revive the gloss and brilliance on your vehicle's paint.</p> 
          <ul>
            <li>Snow Foam and hand washed</li>
            <li>2 stage cut and polish</li>
            <li>Clay bar treatment to remove contaminants that block wax from sticking to paint</li>
            <li>Full pressure clean & Chamois dry</li>
            <li>Tyre soak & Deep alloy cleanse on rims/exhaust tips/trays & side steps</li>
            <li>Door boot jams and mirrors cleaned</li>
            <li>Fuel door detailed</li>
            <li>Tyres dressed</li>
            <li>Black plastic and rubber trim cleaned</li>
            <li>All windows cleaned</li>
          </ul>
          <p>SMALL SURCHARGE CAN BE APPLIED UPON VEHICLE'S CONDITION OR LARGE SUVS/VANS AND TRUCKS.
</p>
<h3>EXTRA SERVICES WE OFFER</h3>
<ul>
<li>Sign removal from cars, vans and work trucks.</li>
<li>Complete removal of signs,  polish of paintwork and rejuvenation of trimming to restore to original condition.</li>
<li>Overspray removal from cars, vans and work trucks.</li>
<li>Safely remove paint, lacquer and more. </li>
<li>PLEASE CONTACT US TODAY FOR A CUSTOM QUOTE</li>
</ul>
        </div>
        <div className="col-12 col-lg-6 col-md-6 custom-image">
          <div className="side-image">
              <img src={service1}></img>
          </div>
        </div>  
       </div>
      </>
    ),
      imgHeading1: "Washing and Decontamination",
      imgHeading2: "Paint Correction",
      imgHeading3: "Trim and Wheel Detailing",
      // Image1: car1,
      Image2: car2,
      ServiceTitle: "Exterior Detailing"
    ,    
    imgHeading1: "Washing and Decontamination",
    imgHeading2: "Paint Correction",
    imgHeading3: "Trim and Wheel Detailing",
    // Image1: car1,
    Image2: car2,                  
    ServiceTitle: "Exterior Detailing"
  };

  return (
    <>
      <Header />
      {/* <h1>Exterior Detailing</h1> */}
      <section className="exterior-page-bg before-class">
          <div className="container">
              <div className="inner-exterior">

              </div>
          </div>
      </section>
      <Content {...contentData} />
      <Footer />
    </>
  );
};

export default ExteriorDetailing;
