// import React from "react";
// import Header from "../../LayOut/Header/Header";
// import BookingForm from "../BookingForm/BookingForm";
// import Content from "../Content/Content";
// import car1 from "../../../Assest/interior.jpg";
// import car2 from "../../../Assest/1st.jpg";
// import Footer from "../../LayOut/Footer/Footer";
// import Paint from "../../../Assest/clientimage/Paint.jpeg";
// import bestwindowtint from "../../../Assest/clientimage/bestwindowtint.jpeg";


// const WindowTinting = () => {
//   const contentData = {
//     // title: "WINDOW TINTING AND PPF\nCERAMIC TINT FROM $445\nTIME = APPROX 4 HOURS",
//     // description: (
//     //   <>
//     //     <p>Ceramic window tint is a high-performance window film that utilizes ceramic particles to block heat and UV rays. It offers superior heat rejection, excellent clarity, and a non-reflective appearance.</p>
//     //     <h3>INCLUSIONS:</h3>
//     //     <ul>
//     //       <li>Available in 20% or 35% tint</li>
//     //       <li>Offers up to 85% heat blockage</li>
//     //       <li>99% UV blockage</li>
//     //       <li>Lifetime Warranty</li>
//     //       <li>Black Armor Elite window tint film used</li>
//     //     </ul>
//     //     <p>Prices start at $445 for small to mid-sized vehicles and $500 - $550 for anything larger. Please contact us for a FREE QUOTE.</p>
//     //     <h3>PPF - Paint Protection Film</h3>
//     //     <p>Preserving Your Vehicle’s Elegance and Value</p>
//     //     <p>Discover the game-changer for safeguarding your cars, SUVs, and trucks. Paint Protection Film (PPF) is the invisible armor transforming how you shield your vehicle’s exterior. Say goodbye to chips, scratches, and stains that mar your paintwork.</p>
//     //     <p>Engineered to brave the toughest conditions, PPF is tailored for rugged terrains and environmental hazards, a boon for vehicles facing off-road adventures, highway projectiles, and urban challenges. Embrace worry-free journeys as PPF ensures a flawless exterior.</p>
//     //   </>
//     // ),
//     // imgHeading1: "UV Protection",
//     // imgHeading2: "Heat Reduction",
//     // imgHeading3: "Privacy and Security",
//     // Image1: car1,
//     // Image2: car2,
//     ServiceTitle: "Window Tinting"
//   };

//   return (
//     <>
//       <Header />
//       <section className="window-page-bg before-class">
//         <div className="container">
//           <div className="inner-exterior">
//             {/* Possible place for BookingForm or other content */}
//           </div>
//         </div>
//       </section>

//       <section className="pages-inner-content">
//           <div className="container">
//               <div className="row align-items-center">
//                   <div className="col-12 col-lg-6 col-md-6">
//                       <div className="side-content ps-0 pe-lg-5">
//                             <h1 className="mb-3">"WINDOW TINTING AND PPF\nCERAMIC TINT FROM $445\nTIME = APPROX 4 HOURS"</h1>
//                             <p>Ceramic window tint is a high-performance window film that utilizes ceramic particles to block heat and UV rays. It offers superior heat rejection, excellent clarity, and a non-reflective appearance.</p>
//                             <ul>
//                               <li>Available in 20% or 35% tint</li>
//                               <li>Offers up to 85% heat blockage</li>
//                               <li>99% UV blockage</li>
//                               <li>Lifetime Warranty</li>
//                               <li>Black Armor Elite window tint film used</li>      
//                             </ul>
//                             <p>Prices start at $445 for small to mid-sized vehicles and $500 - $550 for anything larger. Please contact us for a FREE QUOTE.</p>
                            
//                       </div>
//                   </div>
//                   <div className="col-12 col-lg-6 col-md-6">
//                       <div className="side-image">
//                         <img src={bestwindowtint}></img>
//                       </div>
//                   </div>
                

