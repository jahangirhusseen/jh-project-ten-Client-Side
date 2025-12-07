import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { motion } from "motion/react";
const Services = () => {
  const [service, setService] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(`https://pawmart-cyan.vercel.app/services?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(category);
        setService(data);
      })
      .catch((error) => toast.warning(error.message));
  }, [category]);

  return (
    <>
      <div className="container mx-auto py-15 px-2">
        <h2 className="text-3xl font-semibold text-center pb-10 ">
          Pets & Supplies
        </h2>
        <div className="mb-10">
          <select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            defaultValue="Select a Category"
            className="select"
          >
            <option disabled={true}>Select a Category</option>
            <option value={""}>All</option>
            <option value={"Pets"}>Pets</option>
            <option value={"Food"}>Food</option>
            <option value={"Accessories"}>Accessories</option>
            <option value={"Care Products"}>Care Products</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {service &&
            service.map((data) => (
              <>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{
                    scale: 1,
                    transition: { duration: 2 },
                  }}
                >
                  <div className="card bg-base-100 w-full shadow-sm hover:shadow-md hover:scale-105 transition duration-300 ease-in-out">
                    <figure>
                      <img
                        src={data?.imgUrl}
                        className="w-full h-[250px] object-cover"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{data.name}</h2>

                      <div className="flex justify-between">
                        <div>Price : {data?.price}</div>
                        <div>Category : {data?.category}</div>
                      </div>
                      <p className="my-2">Location : {data.location}</p>
                      <div className="card-actions justify-center mt-3 mb-5">
                        <Link
                          to={`/services/${data?._id}`}
                          className="btn btn-secondary hover:bg-white hover:text-secondary"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Services;
