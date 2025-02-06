import React from "react";
import Main from "./pages/home/Main";
import Aside from "./pages/home/Aside";

const Home = () => {
  return (
    <div className="flex justify-between items-center">
      <Aside name="ronit" age="23" />
      <Main gender="male" />
    </div>
  );
};

export default Home;
