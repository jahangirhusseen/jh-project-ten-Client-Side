import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const imgUrl = form.imgUrl.value.trim();
    const category = form.category.value;
    const price = parseInt(form.price.value.trim());
    const location = form.location.value.trim();
    const description = form.description.value.trim();
    const email = form.email.value.trim();
    const date = form.date.value;

    const formData = {
      name,
      imgUrl,
      category,
      price,
      location,
      description,
      email,
      date,
    };

    const missingFields = Object.entries(formData)
      .filter(([_, value]) => !value)
      .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1));

    if (missingFields.length > 0) {
      alert(`Please fill the following fields:\n ${missingFields.join(", ")}`);
      return;
    }

    console.log(formData);
    axios
      .post("http://localhost:3000/services", formData)
      .then((res) => console.log(res));
  };
  return (
    <div>
      <div className="container mx-auto py-10">
        {/* Add Service Form */}

        <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5">
          <div className="card-body">
            <form className="mt-3" onSubmit={handleSubmit}>
              <fieldset className="fieldset gap-2">
                <label className="label">Product Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />

                <label className="label">Photo URL</label>
                <input
                  name="imgUrl"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                />

                <label className="label">Category</label>
                <select
                  name="category"
                  defaultValue=""
                  className="select select-bordered"
                >
                  <option value="" disabled>
                    Select a Category
                  </option>
                  <option value="Pets">Pets</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="Food">Food</option>
                </select>

                <label className="label">Price</label>
                <input
                  name="price"
                  type="number"
                  className="input"
                  placeholder="Price (Ex: 5000)"
                />

                <label className="label">Location</label>
                <input
                  name="location"
                  type="text"
                  className="input"
                  placeholder="Location (Ex: Dhaka)"
                />

                <label className="label">Description</label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered"
                  placeholder="Short Description"
                ></textarea>

                <label className="label">Email</label>
                <input
                  name="email"
                  readOnly
                  defaultValue={user?.email}
                  type="email"
                  className="input"
                  placeholder="Email"
                />

                <label className="label">Date</label>
                <input name="date" type="date" className="input" />

                <button className="btn btn-secondary hover:bg-white hover:text-secondary mt-4">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        {/* <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5">
          <div className="card-body">
            <form className="mt-3 ">
              <fieldset className="fieldset gap-4">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo Url"
                />

                <button className="btn btn-secondary hover:bg-white hover:text-secondary mt-4">
                  Update
                </button>
              </fieldset>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AddService;
