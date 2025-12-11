import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { motion } from "motion/react";
const Category = () => {
  const [service, setService] = useState([]);
  const [category, setCategory] = useState([]);

  const categoryImages = {
    Accessories:
      "https://i.postimg.cc/xd7x5MYp/tran-mau-tri-tam-y34UOHo-Dk-WQ-unsplash.jpg",
    Food: "https://i.postimg.cc/T3V4RpV2/xuancong-meng-d-A4v2b-HLrk4-unsplash.jpg",
    Pets: "https://i.postimg.cc/2SYVqKWD/hasbi-kurnia-hzom2hy-AQNM-unsplash.jpg",
    "Care Products":
      "https://i.postimg.cc/mkcTqQFN/olga-kononenko-z-M8Jk-Js-Yuw-Y-unsplash.jpg",
  };

  useEffect(() => {
    fetch(`https://pawmart-cyan.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];

        setCategory(uniqueCategories);
      })
      .catch((error) => toast.warning(error.message));
  }, []);

  return (
    <>
      <div className="container mx-auto pt-15 pb-2 px-2">
        <h2 className="contentTitle">Category </h2>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{
            scale: 1,
            transition: { duration: 2 },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {category.map((cat, index) => (
              <Link
                to={`/category-filtered/${cat}`}
                key={index}
                className="card bg-base-100 image-full w-full shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <figure>
                  <img
                    src={categoryImages[cat]}
                    alt={cat}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body justify-center items-center">
                  <h2 className="card-title text-center">{cat}</h2>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Category;
