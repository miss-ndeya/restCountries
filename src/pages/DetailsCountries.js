import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../components/loader/Loader";
import DetailCountry from "../components/main/DetailCountry";

const getDetailsPays = async (id, setCountry, setLoading) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/capital/${id}`
    );

    const data = await response.json();
    const countryData = data[0];
    setCountry(countryData);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  } catch (error) {
    console.error(error, "la récupération des details du pays a echouer ");
  }
};

const DetailsCountries = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDetailsPays(id, setCountry, setLoading);
  }, [id, setCountry, setLoading]);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="container mb-4 pt-5 ">
      {loading ? (
        <Loader />
      ) : (
        <div className="row mx-1 mt-5 mb-0">
          <button
            className="col-3 col-lg-1 p-2 mx-3 mx-lg-0 border-0 elements style"
            id="back"
            onClick={handleBackClick}
          >
            <FaArrowLeft className=" me-2" /> Back
          </button>
          <DetailCountry country={country} />
        </div>
      )}
    </div>
  );
};

export default DetailsCountries;
