import React from "react";


const caticons = (props) => {
  return (
    <>
    <div className="flex gap-9 ml-15 hover:bg-red-500 rounded-md">
      <div className="   text-center border-2 border-gray-400 rounded-lg w-50 h-50  ">
        <img src={props.img} className="w-20 h-20 mx-15 my-10" alt="" />
        <h1 className="text-xl font-xs">{props.title}</h1>
      </div>
      
    </div>
     
    </>
  );
};

export default caticons;
