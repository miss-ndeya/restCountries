import React from "react";
import { CiSearch } from "react-icons/ci";
import Input from "./Input";
import useCountries from "../../hooks/useCountries";

const InputForm = () => {
  const { handleSearch } = useCountries("https://restcountries.com/v3.1/all");

  return (
    <div className="elements d-flex mb-4 mb-lg-0 align-items-center p-2 col-8 p-lg-3 col-md-5 col-lg-3">
      <span className="elements me-2">
        <CiSearch className="fs-5" />
      </span>
      <Input
        id="input"
        type="search"
        onChange={(e) => handleSearch(e)}
        placeholder="Search for a country..."
        className="w-100 elements bg-transparent border-0 border-outline-0 cursor-pointer"
      />
    </div>
  );
};

export default InputForm;
