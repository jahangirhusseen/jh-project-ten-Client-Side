import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [service, setService] = useState([]);
  const { id } = useParams();
  // assets commponents context firebase layouts pages router
  useEffect(() => {
    fetch(`https://pawmart-cyan.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((error) => toast.warning(error.message));
  }, []);

  const handleOrderForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const buyerName = form.buyerName.value;
    const email = form.email.value;
    const productId = form.productId.value;
    const productName = form.productName.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const address = form.address.value;
    const date = new Date();
    const phone = form.phone.value;

    const formData = {
      buyerName,
      email,
      productId,
      productName,
      quantity,
      price,
      address,
      date,
      phone,
    };
    console.log(formData);
    axios
      .post(`https://pawmart-cyan.vercel.app/orders`, formData)
      .then((res) => {
        console.log("data send ");
      });
  };

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
            {service?.name}
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

                <div>
                  {/* Button to open modal */}
                  <button
                    className="btn btn-secondary hover:bg-white hover:text-secondary"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Order Now
                  </button>

                  {/* Modal */}
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box w-full max-w-lg">
                      <h3 className="font-bold text-lg text-center mb-4">
                        Place Your Order
                      </h3>

                      {/* Order Form inside modal */}
                      <div className="card ">
                        <form className="space-y-3" onSubmit={handleOrderForm}>
                          {/* Buyer Name */}
                          <div>
                            <label className="label">Buyer Name</label>
                            <input
                              name="buyerName"
                              defaultValue={user?.displayName}
                              type="text"
                              readOnly
                              className="input input-bordered w-full"
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label className="label">Email</label>
                            <input
                              name="email"
                              defaultValue={service?.email}
                              type="email"
                              readOnly
                              className="input input-bordered w-full"
                            />
                          </div>

                          {/* Product/Listing ID */}
                          <div>
                            <label className="label">Product/Listing ID</label>
                            <input
                              name="productId"
                              defaultValue={service?._id}
                              type="text"
                              readOnly
                              className="input input-bordered w-full"
                            />
                          </div>

                          {/* Product/Listing Name */}
                          <div>
                            <label className="label">
                              Product/Listing Name
                            </label>
                            <input
                              name="productName"
                              defaultValue={service?.name}
                              type="text"
                              readOnly
                              className="input input-bordered w-full"
                            />
                          </div>

                          <div className="flex gap-3">
                            {/* Quantity */}
                            <div>
                              <label className="label">Quantity</label>
                              <input
                                name="quantity"
                                type="number"
                                className="input input-bordered w-full"
                                placeholder="Enter quantity"
                              />
                            </div>

                            {/* Price */}
                            <div>
                              <label className="label">Price</label>
                              <input
                                name="price"
                                defaultValue={service?.price}
                                type="number"
                                readOnly
                                className="input input-bordered w-full"
                              />
                            </div>
                            <div>
                              <label className="label">Phone</label>
                              <input
                                name="phone"
                                type="tel"
                                placeholder="Enter phone number"
                                className="input input-bordered w-full"
                                required
                              />
                            </div>
                          </div>
                          {/* Phone */}

                          {/* Address */}
                          <div>
                            <label className="label">Address</label>
                            <input
                              name="address"
                              type="text"
                              placeholder="Enter your address"
                              className="input input-bordered w-full"
                              required
                            />
                          </div>

                          {/* Additional Notes */}
                          <div>
                            <label className="label">Additional Notes</label>
                            <textarea
                              name="notes"
                              placeholder="Enter any additional notes"
                              className="textarea textarea-bordered w-full"
                            ></textarea>
                          </div>

                          {/* Submit & Close Buttons */}
                          <div className="flex justify-between mt-4">
                            <button
                              type="submit"
                              className="btn btn-secondary w-1/2 mr-2"
                            >
                              Submit
                            </button>
                            <button
                              className="btn w-1/2"
                              onClick={() =>
                                document.getElementById("my_modal_5").close()
                              }
                            >
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceDetails;
