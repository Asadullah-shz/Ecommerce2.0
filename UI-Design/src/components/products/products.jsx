import React from 'react'
import Head from './head.jsx'
import Salebanner from './salebanner.jsx'
import Items from './items.jsx'
import Batton from './button.jsx'



const products = () => {

  const Data=[
    {
      img: "https://images.unsplash.com/photo-1585102664582-d3f574466cf5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=881",
      title: "PS4 Controller DualShock V2",
      description:"The DualShock 4 Controller is an eighth-generation video game controller manufactured by Sony. It has similar features to its predecessor, DualShock 3, and is meant for PlayStation 4’s controller but can also work with PlayStation 3 via Micro-USB cable.",
      price:"59",

    },
    {
      img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      title: "Adidas Shoes",
      description:" The DualShock 4 Controller is an eighth-generation video game controller manufactured by Sony. It has similar features to its predecessor, DualShock 3, and is meant for PlayStation 4’s controller but can also work with PlayStation 3 via Micro-USB cable. ",
      price:"120",

    },
    {
      img: "https://images.unsplash.com/photo-1572721546624-05bf65ad7679?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1373",
      title: "Usb Cable",
      description:"The DualShock 4 Controller is an eighth-generation video game controller manufactured by Sony. It has similar features to its predecessor, DualShock 3, and is meant for PlayStation 4’s controller but can also work with PlayStation 3 via Micro-USB cable.",
      price:"5",

    },
     {
      img: "https://images.unsplash.com/photo-1585102664582-d3f574466cf5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=881",
      title: "PS4 Controller DualShock V2",
      description:"The DualShock 4 Controller is an eighth-generation video game controller manufactured by Sony. It has similar features to its predecessor, DualShock 3, and is meant for PlayStation 4’s controller but can also work with PlayStation 3 via Micro-USB cable.",
      price:"59",

    },
   
   
  ];

  return (
    <>
     <div>
        <Head />    
        <Salebanner />  
        
        </div>
 
   <div className='flex justify-center'>
    {Data.map(function(elem,idx){
      return <div key={idx}>
        <Items img={elem.img} title={elem.title} descri={elem.description} price={elem.price}/>
        </div>
    })}
    
   </div>
   <Batton /> 
    </>
   
  )
}

export default products