import React, { useState } from "react";
import blacklist from "/src/assets/images/icon-blacklist.svg";
import plain from "/src/assets/images/icon-preview.svg";
import text from "/src/assets/images/icon-text.svg";
const SuperCharge = () => {
  const [tools, setTools] = useState([
    {
      icon: blacklist,
      title: "Create blacklists",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, oditasperiores accusantium cupiditate repudiandae non Aperiam? ",
    },
    {
      icon: text,
      title: "Plain text snippets",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur?",
    },
    {
      icon: plain,
      title: "Sneak preview",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur?",
    },
  ]);
  return (
    <section className="pt-[100px]">
      <div className="container">
        <div className="text-center flex flex-col items-center gap-[15px] mb-[70px]">
          <h2 className=" text-[25px] md:text-[35px] font-semibold text-main-gray">
            Supercharge your workflow
          </h2>
          <p className="max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-[40px]  xl:gap-0 items-center xl:grid-cols-3">
          {tools.map((data) => (
            <div className="flex items-center flex-col text-center gap-[15px]">
              <img src={data.icon} alt="" />
              <h2 className="text-main-gray text-[25px] font-semibold">
                {data.title}
              </h2>
              <p className="max-w-[450px]">{data.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuperCharge;
