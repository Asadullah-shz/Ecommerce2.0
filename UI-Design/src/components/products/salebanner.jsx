import React from "react";
import Scroller from "../scroller";

const salebanner = () => {
  return (
    <>
      <div className=" w-full h-20 flex  mt-5 mb-5 rounded-md items-center ">
        <h1 className="font-semibold mx-11  text-3xl ">Flash Sales</h1>
        <div className="mx-15   space-x-7 text-lg  mt-12 ">
          <div className="flex space-x-6 text-gray-700 text-center mb-3 text-xl">
            <h3 className="font-semibold items-center text-center flex ">
              Days{" "}
            </h3>
            <h3 className="font-semibold items-center text-center flex ">
              hours{" "}
            </h3>
            <h3 className="font-semibold items-center text-center flex ">
              Minutes{" "}
            </h3>
            <h3 className="font-semibold items-center text-center flex ">
              Seconds{" "}
            </h3>
          </div>
          <div className="flex space-x-7 gap-3 text-gray-700 text-center mb-7 text-2xl">
            <h3 className="font-bold  w-10 rounded-md flex items-center justify-center ">
              08
            </h3>
            <h3 className="font-bold   w-10  rounded-md flex items-center justify-center ">
              12
            </h3>
            <h3 className="font-bold   w-10  rounded-md flex items-center justify-center ">
              45
            </h3>
            <h3 className="font-bold   w-10  rounded-md flex items-center justify-center ">
              52
            </h3>
          </div>
        </div>
        <Scroller />
      </div>
    </>
  );
};

export default salebanner;
