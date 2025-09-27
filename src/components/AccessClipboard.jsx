import React from "react";

const AccessClipboard = () => {
  return (
    <section className="pt-[150px]">
      <div className="container ">
        <div className="flex flex-col items-center">
          <div className="text-center flex flex-col items-center gap-[15px] mb-[50px]">
            <h2 className=" text-[25px] md:text-[35px] font-semibold text-main-gray">
              Access Clipboard anywhere
            </h2>
            <p className="max-w-[700px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              nulla laborum tenetur omnis et rem aut mollitia eum quia, magni
              vel?
            </p>
          </div>
          <img
            src="/src/assets/images/image-devices.png"
            className="w-[60%]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AccessClipboard;
