import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { toast } from "react-toastify";
import { motion } from "motion/react";
const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();
  // assets commponents context firebase layouts pages router
  useEffect(() => {
    fetch(`https://pawmart-cyan.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((error) => toast.warning(error.message));
  }, []);

  // const findResult = service.find((items) => items.serviceId == id);

  return (
    <>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{
          scale: 1,
          transition: { duration: 2 },
        }}
      >
        <div className="container mx-auto py-15 px-2">
          <h2 className="text-3xl font-semibold text-center pb-10 ">
            <h2>{service?.name}</h2>
          </h2>

          <div className="card bg-base-100 w-1/2 mx-auto shadow-sm hover:shadow-md sm:hover:scale-105 transition duration-300 ease-in-out">
            <figure>
              <img
                src={service?.imgUrl}
                className="w-full h-[250px] object-cover"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.email}</h2>
              <p className="my-2">{service?.location}</p>
              <div className="flex justify-between">
                <div>Price {service?.price}</div>
                {/* <div>Rating {service?.rating}</div> */}
              </div>
              <div className="card-actions justify-center mt-3 mb-5">
                <Link
                  to={`/`}
                  className="btn btn-secondary hover:bg-white hover:text-secondary"
                >
                  Back Go
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceDetails;
