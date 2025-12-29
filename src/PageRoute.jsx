import React, {useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSpring, animated } from 'react-spring';


import { Home } from "./sections/Home";
import { Features } from "./sections/Features";
import { Location } from "./sections/Location";
import { Amenities } from "./sections/Amenities";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Overview } from "./sections/Overview";
import  {Banner } from "./sections/Banner";
import { WhatsApp } from "./components/contact/WhatsApp";
import Pricing from "./sections/Pricing";
import { MasterPlan } from "./sections/MasterPlan";
import { Gallery } from "./sections/Gallery";
// import { SiteVisitForm } from "./components/contact/SiteVisitForm";
import  ContactForm  from "./components/contact/ContactForm";
// import { FloorPlan } from "./sections/FloorPlan";
// import { Highlights } from "./sections/Highlights";

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = React.useState(false);

  const props = useSpring({
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 210, friction: 20 }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

export const PageRoute = () => {
  const [sitevisitmodal, setSiteVisitModal] = useState(false);
  const [contactmodal, setContactModal] = useState(false);


  return (
    <BrowserRouter>
     {/* {sitevisitmodal && (
        <SiteVisitForm
          sitevisitmodal={sitevisitmodal}
          setSiteVisitModal={setSiteVisitModal}
        />
      )} */}
      {contactmodal && (
        <ContactForm
          contactmodal={contactmodal}
          setContactModal={setContactModal}
          setSiteVisitModal={setSiteVisitModal}
        />
      )}
     
      <Navbar 
       
      sitevisitmodal={sitevisitmodal}
      setSiteVisitModal={setSiteVisitModal}
      setContactModal={setContactModal}
      />
       
      <WhatsApp />
      <Routes>
        <Route path="/" element={
          <>
              <RevealOnScroll>
                  <Home 
                  contactmodal={contactmodal}
                  setContactModal={setContactModal}
                  />
              </RevealOnScroll>
              <RevealOnScroll>
                <Features />
              </RevealOnScroll>
              {/* <RevealOnScroll>
                { <Highlights /> }
              </RevealOnScroll> */}
              <RevealOnScroll>
                <Overview 
                  contactmodal={contactmodal}
                  setContactModal={setContactModal}
                />
              </RevealOnScroll>
              <RevealOnScroll>
                <Pricing 
                  contactmodal={contactmodal}
                  setContactModal={setContactModal}               
                />
              </RevealOnScroll>
              <RevealOnScroll>
                <MasterPlan 
                  contactmodal={contactmodal}
                  setContactModal={setContactModal}               
                />

              {/* <RevealOnScroll>
                <FloorPlan 
                    contactmodal={contactmodal}
                    setContactModal={setContactModal}   
                />
              </RevealOnScroll> */}
              <RevealOnScroll>
                <Location />
              </RevealOnScroll>
              </RevealOnScroll>
              <RevealOnScroll>
                <Amenities />
              </RevealOnScroll>
              <RevealOnScroll>
                <Gallery />
              </RevealOnScroll>
          </>
        } />
        <Route path="/Home" element={
          <>
            <RevealOnScroll>
              <Home 
              contactmodal={contactmodal}
              setContactModal={setContactModal}
              />
            </RevealOnScroll>
          </>
        } />
        <Route path="/Features" element={
          <>
            <RevealOnScroll>
              <Features />
            </RevealOnScroll>
          </>
        } />
        {/* <Route path="/Highlights" element={
          <>
            <RevealOnScroll>
              <Highlights />
            </RevealOnScroll>
          </>
        } /> */}
        <Route path="/Overview" element={
          <>
            <RevealOnScroll>
              <Overview 
                contactmodal={contactmodal}
                setContactModal={setContactModal}
              />
            </RevealOnScroll>
          </>
        } />
        <Route path="/Pricing" element={
          <>
            <RevealOnScroll>
              <Pricing 
                contactmodal={contactmodal}
                setContactModal={setContactModal}
              />
            </RevealOnScroll>
          </>
        } />
        <Route path="/MasterPlan" element={
          <>
            <RevealOnScroll>
              <MasterPlan 
                contactmodal={contactmodal}
                setContactModal={setContactModal}
              />
            </RevealOnScroll>
          </>
        } />
        {/* <Route path="/FloorPlan" element={
          <>
            <RevealOnScroll>
              <FloorPlan 
                contactmodal={contactmodal}
                setContactModal={setContactModal}
              />
            </RevealOnScroll>
          </>
        } /> */}
        <Route path="/Location" element={
          <>
            <RevealOnScroll>
              <Location />
            </RevealOnScroll>
          </>
        } />

        <Route path="/Amenities" element={
          <>
            <RevealOnScroll>
              <Amenities />
            </RevealOnScroll>
          </>
        } />
        <Route path="/Gallery" element={
          <>
            <RevealOnScroll>
              <Gallery />
            </RevealOnScroll>
          </>
        } />
      </Routes>
      <Footer 
      contactmodal={contactmodal}
      setContactModal={setContactModal}
      />
    </BrowserRouter>
  )
}

// import React from "react";
// import { Home } from "./sections/Home";
// import { Features } from "./sections/Features";
// import { Location } from "./sections/Location";
// import { Amenities } from "./sections/Amenities";
// import { Footer } from "./components/footer/Footer";
// import { Navbar } from "./components/navbar/Navbar";
// import { Overview } from "./sections/Overview";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { WhatsApp } from "./components/contact/WhatsApp";
// import Pricing from "./sections/Pricing";
// import { MasterPlan } from "./sections/MasterPlan";
// import { Gallery } from "./sections/Gallery";
// import { SiteVisitForm } from "./components/contact/SiteVisitForm";
// import { useState } from "react";
// import { ContactForm } from "./components/contact/ContactForm";

// export const PageRoute = () => {
//   const [sitevisitmodal, setSiteVisitModal] = useState(false);
//   const [contactmodal, setContactModal] = useState(false);


//   const handleBackgroundClick = (event) => {
//     if (event.target === event.currentTarget) {
//       setContactModal(false);
//       setSiteVisitModal(false);
//     }
//   };

//   return (
//     <BrowserRouter>
//       {sitevisitmodal && (
//         <SiteVisitForm
//           sitevisitmodal={sitevisitmodal}
//           setSiteVisitModal={setSiteVisitModal}
//         />
//       )}
//       {contactmodal && (
//         <ContactForm
//           contactmodal={contactmodal}
//           setContactModal={setContactModal}
//           setSiteVisitModal={setSiteVisitModal}
//         />
//       )}
//       <Navbar
//         sitevisitmodal={sitevisitmodal}
//         setSiteVisitModal={setSiteVisitModal}
//         contactmodal={contactmodal}
//         setContactModal={setContactModal}
//       />
//       <WhatsApp />
//       <div onClick={handleBackgroundClick}>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Home
//                 contactmodal={contactmodal}
//                 setContactModal={setContactModal}
//               />
//               <Features />
//               <div className="py-10 px-10 bg-[#fffaee]">
//                 <Overview />
//                 <Pricing 
//                 contactmodal={contactmodal}
//                 setContactModal={setContactModal}
//                 />

//                 <Location />
//                 <Amenities />
//                 <Gallery />
//               </div> 
//             </>
//           }
//         />
//       </Routes>
//       </div>
//       <Footer />
//     </BrowserRouter>
//   );
// };

