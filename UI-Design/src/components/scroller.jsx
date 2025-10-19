import React from 'react'

const scroller = () => {
  return (
    <div className=" w-full h-20 flex  mt-5 mb-5 rounded-md items-center ">
        <div className="justify-end flex space-x-4 ml-auto mr-17">
            <button className="border-2 rounded-full border-gray-100 bg-gray-100 ">
               <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#434242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
         <button className="border-2 rounded-full border-gray-100 bg-gray-100 ">
                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#454545"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#4d4c4c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
        </div>
      </div>
  )
}

export default scroller