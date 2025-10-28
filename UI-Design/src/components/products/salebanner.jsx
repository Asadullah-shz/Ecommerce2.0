import Scroller from "../scroller";

const salebanner = (props) => {
  return (
    <>
      <div className=" w-full h-20 flex  mt-5 mb-5 rounded-md items-center ">
        <h1 className="font-semibold mx-11  text-3xl ">{props.title}</h1>
        <div className="mx-15   space-x-7 text-lg  mt-12 ">
          <div className="flex space-x-6 text-gray-700 text-center mb-3 text-xl">
            <h3 className="font-semibold items-center text-center flex ">
             {props.days}
            </h3>
            <h3 className="font-semibold items-center text-center flex ">
              {props.hours}
            </h3>
            <h3 className="font-semibold items-center text-center flex ">
              {props.minutes}
            </h3>
            <h3 className="font-semibold items-center text-center flex ">
              {props.Seconds}
            </h3>
          </div>
          <div className="flex space-x-7 gap-3 text-gray-700 text-center mb-7 text-2xl">
            <h3 className="font-bold  w-10 rounded-md flex items-center justify-center ">
              {props.DayNum}
            </h3>
            <h3 className="font-bold   w-10  rounded-md flex items-center justify-center ">
              {props.Hournum}
            </h3>
            <h3 className="font-bold   w-10  rounded-md flex items-center justify-center ">
              {props.minnum}
            </h3>
            <h3 className="font-bold   w-10  rounded-md flex items-center justify-center ">
              {props.Secnum}
            </h3>
          </div>
        </div>
        <Scroller />
      </div>
    </>
  );
};

export default salebanner;
