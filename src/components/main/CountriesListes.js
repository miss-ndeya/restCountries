import React from "react";
import useCountries from "../../hooks/useCountries";
import CardCountries from "./CardCountries";

const CountriesListes = () => {
  const { filteredCountries } = useCountries("https://restcountries.com/v3.1/all");
  return (
    <div className="row list-country d-flex align-items-start align-items-lg-center flex-wrap gy-5 gx-0 gx-lg-5 my-1 my-lg-0">
      {filteredCountries.map((country) => (
        <CardCountries key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountriesListes;
