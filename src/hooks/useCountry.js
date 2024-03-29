import { useContext, useEffect } from "react";
import { CountryContext } from "../contextes/CountryProvider";
import { useParams } from "react-router-dom";

const useCountry = () => {
  const countryContext = useContext(CountryContext);

  const { id } = useParams();

  const { getcountry } = countryContext;

  useEffect(() => {
    getcountry(id);
  }, [id]);

  return countryContext;
};

export default useCountry;
