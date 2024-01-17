import { useContext, useEffect } from "react";
import { CountryContext } from "../contextes/CountryProvider";
import { useParams } from "react-router-dom";

const useCountry = () => {
  const useCountry = useContext(CountryContext);
  
  const { getcountry, getCountries } = useCountry ;
  const { id } = useParams();
  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    getCountries(url)
    getcountry(id);
  }, [id]);

  return useCountry;
};

export default useCountry;
