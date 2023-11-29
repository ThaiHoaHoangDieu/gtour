import React from "react";
import Popular from "../components/Popular";
import BestTrip from "../components/BestTrip";
import ChooseUs from "../components/ChooseUs";
import Blog from "../components/Blog";

function Home() {
  return (
    <div>
      <div className="inner-popular">
        <h2 className="ppb_title">Popular Destinations</h2>
        <span className="page_tagline"> World's best tourist destinations</span>
      </div>
      <Popular />
      <div className="inner-popular">
        <h2 className="ppb_title">Best Value Trips</h2>
        <span className="page_tagline"> Best offers trips from us</span>
      </div>
      <BestTrip />
      <div className="inner-popular">
        <h2 className="ppb_title">Why Choose Us</h2>
        <span className="page_tagline">
          Here are reasons you should plan trip with us
        </span>
      </div>
      <ChooseUs />
      <div className="background-image">
        <img
          src="images/bgcau.jpg"
          alt="bg"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      </div>
      <div className="inner-popular">
        <h2 className="ppb_title">Articles & Tips </h2>
        <span className="page_tagline">
          Explore some of the best tips from around the world
        </span>
      </div>
      <Blog />
    </div>
  );
}

export default Home;
