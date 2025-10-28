import React from 'react'
import Scroller from '../scroller'


const Fead = (props) => {
  return (
      <div className='flex  items-center m-5 ml-15 mt-15'>
        <h1  className='bg-red-700 w-5 h-10 rounded-md    text-red-700'>ii</h1>
        <h3 className='text-red-500 font-bold text-2xl p-2 m-3 w-15 '>{props.title}</h3>
        <Scroller />
    </div>
  )
}

export default Fead