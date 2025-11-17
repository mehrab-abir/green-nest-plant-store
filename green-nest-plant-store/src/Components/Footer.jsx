import React from "react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-12 bg-green-900 text-white mt-10">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between mb-8">
          <div className="flex-1 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold mb-5">Quick Links</h3>
            <div className="space-y-1 flex flex-col">
              <span>About</span>
              <span>Contact</span>
              <span>Privacy Policy</span>
            </div>
          </div>

          <div className="flex-1 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold mb-5">Follow Us</h3>
            <div className="flex gap-10">
              <FaFacebook className="text-2xl cursor-pointer" />
              <FaInstagram className="text-2xl cursor-pointer" />
              <FaXTwitter className="text-2xl cursor-pointer" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-5">GreenNest</h3>
            <p>
              Your trusted partner in creating a greener, healthier home with
              beautiful indoor plants.
            </p>
          </div>
        </div>

        <div className="text-center pt-5 border-t border-green-700">
          <p>© 2025 GreenNest. All rights reserved.</p>
          <p>Contact Developer : <Link to='https://www.linkedin.com/in/mehrababir' target="blank" className="font-bold">Mehrab Abir</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
