import React from "react";
import Header from "../../LayOut/Header/Header";
import BookingForm from "../BookingForm/BookingForm";
import Content from "../Content/Content";
import car1 from "../../../Assest/ppf/ppf2.JPG";
import car2 from "../../../Assest/imhg_optimized.jpg";
import Footer from "../../LayOut/Footer/Footer";
import banner from "../../../Assest/ppf/ppf.JPG";
import OptionalExtras from "../../../Assest/clientimage/OptionalExtras.jpg";
import HowLongDoesItTake from "../../../Assest/clientimage/HowLongDoesItTake.jpg";
import VehicleSizesone from "../../../Assest/price2car.jpg";
import CermaicCoatingone from "../../../Assest/CermaicCoatingone.jpg";
import PlatinuInterior from "../../../Assest/clientimage/PlatinuInterior.png";

const CermaicCoating = () => {
  const contentData = {
    banner:"../../../Assest/ppf/ppf.JPG",
    title: "CERAMIC COATINGS\nSMALL TO MEDIUM VEHICLE - $795\nLARGE VEHICLE - $895",
    description: (
      <>    
      <div className="row custom-div-main"> 
      <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-lg-5 pe-sm-0 pe-md-5">       
        <h3 className="pb-3">Optional Extras</h3>
        <ul>
          <li>Second coat: +$600</li>
          <li>Ceramic window tint: +$445</li>
          <li>Interior coating on leather/vinyl: +$300</li>
          <li>Interior coating on leather/vinyl & fabric: +$445</li>
          <li>Rims coating: +$245</li>
          <li>Glass coating: +$195</li>
          <li>Tyre seal: +$195</li>
          <li>Coating on trims: +$145</li>
        </ul>
        <p>Package 2 or more coatings together and receive a discount. Contact us now.</p>
      </div>  
      <div className="col-12 col-lg-6 col-md-6 custom-image">
        <div className="side-image">
            <img src={OptionalExtras}></img>
        </div>
      </div>
      
      <div className="col-12 col-lg-6 col-md-6 custom-image pe-0 pe-lg-5 pe-sm-0 pe-md-5">
        <div className="side-image">
            <img src={HowLongDoesItTake}></img>
        </div>
      </div>   
      <div className="col-12 col-lg-6 col-md-6 custom-conetent">
        <h3 className="pb-3"><strong>How long does it take?</strong></h3>
       <ul>
          <li>Minimum 24 hours. Drop your car off in the morning and it will be ready for collection the next morning.</li>
        </ul>
        <p><strong>Warranty</strong></p>
        <ul>
          <li>5-year warranty on paint coating</li>
          <li>Lifetime warranty on window tint</li>
        </ul>
        <p><strong>Coating + Window Tint Offer</strong></p>
        <ul>
          <li>$1195 for Small/Medium Vehicle</li>
          <li>$1395 for Large Vehicle</li>
        </ul>
        <p><strong>Products Used</strong></p>
        <ul>
          <li>Paint - 1 coat: GTECHNIQ CSL, 5-year protection</li>
          <li>Paint - 2x coat: GTECHNIQ EXO 5, 7-year total protection</li>
          <li>Leather/Vinyl: CARPRO CQUARTZ Leather 2.0, 2-year protection</li>
          <li>Fabric: GTECHNIQ Smart Fabric Anti Bacterial, 18-month protection</li>
          <li>Rims: GTECHNIQ C5 Wheel Armour, 2-year protection</li>
          <li>Glass: GTECHNIQ G1 ClearVision Smart Glass, 2-year durability</li>
          <li>Window tint: Black Armour Elite Ceramic (Lifetime Warranty)</li>
        </ul>
      </div> 

        <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-lg-5 pe-sm-0 pe-md-5">       
        <h3 className="pb-3"><strong>Vehicle Sizes</strong></h3>
        <ul>
          <li>Small to Medium: BMW X4, Tesla Model Y, Mercedes C63, Holden HVS GTS</li>
          <li>Large: BMW X5, Mercedes GLE63, Ford Ranger, Land Rover Defender</li>
        </ul>
        <p>We are usually booked out 1-2 weeks in advance. Please contact us to book.</p>
        
      </div>
      <div className="col-12 col-lg-6 col-md-6 custom-image">
        <div className="side-image">
            <img src={VehicleSizesone}></img>
        </div>
      </div>

      <div className="col-12 col-lg-6 col-md-6 custom-image">
        <div className="side-image">
            <img src={car2}></img>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-sm-0 ps-md-5">    
        <h3 className="pb-3"><strong>Gold Exterior Package from $1345</strong></h3>
        <p>For mobile service - You must have a garage the service can be completed in.</p>
        <ul>
          <li>A complete interior & exterior protection package with 6 separate ceramic coating products applied to all external and internal areas of your vehicle offering the ultimate ceramic protection.</li>
          <li>$1595 for small / medium vehicles</li>
          <li>$1795 for large vehicles</li>
          <li>24 hours time commitment.</li>
          <li>Services include paint correction & gloss enhancement, exterior glass polished, exterior detail, tyre & rim scrub and contaminant removal, interior detail, application of 6 coatings.</li>
        </ul>
      </div> 
      
      
      <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-sm-0 pe-md-5"> 
        <h3 className="pb-3"><strong>Platinum Interior & Exterior Package from $1595</strong></h3>   
        <p>For mobile service - You must have a garage the service can be completed in.</p>
        <ul>
          <li>A complete interior & exterior protection package with 6 separate ceramic coating products applied to all external and internal areas of your vehicle offering the ultimate ceramic protection.</li>
          <li>$1595 for small / medium vehicles</li>
          <li>$1795 for large vehicles</li>
          <li>24 hours time commitment.</li>
          <li>Services include paint correction & gloss enhancement, exterior glass polished, exterior detail, tyre & rim scrub and contaminant removal, interior detail, application of 6 coatings.</li>
        </ul>
       
      </div> 
      <div className="col-12 col-lg-6 col-md-6 custom-image">
        <div className="side-image">
            <img src={PlatinuInterior}></img>
        </div>
      </div>
     </div> 
     <div className="last-row">
        <p>Coatings provide 5-year protection on paint, 2 years of protection on glass, rims, leather, & vinyl, and 12-18 months of protection on fabric. Incredible shine, protection of surfaces and easier maintenance.</p>
        <p>Small surcharge may be applied depending on vehicle's conditions.</p>
     </div>
        {/* <p><strong>Optional Extras</strong></p>
        <ul>
          <li>Second coat: +$600</li>
          <li>Ceramic window tint: +$445</li>
          <li>Interior coating on leather/vinyl: +$300</li>
          <li>Interior coating on leather/vinyl & fabric: +$445</li>
          <li>Rims coating: +$245</li>
          <li>Glass coating: +$195</li>
          <li>Tyre seal: +$195</li>
          <li>Coating on trims: +$145</li>
        </ul>
        <p>Package 2 or more coatings together and receive a discount. Contact us now.</p>
        <p><strong>How long does it take?</strong></p>
        <ul>
          <li>Minimum 24 hours. Drop your car off in the morning and it will be ready for collection the next morning.</li>
        </ul>
        <p><strong>Warranty</strong></p>
        <ul>
          <li>5-year warranty on paint coating</li>
          <li>Lifetime warranty on window tint</li>
        </ul>
        <p><strong>Coating + Window Tint Offer</strong></p>
        <ul>
          <li>$1195 for Small/Medium Vehicle</li>
          <li>$1395 for Large Vehicle</li>
        </ul>
        <p><strong>Products Used</strong></p>
        <ul>
          <li>Paint - 1 coat: GTECHNIQ CSL, 5-year protection</li>
          <li>Paint - 2x coat: GTECHNIQ EXO 5, 7-year total protection</li>
          <li>Leather/Vinyl: CARPRO CQUARTZ Leather 2.0, 2-year protection</li>
          <li>Fabric: GTECHNIQ Smart Fabric Anti Bacterial, 18-month protection</li>
          <li>Rims: GTECHNIQ C5 Wheel Armour, 2-year protection</li>
          <li>Glass: GTECHNIQ G1 ClearVision Smart Glass, 2-year durability</li>
          <li>Window tint: Black Armour Elite Ceramic (Lifetime Warranty)</li>
        </ul>
        <p><strong>Vehicle Sizes</strong></p>
        <ul>
          <li>Small to Medium: BMW X4, Tesla Model Y, Mercedes C63, Holden HVS GTS</li>
          <li>Large: BMW X5, Mercedes GLE63, Ford Ranger, Land Rover Defender</li>
        </ul>
        <p>We are usually booked out 1-2 weeks in advance. Please contact us to book.</p>
        <p><strong>Gold Exterior Package from $1345</strong></p>
        <p>For mobile service - You must have a garage the service can be completed in.</p>
        <ul>
          <li>A complete exterior protection package with 4 separate ceramic coatings products applied to all exterior surfaces.</li>
          <li>Areas coated: Paint, trims, lights, grill, mirrors, glass, rims, and tyres.</li>
          <li>$1345 for small/medium vehicles</li>
          <li>$1645 for large vehicles</li>
          <li>24 hours time commitment.</li>
          <li>Services include paint correction & gloss enhancement, exterior glass polished, exterior detail, tyre & rim scrub and contaminant removal, application of 4 coatings, and interior vacuum.</li>
        </ul>
        <p>Coatings provide 5-year protection on paint, 2-year protection on glass, and 2-year protection on rims. Incredible shine, protection of surfaces and easier maintenance.</p>
        <p><strong>Platinum Interior & Exterior Package from $1595</strong></p>
        <p>For mobile service - You must have a garage the service can be completed in.</p>
        <ul>
          <li>A complete interior & exterior protection package with 6 separate ceramic coating products applied to all external and internal areas of your vehicle offering the ultimate ceramic protection.</li>
          <li>$1595 for small / medium vehicles</li>
          <li>$1795 for large vehicles</li>
          <li>24 hours time commitment.</li>
          <li>Services include paint correction & gloss enhancement, exterior glass polished, exterior detail, tyre & rim scrub and contaminant removal, interior detail, application of 6 coatings.</li>
        </ul>
        <p>Coatings provide 5-year protection on paint, 2 years of protection on glass, rims, leather, & vinyl, and 12-18 months of protection on fabric. Incredible shine, protection of surfaces and easier maintenance.</p>
        <p>Small surcharge may be applied depending on vehicle's conditions.</p> */}
      </>
    ),
    imgHeading1: "Thorough Cleaning and Decontamination",
    imgHeading2: "Paint Correction and Restoration",
    imgHeading3: "Protective Coatings and Sealants",
    Image1: car1,
    Image2: car2,
    ServiceTitle: "Ceramic Coating"
  };
  return (
    <>
    <Header />
      {/* <h1>Interior Detailing</h1> */}
      <section className="CermaicCoating-page-bg before-class">
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

export default CermaicCoating;
