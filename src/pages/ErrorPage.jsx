import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <>
      <div className="min-h-screen flex  items-center justify-center bg-base-200 p-6">
        <div className="max-w-md mx-auto text-center w-full bg-base-100 shadow-xl rounded-xl p-10">
          <h1 className="text-6xl font-extrabold ">404</h1>

          <h2 className="text-2xl font-semibold mt-3">Page Not Found</h2>
          <p className="text-base opacity-75 mt-2">
            Sorry! The page you are looking for doesn’t exist or may have been
            moved.
          </p>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline my-3"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
