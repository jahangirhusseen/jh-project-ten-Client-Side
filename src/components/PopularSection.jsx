import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const PopularSection = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((error) => {
        toast.warning(error.message);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto py-15 px-2">
        <h2 className="text-3xl font-semibold text-center pb-10 ">
          Popular Winter Care Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {service &&
            service.slice(0, 6).map((data) => (
              <>
                <div className="card bg-base-100 w-full shadow-sm hover:shadow-md sm:hover:scale-105 transition duration-300 ease-in-out">
                  <figure>
                    <img
                      src={data?.image}
                      className="w-full h-[250px] object-cover"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.serviceName}</h2>
                    <p className="my-2">
                      {data.description}
                      {data.description}
                    </p>
                    <div className="flex justify-between">
                      <div>Price {data?.price}</div>
                      <div>Rating {data?.rating}</div>
                    </div>
                    <div className="card-actions justify-center mt-3 mb-5">
                      <Link
                        to={`/services/${data?.serviceId}`}
                        className="btn btn-secondary hover:bg-white hover:text-secondary"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
        <div className="mx-auto text-center my-10">
          <Link
            to={"/services"}
            className="btn btn-secondary  hover:bg-white hover:text-secondary"
          >
            View All Services
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularSection;
