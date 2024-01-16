import React, { createContext, useState } from "react";

export const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Filter by Region");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e) => {
    setFilter(e.target.value);
  };

  const getCountries = async (url) => {
    try {
      const res = await fetch(url);
      const country = await res.json();
      setCountries(country);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (err) {
      console.error("Erreur lors de la recuperation des pays");
    }
  };

  const filteredCountries = countries.filter(
    (country) =>
      (filter === "Filter by Region" || country.region === filter) &&
      (country.name.common.toLowerCase().includes(search.toLowerCase()) ||
        country.region.toLowerCase().includes(search.toLowerCase()))
  );

  const value = {
    countries,
    loading,
    search,
    filter,
    handleSearch,
    handleSelect,
    getCountries,
    filteredCountries,
  };

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default CountryProvider;
