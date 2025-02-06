import React from "react";
import Main from "./pages/home/Main";
import Aside from "./pages/home/Aside";

const Home = ({ orgs }) => {
  return (
    <div>
      <Aside orgs={orgs} name="ronit" age="23" gender="male" country="nepal" />
      <Main gender="male" />
      <Hello />
    </div>
  );
};

export default Home;

const Hello = () => {
  return <h1>Hello</h1>;
};
