import React from 'react'

const buttons = (props) => {
  return (
     <div className='text-center ml-125 space-x-6 text-lg font-medium'>
          <button>{props.btn}</button>
       </div>
  )
}

export default buttons