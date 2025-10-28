import React from "react";
import Faed from "./categories/Fead";
import Caticons from "./categories/caticons";
import Salebanner from './products/salebanner.jsx'


const categories = () => {
  const Icons = [
    {
      img: "https://img.icons8.com/?size=100&id=66025&format=png&color=000000",
      title: "Phone",
    },
    {
      img: "https://img.icons8.com/?size=100&id=78916&format=png&color=000000",
      title: "Computer",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/141/141221.png",
      title: "Smartwatch's",
    },
    {
      img: "https://img.icons8.com/?size=100&id=8ftcmh3OgI9D&format=png&color=000000",
      title: "Headphone's",
    },
    {
      img: "https://icon-library.com/images/gaming-icon-vector/gaming-icon-vector-19.jpg",
      title: "Gaming",
    },
  ];

  const Tit = [
    {
      titl: "Categories",
    },
  ]; 
  const Data=[
  {
    title:"Browse By Category",
    
    

  },
];

  return (
    <>
      {Tit.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Faed title={elem.titl} />
          </div>
        );
      })}
 <div className="mx-6 ">
         
          {Data.map(function(elem,idx){
     return <div key={idx}>
      <Salebanner className="" title={elem.title} data={elem.Date}  /> 
     </div>
     })}
        
        </div>
      <div className="flex justify-center ">
        {Icons.map(function (elem, idx) {
          return (
            <div key={idx}>
              <Caticons img={elem.img} title={elem.title} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default categories;
