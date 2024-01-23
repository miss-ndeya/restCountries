import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../components/loader/Loader";
import DetailCountry from "../components/main/DetailCountry";
import useCountry from "../hooks/useCountry";
import Button from "../components/header/Button";

const DetailsCountries = () => {
  const { loading } = useCountry();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/")
  }
  return (
    <div className="container mb-4 pt-5 ">
      {loading ? (
        <Loader />
      ) : (
        <div className="row mx-1 mt-5 mb-0">
          <Button
            className="col-3 col-lg-1 p-2 mx-3 mx-lg-0 border-0 elements style"
            id="back"
            onClick={handleNavigate}
          >
            <FaArrowLeft className=" me-2" /> Back
          </Button>
          <DetailCountry />
        </div>
      )}
    </div>
  );
};

export default DetailsCountries;
