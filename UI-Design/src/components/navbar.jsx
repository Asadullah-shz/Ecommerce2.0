import React from 'react'

const navbar = () => {
  return (
    <div className='flex   text-black p-4 border-b-2 border-gray-300  items-center h-20 iustify-space-between  py-4'>
        <h1 className='text-2xl px-5px font-bold  ml-9'>Exclusive</h1>
       <div className='text-center ml-125 space-x-6 text-lg font-medium'>
          <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Sign Up</button>
            
       </div>
        <div>
    <div className="home flex justify-center items-center ml-30 border-2 border-gray-300 p-2 rounded-lg w-full bg-gray-100 text-gray-500">
      <h1 className="home-logo justify-center font-sans">What are you looking for</h1> <h1 className="ml-4 justify-center"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></h1>
    </div>
  </div>
    </div>
  )
}

export default navbar