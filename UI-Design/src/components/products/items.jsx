import React from 'react'

const products = () => {
  return (
    <>
    <div className='w-full h-auto flex flex-wrap  flex-row justify-center items-center  '>
    <div className='w-[400px] h-auto mx-5 mt-20 border-2 rounded-lg shadow-lg overflow-hidden '>
      <div className='w-full h-50  '>
         <img src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2250" alt=""/>
      </div>
      <div className='w-full h-auto p-9 mt-25'>
          <h1 className='text-2xl font-bold'>Product Title</h1>
          <p className='text-gray-600 my-2'>This is a brief description of the product. It highlights key features and benefits to entice customers.</p>
          <span className='text-xl font-semibold my-5'>$29.99</span>
      </div>
    </div>
    {/* <div className='w-[400px] h-auto mx-5 mt-20 border-2 rounded-lg shadow-lg overflow-hidden '>
      <div className='w-full h-50  '>
         <img src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2250" alt=""/>
      </div>
      <div className='w-full h-auto p-9 mt-25'>
          <h1 className='text-2xl font-bold'>Product Title</h1>
          <p className='text-gray-600 my-2'>This is a brief description of the product. It highlights key features and benefits to entice customers.</p>
          <span className='text-xl font-semibold my-5'>$29.99</span>
      </div>
    </div>
     <div className='w-[400px] h-auto mx-5 mt-20 border-2 rounded-lg shadow-lg overflow-hidden '>
      <div className='w-full h-50  '>
         <img src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2250" alt=""/>
      </div>
      <div className='w-full h-auto p-9 mt-25'>
          <h1 className='text-2xl font-bold'>Product Title</h1>
          <p className='text-gray-600 my-2'>This is a brief description of the product. It highlights key features and benefits to entice customers.</p>
          <span className='text-xl font-semibold my-5'>$29.99</span>
      </div>
    </div> */}
    
    </div>
    
    </>
  )
}

export default products