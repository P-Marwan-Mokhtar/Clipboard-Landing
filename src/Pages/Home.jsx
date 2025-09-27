import React from "react";
import HeroPage from "../components/HeroPage";
import KeepTrack from "../components/KeepTrack";
import SuperCharge from "../components/SuperCharge";
import AccessClipboard from "../components/AccessClipboard";
import Networks from "../components/Networks";
import Clipboard from "../components/Clipboard";

const Home = () => {
  return (
    <>
      <HeroPage />
      <KeepTrack />
      <AccessClipboard />
      <SuperCharge />
      <Networks />
      <Clipboard/>
    </>
  );
};

export default Home;
