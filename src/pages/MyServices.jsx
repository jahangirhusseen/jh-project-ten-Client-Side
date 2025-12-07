import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import axios from "axios";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://pawmart-cyan.vercel.app/my-services?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((error) => toast.warning(error.message));
  }, [user?.email]);

  const handleEdit = () => {
    alert("Are You Sure Edit Data");
  };
  const handleDelete = (id) => {
    alert(id);

    axios
      .delete(`https://pawmart-cyan.vercel.app/delete/${id}`)
      .then((res) => {
        const filterData = service.filter((prev) => prev._id !== id);
        setService(filterData);
        // alert("Data SuccessFully Delete");
      })
      .catch((error) => toast.warning(error.message));
  };

  return (
    <>
      <div className="container mx-auto py-15 px-2">
        <h2 className="text-3xl font-semibold text-center pb-10 ">
          My Listings
        </h2>
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Photo</th>
                <th>Name</th>
                <th>price</th>
                <th>description</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {service &&
                service.map((data, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12 object-cover">
                          <img src={data.imgUrl} />
                        </div>
                      </div>
                    </td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.description}</td>
                    <td>{data.category}</td>
                    <td>
                      <div className="flex gap-2 justify-center">
                        <button
                          className="btn btn-secondary"
                          onClick={() => alert(data?._id)}
                        >
                          View
                        </button>
                        <button
                          className="btn btn-info"
                          onClick={() => handleEdit()}
                        >
                          <Link to={`/update-service/${data?._id}`}> Edit</Link>
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => handleDelete(data?._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyServices;
