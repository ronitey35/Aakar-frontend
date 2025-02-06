import React from "react";
import Hello from "./Hello";

const Aside = ({ name = "ronit", age, orgs }) => {
  // const { name, ...items } = Props;

  return (
    <div className="text-3xl">
      <h1>{Props.name}</h1> z<h1>{Props.age}</h1>
      <h3>{name}</h3>
      <Hello />
      <h3>{age}</h3>
    </div>
  );
};

export default Aside;
