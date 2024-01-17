import React from "react";
import Country from "./Country";
import CountryProvider from "../contextes/CountryProvider";

const Home = () => {
  return <CountryProvider children={<Country />} />;
};

export default Home;
