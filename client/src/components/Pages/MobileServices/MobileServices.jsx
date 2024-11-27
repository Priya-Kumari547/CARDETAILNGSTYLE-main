// import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import service1 from "../../../Assest/clientimage/service1.JPG";
// import service2 from "../../../Assest/clientimage/service2.JPG";
// import service3 from "../../../Assest/clientimage/service3.JPG";
// import service4 from "../../../Assest/clientimage/service4.JPG";
// import service5 from "../../../Assest/clientimage/service5.JPG";
// import service6 from "../../../Assest/clientimage/service6.JPG";
// import service7 from "../../../Assest/clientimage/service7.JPG";
// import ppf from "../../../Assest/ppf/ppf.JPG"
// import benifits_coverimg from "../../../Assest/benifits_coverimg.jpeg"
// import Footer from "../../LayOut/Footer/Footer";
// import Header from "../../LayOut/Header/Header";
// import { useNavigate } from "react-router-dom";


// const MobileServices = () => {
//   const navigate = useNavigate();
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   const handleSeePackages = (route) => {
//     navigate(route);
//   };
  

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const carDetails = [
  
//     {
//       title: "EXTERIOR DETAILING",
//       image: service1,
//       route: "/ExteriorDetailing"
//     },
//     // {
//     //   title: "INTERIOR DETAILING",
//     //   image: service5,
//     // },
//     {
//       title: "EXTERIOR AND INTERIOR",
//       image: service2,
//       route: "/Ext&Int"
//     },

//     {
//       title: "PRE SALE DETAIL",
//       image: ppf,
//       route: "/PreSaleDetail"
//     },
   
//     {
//       title: "CERAMIC COATING & PPF",
//       image: service4,
//       route: "/CermaicCoating"
//     },
//     {
//       title: "WINDOW TINTING",
//       image: service3,
//       route: "/WindowTining"
      
//     },
//     // {
//     //   title: "DETAIL AFTERCARE",
//     //   image: service7,
//     // },
//     // {
//     //   title: "ABOUT",
//     //   image: service6,
//     // },
//     {
//       title: "CORPRATE & HEAVY VEHICLES",
//       image: benifits_coverimg,
//       route: "/Corporate"
//     },
   
//   ];

//   return (
//     <>
//       <Header />
//       <section className="booking-card-top d-flex align-items-center">
//         <div className="container">
//           <div className="inner-text-custom text-center">
//               <h2>MOBILE SERVICES-WE COME TO YOU!</h2>
//               <p>- EXPERIENCED DETAILERS - AUSTRALIAN OWNED AND OPERATED -</p>
//           </div>
//         </div>
//       </section>
//       <section className="booking_card">
//         <div className="container">
//           <h1 className="text-center mt-0">
//             {/* Discover the Splendor of Your Vehicle with Our Exclusive Detailing */}
//             {/* Packages */}
//              Gift your vehicle a premium spa experience with our Exclusive
//             Packages
//             </h1>
//           {/* <p className="text-center heading">
//             Gift your vehicle a premium spa experience with our expert
//             technicians
//           </p> */}
//           {isMobile ? (
//             <div className="row">
//               {carDetails.map((detail, index) => (
//                 <div key={index} className="col-md-3">
//                   <Card className="car-card ms-3">
//                     <Card.Img variant="top" src={detail.image} />
//                     <Card.Body>
//                       <Card.Title>{detail.title}</Card.Title>
//                       {/* <Button className="btn-custom" variant="primary" onClick={handleSeePackages}>
//                         See Packages
//                       </Button> */}
//                       <Button className="btn-custom" variant="primary" onClick={() => handleSeePackages(detail.route)}>
//   See Packages
// </Button>


//                     </Card.Body>

//                   </Card>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <Slider
//               dots={true}
//               infinite={true}
//               speed={500}
//               slidesToShow={4}
//               slidesToScroll={1}
//               autoplay={true}
//               autoplaySpeed={1000}
//             >
//               {carDetails.map((detail, index) => (
//                 <div key={index}>
//                   <Card className="car-card ms-3">
//                     <Card.Img variant="top" src={detail.image} />
//                     <Card.Body>
//                       <Card.Title>{detail.title}</Card.Title>
//                       <Button className="btn-custom see-packegs-btn" variant="primary" onClick={handleSeePackages}>
//                         See Packages
//                       </Button>
//                     </Card.Body>
//                   </Card>
//                 </div>
//               ))}
//             </Slider>
//           )}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default MobileServices;

import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service1 from "../../../Assest/clientimage/service1.JPG";
import service2 from "../../../Assest/clientimage/service2.JPG";
import service3 from "../../../Assest/clientimage/service3.JPG";
import service4 from "../../../Assest/clientimage/redcar.jpg";
import ppf from "../../../Assest/benfitscar.jpg";
import benifits_coverimg from "../../../Assest/benifits_coverimg.jpeg";
import Footer from "../../LayOut/Footer/Footer";
import Header from "../../LayOut/Header/Header";
import { useNavigate } from "react-router-dom";

const MobileServices = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleSeePackages = (route) => {
    navigate(route);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carDetails = [
    { title: "EXTERIOR DETAILING", image: service2, route: "/ExteriorDetailing" },
    { title: "EXTERIOR AND INTERIOR", image: service4, route: "/Ext&Int" },
    { title: "PRE SALE DETAIL", image: ppf, route: "/PreSaleDetail" },
    { title: "CERAMIC COATING", image: service1, route: "/CermaicCoating" },
    { title: "WINDOW TINTING  & PPF", image: service3, route: "/WindowTining" },
    { title: "CORPORATE & HEAVY VEHICLES", image: benifits_coverimg, route: "/Corporate" }
  ];

  return (
    <>
      <Header />
      <section className="booking-card-top d-flex align-items-center">
        <div className="container">
          <div className="inner-text-custom text-center">
            <h2>MOBILE SERVICES - WE COME TO YOU!</h2>
            <p>- EXPERIENCED DETAILERS - AUSTRALIAN OWNED AND OPERATED -</p>
          </div>
        </div>
      </section>
      <section className="booking_card">
        <div className="container">
          <h1 className="text-center mt-0">Gift your vehicle a premium spa experience with our Exclusive Packages</h1>
          {isMobile ? (
            <div className="row">
              {carDetails.map((detail, index) => (
                <div key={index} className="col-md-3">
                  <Card className="car-card ms-3">
                    <Card.Img variant="top" src={detail.image} />
                    <Card.Body>
                      <Card.Title>{detail.title}</Card.Title>
                      <Button className="btn-custom" variant="primary" onClick={() => handleSeePackages(detail.route)}>
                        See Packages
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={4}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={1000}
            >
              {carDetails.map((detail, index) => (
                <div key={index}>
                  <Card className="car-card ms-3">
                    <Card.Img variant="top" src={detail.image} />
                    <Card.Body>
                      <Card.Title>{detail.title}</Card.Title>
                      <Button className="btn-custom see-packegs-btn" variant="primary" onClick={() => handleSeePackages(detail.route)}>
                        See Packages
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MobileServices;