//                 <div className="col-12 col-lg-6 col-md-6">
//                       <div className="side-image">
//                         <img src={car1}></img>
//                       </div>
//                   </div>
//                 <div className="col-12 col-lg-6 col-md-6col-6">
//                     <div className="side-content ps-0 ps-lg-5">                           
//                             <h3 className="mb-2">PPF - Paint Protection Film</h3>
//                             <p>Preserving Your Vehicle’s Elegance and Value</p>
//                             <p>Discover the game-changer for safeguarding your cars, SUVs, and trucks. Paint Protection Film (PPF) is the invisible armor transforming how you shield your vehicle’s exterior. Say goodbye to chips, scratches, and stains that mar your paintwork.</p>
//                             <p>Engineered to brave the toughest conditions, PPF is tailored for rugged terrains and environmental hazards, a boon for vehicles facing off-road adventures, highway projectiles, and urban challenges. Embrace worry-free journeys as PPF ensures a flawless exterior.</p>
//                       </div>
//                   </div>
                 
//                   </div>
//           </div>
//       </section>
     
//       <Footer />
//     </>
//   );
// };

// export default WindowTinting;




import React from "react";
import Header from "../../LayOut/Header/Header";
import BookingForm from "../BookingForm/BookingForm";
import Content from "../Content/Content";
import car1 from "../../../Assest/interior.jpg";
import car2 from "../../../Assest/1st.jpg";
import Footer from "../../LayOut/Footer/Footer";
import Paint from "../../../Assest/clientimage/Paint.jpeg";
import bestwindowtint from "../../../Assest/clientimage/bestwindowtint.jpeg";
import redcar from "../../../Assest/clientimage/redcar.jpg"

const WindowTinting = () => {
  const contentData = {
    // title: "WINDOW TINTING AND PPF\nCERAMIC TINT FROM $445\nTIME = APPROX 4 HOURS",
    title: (
      <>
        WINDOW TINTING AND PPF CERAMIC <br />
        TINT FROM $445 TIME = APPROX <br />
        4 HOURS
      </>
    ),
    description: (
      <div className="row custom-div-main gy-5"> 
        <div className="col-12 col-lg-6 col-md-6 custom-conetent pe-lg-5 pe-sm-0 pe-md-5">
          <p>Ceramic window tint is a high-performance window film that utilizes ceramic particles to block heat and UV rays. It offers superior heat rejection, excellent clarity, and a non-reflective appearance.</p>
          <h3 className="pb-3">INCLUSIONS:</h3>
          <ul>
            <li>Available in 20% or 35% tint</li>
            <li>Offers up to 85% heat blockage</li>
            <li>99% UV blockage</li>
            <li>Lifetime Warranty</li>
            <li>Black Armor Elite window tint film used</li>
          </ul>
          <p>Prices start at $445 for small to mid-sized vehicles and $500 - $550 for anything larger. Please contact us for a FREE QUOTE.</p>
        </div>
        <div className="col-12 col-lg-6 col-md-6 custom-image">
          <div className="side-image">
              <img src={Paint}></img>
          </div>
        </div>
        
        <div className="col-12 col-lg-6 col-md-6 custom-image pe-0 pe-lg-5 pe-sm-0 pe-md-5">
          <div className="side-image">
              <img src={bestwindowtint}></img>
          </div>
        </div>   
        <div className="col-12 col-lg-6 col-md-6 custom-conetent">
          <h3 className="pb-3">PPF - Paint Protection Film</h3>
          <p>Preserving Your Vehicle’s Elegance and Value</p>
          <p>Discover the game-changer for safeguarding your cars, SUVs, and trucks. Paint Protection Film (PPF) is the invisible armor transforming how you shield your vehicle’s exterior. Say goodbye to chips, scratches, and stains that mar your paintwork.</p>
          <p>Engineered to brave the toughest conditions, PPF is tailored for rugged terrains and environmental hazards, a boon for vehicles facing off-road adventures, highway projectiles, and urban challenges. Embrace worry-free journeys as PPF ensures a flawless exterior.</p>
        </div>    
       </div> 

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
      <section className="window-page-bg before-class">
        <div className="container">
          <div className="inner-exterior text-center">
            {<h1>WINDOW TINTING FROM $350</h1>}
          </div>
        </div>
      </section>
      <Content {...contentData} />
      <Footer />
    </>
  );
};

export default WindowTinting;