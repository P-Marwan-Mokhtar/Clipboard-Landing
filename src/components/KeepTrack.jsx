import React, { useState } from "react";
import img_computer from "/src/assets/images/image-computer.png";
const KeepTrack = () => {
  const [features, setFeatures] = useState([
    {
      title: "Quick Search",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquamnesciunt repudiandae consequuntur eos pariatur. Deserunt.",
    },
    {
      title: "iCloud Sync",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquamnesciunt repudiandae consequuntur eos pariatur. Deserunt.",
    },
    {
      title: "Complete History",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquamnesciunt repudiandae consequuntur eos pariatur. Deserunt.",
    },
  ]);
  return (
    <section>
      <div className="container">
        <div>
          <div className="text-center flex flex-col items-center gap-[15px] mb-[70px]">
            <h2 className=" text-[25px] md:text-[35px] font-semibold text-main-gray">
              Keep track of your snippets
            </h2>
            <p className="max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem incidunt, facilis cupiditate nisi itaque quod.
              Repudiandae enim hic iste neque nulla quidem dolor praesentium ex.
            </p>
          </div>
          <div className="grid grid-cols-1  gap-[70px] md:grid-cols-[50%_40%]  lg:grid-cols-[60%_30%]  ">
            <img src={img_computer} alt="" className="" />
            <div className=" flex flex-col gap-[50px] ">
              {features.map((feature) => (
                <div className=" flex flex-col gap-[10px]">
                  <h2 className="text-[25px] text-main-gray font-semibold">
                    {feature.title}
                  </h2>
                  <p className=" max-w-[450px]">{feature.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepTrack;
