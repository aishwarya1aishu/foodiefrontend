// import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
// import BannerImage from "../Assets/home-banner-image.png";
// import Navbar from "./NavBar";
// import { FiArrowRight } from "react-icons/fi";

// const  = () => {
//   return (
//     <div className="home-container">
//       <Navbar />
//       <div className="home-banner-container">
//         <div className="home-bannerImage-container">
//           <img src={BannerBackground} alt="" />
//         </div>
//         <div className="home-text-section">
//           <h1 className="primary-heading">
//             Your Favourite Food Delivered Hot & Fresh
//           </h1>
//           <p className="primary-text">
//             Healthy switcher chefs do all the prep work, like peeding, chopping
//             & marinating, so you can cook a fresh food.
//           </p>
//           <button className="secondary-button">
//             Order Now <FiArrowRight />{" "}
//           </button>
//         </div>
//         <div className="home-image-section">
//           <img src={BannerImage} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ;

import React from "react";
import AboutBackground from "../Assets/about-background.png";
//import AboutBackgroundImage from "../Assets/about-background-image.png";
import AboutBackgroundImage from "../Assets/home-banner-image.png";
const Home = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Home</p>
        <h1 className="primary-heading">
          Food
        </h1>
        <p className="primary-text">
          Food is essential for our body for a number of reasons.
          It gives us the energy needed for working, playing, and doing day-to-day activities.
        </p>
        <p className="primary-text">
          Being healthy does take discipline when you have fast foods and different types of restaurants at every corner, but the outcome may shock you.
        </p>
        <div className="about-buttons-container">
          {/* <button className="secondary-button">Learn More</button> */}
          <a  className="secondary-button" href="https://www.freshmenu.com/" target="new">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Home;