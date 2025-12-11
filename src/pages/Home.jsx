import React from "react";
import Slider from "../components/Slider";
import PopularSection from "../components/PopularSection";
import MeetOurVets from "../components/MeetOurVets";
import WinterTips from "../components/WinterTips";
import Category from "../components/Category";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <Category />
      <PopularSection />
      <MeetOurVets />
      <WinterTips />
    </>
  );
};

export default Home;
