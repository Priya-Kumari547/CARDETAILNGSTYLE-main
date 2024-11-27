import React from 'react';
import Header from "../../LayOut/Header/Header";
import Content from "../Content/Content";
import Footer from "../../LayOut/Footer/Footer";
import car1 from "../../../Assest/interior.jpg";
// import car3 from "../../../Assest/ExteriorDetailing/ext1.JPG"
import car2 from "../../../Assest/1st.jpg";
import ai from "../../../Assest/ai-generated-car-washing-advertisment-background-with-copy-space-free-photo.jpg"
import INCLUSIONSEXTERIOR from "../../../Assest/clientimage/INCLUSIONSEXTERIOR.jpg";
import INTERIORINCLUSIONS from "../../../Assest/clientimage/INTERIORINCLUSIONS.jpg";
import EXTERIORINCLUSIONSone from "../../../Assest/car-coating.jpg";
import INTERIORINCLUSIONSone from "../../../Assest/clientimage/INTERIORINCLUSIONSone.jpg";
import DIAMONDCERAMICWAXDETAIL from "../../../Assest/clientimage/DIAMONDCERAMICWAXDETAIL.jpg";
import ExteriorInteriorD from "../../../Assest/clientimage/Exterior&InteriorD.jpg";
import Grayyys from "../../../Assest/Grayyys.webp"
function exteriorinterior() {

const contentData = {
    title: "RUBY DETAIL - FROM $99",
    
    description: (
      <>
        <div className='top-heading-content'>
          <p className='approx-hour'>TIME = APPROX 2 HOURS</p>
          <p>SMALL SURCHARGE FOR VEHICLE CONDITIONS AND PET HAIR REMOVAL OR LARGE SUVS/VANS AND TRUCKS MAY APPLY.</p>
         <p>SUMMARY- A complete refresh of your vehicle inside and out, using professional detailing products to enhance and protect your cars interior and exterior</p>
        </div>
        <div className="row custom-div-main"> 
        <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-lg-5 pe-sm-0 pe-md-5">   
          <h3 className="pb-3">INCLUSIONS - EXTERIOR</h3>
          <ul>
            <li>Snow Foam and hand wash.</li>
            <li>Tyre soak & deep clean</li>
            <li>Tyres dressed</li>
            <li>All windows cleaned</li>
          </ul>
        
        </div>
        <div className="col-12 col-lg-6 col-md-6 custom-image">
          <div className="side-image">
              <img src={ai}></img>
          </div>
        </div>
        
        <div className="col-12 col-lg-6 col-md-6 custom-image pe-0 pe-lg-5 pe-sm-0 pe-md-5">
          <div className="side-image">
            <img src={Grayyys}></img>
          </div>
        </div>   
        <div className="col-12 col-lg-6 col-md-6 custom-conetent">
        <h3 className="pb-3">INCLUSIONS - INTERIOR</h3>
          <ul>
              <li>Complete interior and boot vacuum with deep brush out</li>
              <li>All interior plastics cleaned</li>
              <li>All interior leather cleaned</li>
              <li>All interior & exterior windows and mirrors cleaned</li>
          </ul>
          {/* <p>SMALL SURCHARGE FOR VEHICLE CONDITIONS OR LARGE SUVS/VANS AND TRUCKS MAY APPLY.</p> */}
        </div>    

       <div>
        <h1 className='mb-3 mb-lg-4 section-title silver-detail-text'>SILVER DETAIL - FROM $349 </h1>
        <p className='approx-hour'>TIME = APPROX 4.5 HOURS</p>
        
      <p>SMALL SURCHARGE FOR VEHICLE CONDITIONS AND PET HAIR REMOVAL OR LARGE SUVS/VANS AND TRUCKS MAY APPLY.</p>
        <div className='top-heading-content'>
            <div className='row'>
                 <div className='col-12 col-lg-6 col-md-6 col-sm-6'>
                 <p>SUMMARY- A complete refresh of your vehicle inside and out, using professional detailing products to enhance and protect your cars interior and exterior</p>
                 </div>

                 <div className='col-12 col-lg-6 col-md-6 col-sm-6'>

                 </div>
            </div>
        </div>
        <div className="row custom-div-main"> 
        <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-lg-5 pe-sm-0 pe-md-5">   
          <h3 className="pb-3">INCLUSIONS - EXTERIOR</h3>
          <ul>
            <li>Snow Foam and hand wash using GYEON Q2m BATHE+ the world’s first pH-neutral SiO2 based car wash shampoo.</li>
            <li>Full pressure clean & chamois dry</li>
            <li>Tyre soak & deep clean on rims & exhaust tips</li>
            <li>Door/boot jams and mirrors cleaned</li>
            <li>Fuel door detailed</li>
            <li>Tyres dressed</li>
            <li>Black plastic and rubber trim cleaned</li>
            <li>All windows cleaned</li>
          </ul>
        
        </div>
      
        <div className="col-12 col-lg-6 col-md-6 custom-image">
          <div className="side-image">
              <img src={INCLUSIONSEXTERIOR}></img>
          </div>
        </div>
        
        <div className="col-12 col-lg-6 col-md-6 custom-image pe-0 pe-lg-5 pe-sm-0 pe-md-5">
          <div className="side-image">
            <img src={INTERIORINCLUSIONS}></img>
          </div>
        </div>   
        <div className="col-12 col-lg-6 col-md-6 custom-conetent">
        <h3 className="pb-3">INCLUSIONS - INTERIOR</h3>
          <ul>
              <li>Stain and spill removal from floor, seats & dash</li>
              <li>Carpet shampoo on all fabric - Seats, floors, doors, boot</li>
              <li>Full interior steam clean sanitisation including seats, doors, carpets, dash, mats & boot</li>
              <li>Floor mats removed and carpet shampooed</li>
              <li>Complete interior and boot vacuum with deep brush out</li>
              <li>All interior plastics cleaned and dressed</li>
              <li>All interior leather cleaned and dressed</li>
              <li>Detail brush out on all vents, dash, console, steering wheel, door buttons & seat controls</li>
              <li>Foot pedals cleaned</li>
              <li>All interior & exterior windows and mirrors cleaned</li>
          </ul>
          {/* <p>SMALL SURCHARGE FOR VEHICLE CONDITIONS OR LARGE SUVS/VANS AND TRUCKS MAY APPLY.</p> */}
        </div>    

     
      
        <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-lg-5 pe-sm-0 pe-md-5">
          <h3 className="pb-3">DIAMOND DETAIL - FROM $595</h3>
          <p className='approx-hour'>TIME = APPROX 4 HOURS.</p>
          <p>SMALL SURCHARGE FOR VEHICLE CONDITIONS AND PET HAIR REMOVAL OR LARGE SUVS/VANS AND TRUCKS MAY APPLY.</p>
          <p>A complete interior and exterior detail plus a 2 stage cut and polish to revive your cars paint to its original gloss and brilliance, perfect for cars with dull paint, surface scratches or preparation for sale.</p>
         
          <h3 className="pb-3">EXTERIOR INCLUSIONS</h3>
          <ul>
              <li>2 stage cut and polish</li>
              <li>Headlights/taillights polished</li>
              <li>Number plate covers removed and plates & covers cleaned (if applicable)</li>
              <li>Clay bar treatment to remove contaminants that block wax from sticking to paint (if applicable)</li>
              <li>Snow Foam and hand wash using GYEON Q2m BATHE+</li>
              <li>Full pressure clean & chamois dry</li>
              <li>Tyre soak & deep alloy cleanse on rims & exhaust tips</li>
              <li>Door/boot jams and mirrors cleaned</li>
              <li>Roof cleaned</li>
              <li>Fuel door detailed</li>
              <li>Tyres dressed</li>
              <li>Black plastic and rubber trim cleaned</li>
              <li>All windows & mirrors cleaned</li>
          </ul>
         
        </div>
        <div className="col-12 col-lg-6 col-md-6 custom-image">
          <div className="side-image">
             <img src={EXTERIORINCLUSIONSone}></img>
          </div>
        </div>

        <div className="col-12 col-lg-6 col-md-6 custom-image pe-0 pe-lg-5 pe-sm-0 pe-md-5">
          <div className="side-image">
             <img src={INTERIORINCLUSIONSone}></img>
          </div>
        </div>   
        <div className="col-12 col-lg-6 col-md-6 custom-conetent">
        <h3 className="pb-3">INTERIOR INCLUSIONS</h3>
          <ul>
            <li>Stain and spill removal from floor, seats, roof lining & dash</li>
            <li>Carpet shampoo on all fabric - Seats, floors, doors, boot</li>
            <li>Full interior steam clean sanitisation including seats, doors, carpets, dash, mats & boot</li>
            <li>Floor mats removed and carpet shampooed or pressure hosed and chemically treated</li>
            <li>Complete interior and boot vacuum with deep brush out</li>
            <li>All interior plastics cleaned and dressed with Plastic Care Protection</li>
            <li>All interior leather cleaned and dressed in leather protection</li>
            <li>Detail brush out on all vents, dash, console, steering wheel, door buttons & seat controls</li>
            <li>Foot pedals cleaned</li>
            <li>All windows and mirrors cleaned</li>
            <li>Air freshener applied</li>
          </ul>
          <p>NO CALL OUT FEES WITHIN 20km OF BENDIGO</p>
        </div>  
     

        <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-lg-5 pe-sm-0 pe-md-5">
          <h3 className="pb-3">DIAMOND + CERAMIC WAX DETAIL - FROM $649 </h3>
          <p className='approx-hour'>TIME = APPROX 5.5 HOURS.</p>
          {/* <p>TIME = APPROX 5.5 HOURS. </p> */}
          <p>SMALL SURCHARGE FOR VEHICLE CONDITIONS AND PET HAIR REMOVAL OR LARGE SUVS/VANS AND TRUCKS MAY APPLY.</p>

          <p>This package includes a complete detail inside and out, a 2 stage cut and polish, and application of a ceramic car wax sealant which will provide an unbelievable gloss and make your vehicle extremely easy to clean for 12+ months.</p>
          <h3 className="pb-3">EXTERIOR INCLUSIONS</h3>
          <ul>
            <li>Application of Ethos Ceramic Wax PRO, a wax style paint sealant that creates unbelievable gloss and slickness all while making your car extremely easy to clean. This non-stick coating protects your vehicle from the elements, oxidation and harmful UV rays while easily shedding water, snow and debris while lasting 12+ months.</li>
            <li>2 stage cut and polish</li>
            <li>Headlights/taillights polished to rejuvenate and Shine</li>
            <li>Number plate covers removed and plates & covers cleaned</li>
            <li>Clay bar treatment to remove contaminants that block wax from sticking to paint (if applicable)</li>
            <li>Snow Foam and hand wash using GYEON Q2m BATHE+</li>
            <li>Full pressure clean & chamois dry</li>
            <li>Tyre soak & deep on rims & exhaust tips</li>
            <li>Door/boot jams and mirrors cleaned</li>
            <li>Roof cleaned</li>
            <li>Fuel door detailed</li>
            <li>Tyres dressed</li>
            <li>Black plastic and rubber trim rejuvenation/glossing</li>
            <li>All windows & mirrors cleaned</li>
          </ul>
         
        </div>
        <div className="col-12 col-lg-6 col-md-6 custom-image">
          <div className="side-image">
             <img src={DIAMONDCERAMICWAXDETAIL}></img>
          </div>
        </div>
      
       </div> 
       </div>
       </div>
      </>

      
    ),
        imgHeading1: "Vacuuming",
        imgHeading2: "Dashboard Detailing",
        imgHeading3: "Carpet Cleaning",
        Image1: car1,
        Image2: car2,
        ServiceTitle : "PPF"

      };
    
      return (
        <>
        <Header />
        <section className="ext-and-int-page-bg before-class">
            <div className="container">
                <div className="inner-exterior">

                </div>
            </div>
        </section>
        <Content {...contentData} />
        <Footer />
        </>
      );
}

export default exteriorinterior;
