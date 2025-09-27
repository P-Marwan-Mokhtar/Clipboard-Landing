import React from "react";
import logo from "/src/assets/images/logo.svg";
const HeroPage = () => {
  return (
    <section className="py-[100px] bg-white bg-[url(/src/assets/images/bg-header-mobile.png)] md:bg-[url(/src/assets/images/bg-header-desktop.png)] bg-[length:100%] bg-no-repeat  md:h-[60vh] w-full">
      <div className=" container h-full">
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <img src={logo} alt="" className="mb-[50px]" />

          <div className="text-center flex flex-col gap-[15px] mb-[50px]">
            <h2 className=" text-[30px] md:text-[40px] font-semibold text-main-gray">
              A history of everything you copy
            </h2>
            <p className="max-w-[600px]  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              aperiam accusamus esse dolor expedita odit a dolores laborum quia
              iusto.
            </p>
          </div>
          <div className="flex md:flex-row flex-col w-full md:w-auto gap-[15px]">
            <button className="btn bg-[#26BBA5] !w-full md:!w-[180px]">
              Download for IOS
            </button>
            <button className="btn bg-[#6174FF] !w-full md:!w-[180px]">
              Download for Mac
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
