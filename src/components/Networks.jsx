import React from "react";
import icon1 from "/src/assets/images/logo-google.png";
import icon2 from "/src/assets/images/logo-ibm.png";
import icon5 from "/src/assets/images/logo-microsoft.png";
import icon3 from "/src/assets/images/logo-hp.png";
import icon4 from "/src/assets/images/logo-vector-graphics.png";

const Networks = () => {
  let icons = [icon1, icon2, icon3, icon4, icon5];
  return (
    <section className="py-[100px]">
      <div className="container">
        <div className="grid gap-[70px]  md:gap-[40px]  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center justify-center place-items-center ">
          {icons.map((icon) => (
            <img src={icon} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;
