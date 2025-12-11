import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, useParams } from "react-router";

const CategoryDetails = () => {
  const { category } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://pawmart-cyan.vercel.app/services?category=${category}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="container mx-auto pt-15 pb-2 px-2">
      <h2 className="contentTitle">Showing Result For : {category}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
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
                <div className="card bg-base-100 w-full shadow-sm hover:shadow-md sm:hover:scale-105 transition duration-300 ease-in-out">
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
                      <div>Category : {data?.category}</div>
                      <div>Price : {data?.price}</div>
                    </div>
                    <p className="my-2">{data.location}</p>
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
  );
};

export default CategoryDetails;
