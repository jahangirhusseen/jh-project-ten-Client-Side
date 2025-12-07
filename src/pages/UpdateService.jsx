import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState();
  const [category, setCategory] = useState(service?.category);

  useEffect(() => {
    axios
      .get(`https://pawmart-cyan.vercel.app/services/${id}`)
      .then((res) => {
        setService(res.data);
        setCategory(res.data.category);
      })
      .catch((error) => toast.warning(error.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const imgUrl = form.imgUrl.value.trim();
    const category = form.category.value;
    const price = parseInt(form.price.value.trim());
    const location = form.location.value.trim();
    const description = form.description.value.trim();
    const date = form.date.value;

    const formData = {
      name,
      imgUrl,
      category,
      price,
      location,
      description,
      email: service?.email,
      createdAt: service?.createdAt,
      date,
    };

    console.log(formData);

    axios
      .put(`https://pawmart-cyan.vercel.app/update/${id}`, formData)
      .then((res) => {
        alert("successfuly Data Updated");
        navigate("/my-service");
      })
      .catch((error) => toast.warning(error.message));
  };

  return (
    <div className="container mx-auto py-10">
      {/* Add Service Form */}
      <h2 className="text-3xl font-semibold text-center pb-2 ">
        Update Service Data
      </h2>
      <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5">
        <div className="card-body">
          <form className="mt-3" onSubmit={handleSubmit}>
            <fieldset className="fieldset gap-2">
              <label className="label">Product Name</label>
              <input
                name="name"
                defaultValue={service?.name}
                type="text"
                className="input"
                placeholder="Name"
              />

              <label className="label">Photo URL</label>
              <input
                name="imgUrl"
                defaultValue={service?.imgUrl}
                type="text"
                className="input"
                placeholder="Photo URL"
              />

              <label className="label">Category</label>
              <select
                value={category}
                name="category"
                className="select select-bordered"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a Category</option>
                <option value="Pets">Pets</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Food">Food</option>
              </select>

              <label className="label">Price</label>
              <input
                name="price"
                defaultValue={service?.price}
                type="number"
                className="input"
                placeholder="Price (Ex: 5000)"
              />

              <label className="label">Location</label>
              <input
                name="location"
                defaultValue={service?.location}
                type="text"
                className="input"
                placeholder="Location (Ex: Dhaka)"
              />

              <label className="label">Description</label>
              <textarea
                name="description"
                defaultValue={service?.description}
                className="textarea textarea-bordered"
                placeholder="Short Description"
              ></textarea>

              <label className="label">Date</label>
              <input
                name="date"
                defaultValue={service?.date}
                type="date"
                className="input"
              />

              <button className="btn btn-secondary hover:bg-white hover:text-secondary mt-4">
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
