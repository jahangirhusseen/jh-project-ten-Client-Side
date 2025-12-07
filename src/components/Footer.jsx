import React from "react";
import { Navigate, NavLink } from "react-router";
import logo from "../assets/pet-care-logo.jpg";
import { BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-[#010138]">
        <footer className="container pt-20 pb-10 mx-auto  text-[#A1A1AA]  ">
          <div className="footer grid sm:grid-cols-2 lg:grid-cols-6 p-10">
            <nav className="col-span-2">
              <h6 className="text-lg md:text-2xl font-semibold text-white mb-3">
                <button
                  className="cursor-pointer flex space-x-2 items-center"
                  onClick={() => Navigate("/")}
                >
                  <img src={logo} className="w-16 h-16 rounded-full" alt="" />
                </button>
              </h6>
              <p className="w-full lg:w-[310px]">
                Smart and caring solutions for your pet’s daily needs. From
                grooming to health checkups, we cover everything. Keeping your
                pets comfortable and stress-free every day.
              </p>
            </nav>
            <nav>
              <h6 className="text-base font-semibold text-white/80 mb-3">
                Company
              </h6>
              <a className="link link-hover">About Us</a>
              <a className="link link-hover">Our Mission</a>
              <a className="link link-hover">Contact Saled</a>
            </nav>
            <nav>
              <h6 className="text-base font-semibold text-white/80 mb-3">
                Services
              </h6>
              <a className="link link-hover">Services</a>
              <a className="link link-hover">Customer Stories</a>
              <a className="link link-hover">Winter Care</a>
            </nav>
            <nav>
              <h6 className="text-base font-semibold text-white/80 mb-3">
                Information
              </h6>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Terms & Conditions</a>
              <a className="link link-hover">Join Us</a>
            </nav>
            <nav>
              <h6 className="text-base font-semibold text-white/80 mb-3">
                Social Links
              </h6>
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-full text-[#010138]">
                  <NavLink to={"/"}>
                    <BsTwitter size={16} />
                  </NavLink>
                </div>
                <div className="bg-white p-2 rounded-full text-[#000000]">
                  <NavLink to={"/"}>
                    <LiaLinkedin size={16} />
                  </NavLink>
                </div>
                <div className="bg-white p-2 rounded-full text-[#000000]">
                  <NavLink to={"/"}>
                    <FaFacebook size={16} />
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
          <div className="footer border-t border-[#E5E7EB20]  pt-4 justify-center ">
            <p className="pt-5">
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
