import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MyOrder = () => {
  const [MyOrder, setMyOrder] = useState([]);

  useEffect(() => {
    axios
      .get("https://pawmart-cyan.vercel.app/orders")
      .then((res) => {
        setMyOrder(res.data);
      })
      .catch((error) => toast.warning(error.message));
  }, []);

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
                <th>Product Name</th>
                <th>Buyer Name</th>
                <th>Price </th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Date</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {MyOrder &&
                MyOrder.map((data, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>

                    <td>{data.productName}</td>
                    <td>{data.buyerName}</td>
                    <td>{data.price}</td>
                    <td>{data.quantity}</td>
                    <td>{data.address}</td>
                    <td>
                      {new Date(data?.date).toLocaleString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </td>
                    <td>{data.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
