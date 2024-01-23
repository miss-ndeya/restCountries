import { useContext, useEffect } from "react";
import { CountryContext } from "../contextes/CountryProvider";

const useCountries = (url) => {
  const countryContext = useContext(CountryContext);

  const { getCountries } = countryContext;

  useEffect(() => {
    getCountries(url);
  }, [url]);

  return countryContext;
};

export default useCountries;
