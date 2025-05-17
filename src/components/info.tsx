import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="bg-contactBg bg-no-repeat bg-cover my-5 py-10">
        <div className="flex flex-col md:flex-wrap md:flex-row w-[90%] xl:w-[85%] mx-auto">
          <div className="lg:w-[40%] xl:w-[50%]">
            <p className="text-textColor font-popinsRegular text-xl md:text-2xl">
              Contact Info
            </p>
            <h4 className="font-popinsSemiBold text-themeColor text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl mt-5 xl:w-[80%]">
              We Are Here to Assist you
            </h4>
          </div>
          <div className="md:w-[50%] lg:w-[30%] xl:w-[25%] mt-8 md:mt-14 lg:mt-0">
            <p className="font-popinsSemiBold text-textColor text-xl md:text-2xl">
              Email Address
            </p>
            <div className="h-[3px] w-8 bg-textColor my-5 lg:my-6"></div>
            <p className="font-popinsSemiBold text-textColor text-xl md:text-2xl">
              help@info.com
            </p>
            <p className="font-popinsRegular text-textColor text-base md:text-lg md:w-[70%] lg:w-[90%] xl:w-[70%] mt-4">
              Assistance hours: Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
          <div className="md:w-[50%] lg:w-[30%] xl:w-[25%] mt-8 md:mt-14 lg:mt-0 xl:pl-5">
            <p className="font-popinsSemiBold text-textColor text-xl md:text-2xl">
            Number
            </p>
            <div className="h-[3px] w-8 bg-textColor my-5 lg:my-6"></div>
            <p className="font-popinsSemiBold text-textColor text-xl md:text-2xl">
            (808) 998-34256
            </p>
            <p className="font-popinsRegular text-textColor text-base md:text-lg md:w-[70%] lg:w-[90%] xl:w-[70%] mt-4">
            Assistance hours: 
            Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
