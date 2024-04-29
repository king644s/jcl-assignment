"use client";
import React from "react";
import SecondFold from "./SecondFold";
import WeAreFold from "./WeAreFold";
import JackOfAll from "./JackOfAllFold";
import VideoSection from "./VideoSection";
import Clientals from "./Clientals";
import SocialMediaFeed from "./SocialMediaFeed";
import JoinSection from "./JoinSection";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <SecondFold />
      <WeAreFold />
      <JackOfAll />
      <VideoSection />
      <Clientals />
      <SocialMediaFeed />
      <JoinSection />
    </>
  );
};

export default Home;
