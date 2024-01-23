import React from "react";
import Form from "../components/formulaire/Form";
import useCountries from "../hooks/useCountries";
import CountriesListes from "../components/main/CountriesListes";
import Loader from "../components/loader/Loader";

const Country = () => {
  const { loading, filteredCountries } = useCountries("https://restcountries.com/v3.1/all");

  return (
    <div className="d-flex flex-column">
      <div className="container my-5 pt-5">
        <Form />
        {loading ? (
          <Loader />
        ) : filteredCountries.length > 0 ? (
          <CountriesListes />
        ) : (
          <span className="text-danger">Aucun pays correspondant trouvé.</span>
        )}
      </div>
    </div>
  );
};

export default Country;
