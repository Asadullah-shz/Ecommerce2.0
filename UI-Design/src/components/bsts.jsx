import React from "react";
import Head from "./bestselling/head.jsx";
import Items from "./reusable/items.jsx";

const bsts = () => {
  const Tite = [
    {
      Title: "Our Best Selling Products",
    },
  ];
  const Data=[
    {
      img: "https://images.unsplash.com/photo-1517472292914-9570a594783b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2033",
      title: "Cloth ......",
      description:"The DualShock 4 Controller is an eighth-generation video game controller manufactured by Sony. It has similar features to its predecessor, DualShock 3, and is meant for PlayStation 4’s controller but can also work with PlayStation 3 via Micro-USB cable.",
      price:"59",

    },
    {
      img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      title: "Bag",
      description:" The DualShock 4 Controller is an eighth-generation video game controller manufactured by Sony. It has similar features to its predecessor, DualShock 3, and is meant for PlayStation 4’s controller but can also work with PlayStation 3 via Micro-USB cable. ",
      price:"120",

    },
    {
      img: "https://images.unsplash.com/photo-1754928504713-4d90d3899229?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
      title: "Corsair Liquid Cooler",
      description:"The DualShock 4 Controller is an eighth-generation video game controller manufactured by Sony. It has similar features to its predecessor, DualShock 3, and is meant for PlayStation 4’s controller but can also work with PlayStation 3 via Micro-USB cable.",
      price:"5",

    },
     {
      img: "https://images.unsplash.com/photo-1660855551570-dd44e0ab800c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      title: "Fractal Pc Casing",
      description:"The DualShock 4 Controller is an eighth-generation video game controller manufactured by Sony. It has similar features to its predecessor, DualShock 3, and is meant for PlayStation 4’s controller but can also work with PlayStation 3 via Micro-USB cable.",
      price:"59",

    },
   
   
  ];

  return (
    <>
      {Tite.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Head title={elem.Title} />
          </div>
        );
      })}
     <div className='flex justify-center'>

    {Data.map(function(elem,idx){
      return <div key={idx}>
        <Items img={elem.img} title={elem.title} descri={elem.description} price={elem.price}/>
        </div>
    })}
    </div>
    </>
  );
};

export default bsts;
