import React from "react";
import Header from "../../LayOut/Header/Header";
import BookingForm from "../BookingForm/BookingForm";
import Content from "../Content/Content";
import car1 from "../../../Assest/ext2.JPG";
import car2 from "../../../Assest/pexels-pixabay-326259.jpg";
import Footer from "../../LayOut/Footer/Footer";

const PreSaleDetail = () => {
  const contentData = {
    title: "PRE SALE DETAIL- FROM $395\nTIME = APPROX 4 HOURS",
    description: (
      <>

<div className="row custom-div-main"> 
      <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-lg-5 pe-sm-0 pe-md-5">       
        <h3 className="pb-3">Exterior Inclusions</h3>
        <ul>
          <li>15 Photos taken in correct order of entire vehicle post detail and sent to you on the day</li>
          <li>Snow Foam and hand wash using GYEON Q2m BATHE+</li>
          <li>Full pressure clean & chamois dry</li>
          <li>Number plate covers removed and plates & covers cleaned</li>
          <li>Clay bar treatment to remove contaminants that block wax from sticking to paint (If applicable)</li>
          <li>Tyre soak & deep clean on rims & exhaust tips</li>
          <li>Door/boot jams cleaned</li>
          <li>Fuel door detailed</li>
          <li>Tyres dressed</li>
          <li>Black plastic and rubber trim cleaned</li>
          <li>All windows cleaned</li>
          <li>Full engine bay detailed</li>
        </ul>
        {/* <p>Package 2 or more coatings together and receive a discount. Contact us now.</p> */}
      </div>
      <div className="col-12 col-lg-6 col-md-6 custom-image">
        <div className="side-image">
            <img src={car1}></img>
        </div>
      </div>
      
      <div className="col-12 col-lg-6 col-md-6 custom-image pe-0 pe-lg-5 pe-sm-0 pe-md-5">
        <div className="side-image">
            <img src={car2}></img>
        </div>
      </div>   
      <div className="col-12 col-lg-6 col-md-6 custom-conetent">
        <h3 className="pb-3"><strong>Interior Inclusions</strong></h3>
        <ul>
          <li>Stain and spill removal from floor, seats, roof lining & dash</li>
          <li>Carpet shampoo on all fabric - Seats, floors, doors & boot</li>
          <li>Full interior steam clean sanitisation including seats, doors, carpets, dash, mats & boot</li>
          <li>Floor mats removed and carpet shampooed</li>
          <li>Complete interior and boot vacuum with deep brush out</li>
          <li>All interior plastics cleaned and dressed</li>
          <li>All interior leather cleaned and dressed</li>
          <li>Detail brush out on all vents, dash, console, steering wheel, door buttons & seat controls</li>
          <li>Foot pedals cleaned</li>
          <li>All windows and mirrors cleaned</li>
          <li>Air freshener applied</li>
        </ul>
      </div> 
     </div> 

        {/* <p> The perfect detail package to increase the sale value of your vehicle before selling it. This comes with 15 photos shot in correct order and sent to you on the day for you to advertise with. (Detail includes cut & polish)</p>
        <h3>Exterior Inclusions</h3>
<ul>
  <li>15 Photos taken in correct order of entire vehicle post detail and sent to you on the day</li>
  <li>Snow Foam and hand wash using GYEON Q2m BATHE+</li>
  <li>Full pressure clean & chamois dry</li>
  <li>Number plate covers removed and plates & covers cleaned</li>
  <li>Clay bar treatment to remove contaminants that block wax from sticking to paint (If applicable)</li>
  <li>Tyre soak & deep clean on rims & exhaust tips</li>
  <li>Door/boot jams cleaned</li>
  <li>Fuel door detailed</li>
  <li>Tyres dressed</li>
  <li>Black plastic and rubber trim cleaned</li>
  <li>All windows cleaned</li>
  <li>Full engine bay detailed</li>
</ul>

<h3>Interior Inclusions</h3>
<ul>
  <li>Stain and spill removal from floor, seats, roof lining & dash</li>
  <li>Carpet shampoo on all fabric - Seats, floors, doors & boot</li>
  <li>Full interior steam clean sanitisation including seats, doors, carpets, dash, mats & boot</li>
  <li>Floor mats removed and carpet shampooed</li>
  <li>Complete interior and boot vacuum with deep brush out</li>
  <li>All interior plastics cleaned and dressed</li>
  <li>All interior leather cleaned and dressed</li>
  <li>Detail brush out on all vents, dash, console, steering wheel, door buttons & seat controls</li>
  <li>Foot pedals cleaned</li>
  <li>All windows and mirrors cleaned</li>
  <li>Air freshener applied</li>
</ul>

        <p>SMALL SURCHARGE FOR VEHICLES CONDITIONS OR LARGE SUVS/VANS AND TRUCKS MAY APPLY </p>
        <p>NO CALL OUT FEES WITHIN 20km OF Bendigo</p> */}
     
      </>
    ),
    imgHeading1: "UV Protection",
    imgHeading2: "Heat Reduction",
    imgHeading3: "Privacy and Security",
    Image1: car1,
    Image2: car2,
    ServiceTitle: "Window Tinting"
  };

  return (
    <>
      <Header />
      <section className="presale-bg before-class">
        <div className="container">
          <div className="inner-exterior">
            {/* Possible place for BookingForm or other content */}
          </div>
        </div>
      </section>
      <Content {...contentData} />
      <Footer />
    </>
  );
};

export default PreSaleDetail;

