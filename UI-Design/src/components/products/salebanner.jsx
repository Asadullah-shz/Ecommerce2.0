import React from "react";

const salebanner = () => {
  return (
    <>
      <div className=" w-full h-20 flex  mt-5 mb-5 rounded-md items-center ">
        <h1 className="font-semibold mx-11  text-3xl ">Flash Sales</h1>
        <div className="mx-15   space-x-7 text-lg  mt-12 ">
          <div className="flex space-x-6 text-gray-700 text-center mb-3 text-xl">
            <h3 className="font-semibold items-center text-center flex ">Days </h3>
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
        <div className="justify-end flex space-x-4 ml-auto mr-17">
            <button className="border-2 rounded-full border-gray-100 bg-gray-100 ">
               <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#434242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
         <button className="border-2 rounded-full border-gray-100 bg-gray-100 ">
                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#454545"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#4d4c4c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
        </div>
      </div>
    </>
  );
};

export default salebanner;
