import React from 'react'

const services = () => {
  return (
    <>
    <div className='mx-60 my-40'>
        <div className='flex space-x-100 mx-11 '>
            <span className='border-2 rounded-full border-gray-500 bg-gray-400 '>
        <img className='p-5 w-30 h-30  ' src="https://img.icons8.com/?size=100&id=7776&format=png&color=000000" alt="" />
        </span>
         <span className='border-2 rounded-full border-gray-500 bg-gray-400 '>
        <img className='p-5 w-30 h-30  ' src="https://img.icons8.com/?size=100&id=apQXuzIOhFBG&format=png&color=000000" alt="" />
        </span>
         <span className='border-2 rounded-full border-gray-500 bg-gray-400 '>
        <img className='p-5 w-30 h-30  ' src="https://img.icons8.com/?size=100&id=2606&format=png&color=000000" alt="" />
        </span>
         
         
         
        </div>
        <div className=' py-7 flex '>
            <h1 className='font-medium text-2xl'>FREE AND FAST DELIVERY</h1>
            <h1 className='font-medium text-2xl mx-57'>24/7 CUSTOMER SERVICE</h1>
            <h1 className='font-medium text-2xl'>MONEY BACK GUARANTEE</h1>
        </div>
        <div className='flex space-x-40'>
       <div className='text-s font-mono '>
            <p >Free Delivery for all orders over 140$</p>
        </div>
         <div className='text-s font-mono '>
            <p className='mx-7'>Friendly 24/7 customer support</p>
        </div>
         <div className='text-s font-mono '>
            <p className='mx-13'>We return money within 30 days</p>
        </div>
        </div>
    </div>
     
    </>
  )
}

export default services