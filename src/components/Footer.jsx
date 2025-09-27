import React from "react";
import facebook from "/src/assets/images/icon-facebook.svg";
import twitter from "/src/assets/images/icon-twitter.svg";
import instagram from "/src/assets/images/icon-instagram.svg";
import logo from "/src/assets/images/logo.svg";

const Footer = () => {
  const icons = [facebook, twitter, instagram];
  const links = [
    "FAQs",

    "Privacy Policy",
    "Install Guide",
    "Press Kit",
    "Contact Us",
  ];
  return (
    <footer className="bg-[#F5F6F8]">
      <div className="container py-[50px]">
        <div className="flex items-center ir gap-[40px] md:gap-0 flex-col md:flex-row justify-between w-full ">
          <div className="flex gap-[30px] items-center md:items-start flex-col md:flex-row md:gap-[60px] xl:gap-[100px]   md:w-[500px]  xl:w-[700px]">
            <img className="w-[60px]" src={logo} alt="" />
            <ul className="grid  text-center md:text-start grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[10px] justify-between w-full">
              {links.map((link) => (
                <a href="">
                  <li className="text-main-gray ">{link}</li>
                </a>
              ))}
            </ul>
          </div>
          <ul className="flex gap-[30px] items-center">
            {icons.map((icon) => (
              <a href="">
                <img src={icon} alt="" />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
