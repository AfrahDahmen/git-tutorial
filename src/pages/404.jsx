import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ErrorImage from "@/assets/images/all-img/404-2.svg";
function Error() {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center py-20 bg-slate-900">
      <img src={ErrorImage} alt="" className="max-w-[250px]" />
      <div className="max-w-[546px] mx-auto w-full mt-12">
        <h4 className="text-white text-[40px] leading-[50px] mb-4">
          Page not found
        </h4>
        <div className="text-white text-base font-normal mb-10">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
      </div>
      <div className="max-w-[300px] mx-auto w-full">
        <button
          className="btn bg-white hover:bg-opacity-75 transition-all duration-150 block text-center"
          onClick={goToPreviousPage}
        >
          Go to previous page
        </button>
      </div>
    </div>
  );
}

export default Error;
