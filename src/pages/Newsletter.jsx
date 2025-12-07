import React from "react";
import { toast } from "react-toastify";

const NEWSLETTER = () => {
  const handleSubcribe = () => {
    toast("Welcome to our newsletter! 🎉");
  };
  return (
    <>
      <section class="py-16 text-center bg-accent w-1/2 rounded-sm mx-auto my-5">
        <h2 class="text-4xl font-bold text-white">NEWSLETTER</h2>
        <p class="mt-4 text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div class="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your Email"
            class="input input-bordered w-80 mr-2"
          />
          <button onClick={handleSubcribe} class="btn btn-secondary">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default NEWSLETTER;
