import React from "react";

const Clipboard = () => {
  return (
    <section>
      <div className="container pb-[100px]">
        <div className=" flex flex-col items-center ">
          <div className="text-center flex flex-col gap-[15px] mb-[50px]">
            <h2 className=" text-[20px] md:text-[35px] font-semibold text-main-gray">
              Clipboard for IOS and Mac OS
            </h2>
            <p className="max-w-[650px]  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              aperiam accusamus esse dolor expedita odit a dolores laborum quia
              iusto.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[15px] md:w-auto w-full">
            <button className="btn bg-[#26BBA5]  !w-full md:!w-[180px]">
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

export default Clipboard;
