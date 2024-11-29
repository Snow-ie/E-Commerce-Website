import React, { useState } from "react";
import GooglePlay from "../../assets/images/GooglePlay.svg";
import Qrcode from "../../assets/images/Qrcode.svg";
import AppStore from "../../assets/images/AppStore.svg";
import { socials } from "../../utils/data";
import { footerLinks } from "../../utils/data";
import SIcon from "../../assets/footer/SIcon";

const Footer = () => {
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [email, setEmail] = useState("");

  const handleFocus = () => setIsEmailActive(true);
  const handleBlur = () => {
    if (!email) setIsEmailActive(false);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);

  return (
    <div className="pt-[80px]">
      <footer className="bg-primary2 text-primary">
        <div className="py-8">
          <div className="container mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Exclusive</h3>
              <h4 className="text-2xl font-medium">Subscribe</h4>
              <p>Get 10% off your first order</p>
              <div className="flex items-center">
                <div
                  className={`relative ${
                    isEmailActive ? "ring-2 ring-secondary1" : ""
                  }`}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleEmailChange}
                    className={`px-4 py-2 bg-primary2 text-primary rounded-lg border w-full focus:outline-none ${
                      isEmailActive ? "border-secondary1" : "border-gray-300"
                    }`}
                  />
                  <button className="absolute top-1/2 transform -translate-y-1/2 right-2 h-[24px] w-[24px] pr-3">
                    <SIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Support</h3>
              <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:exclusive@gmail.com"
                  className="text-primary text-opacity-30 hover:text-secondary1"
                >
                  exclusive@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+8801588889999"
                  className="text-primary text-opacity-30 hover:text-secondary1"
                >
                  +88015-88888-9999
                </a>
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Account</h3>
              <ul className="space-y-2 text-base text-primary text-opacity-30">
                {footerLinks.account.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className="hover:text-secondary1">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Quick Link</h3>
              <ul className="space-y-2 text-base text-primary text-opacity-30">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-secondary1">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Download App</h3>
              <p className="text-xs text-primary text-opacity-30">
                Save $3 with App New User Only
              </p>
              <div className="flex space-x-2">
                <a href="https://example.com/qrcode">
                  <img src={Qrcode} alt="QR code" />
                </a>
                <div className="flex flex-col space-y-2">
                  <a href="https://play.google.com/store">
                    <img src={GooglePlay} alt="Google Play" />
                  </a>
                  <a href="https://www.apple.com/app-store/">
                    <img src={AppStore} alt="App Store" />
                  </a>
                </div>
              </div>
              <ul className="flex space-x-4">
                {socials.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary1 cursor-pointer"
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-4 text-center text-primary text-opacity-50 border-t border-primary border-opacity-30">
          &copy; Copyright Rimel 2022. All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
