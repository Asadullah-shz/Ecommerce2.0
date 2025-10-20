
const products = (props) => {
  return (
    <>
    <div className='w-full h-auto flex flex-wrap  flex-row justify-center items-center   '>
    <div className='w-[420px] h-fit mx-5 mt-20  border-1 border-gray-400 rounded-lg shadow-lg overflow-hidden shadow-gray-500 hover:shadow-md'>
      <div className='w-full h-50  '>
         <img src={props.img} alt="" className='w-full h-80'/>
      </div>
      <div className='w-full h-auto p-9 mt-25'>
          <h1 className='text-xl font-bold'>{props.title}</h1>
          <p className='text-gray-600 my-2'>{props.descri}</p>
          <span className='text-xl font-semibold my-11  '>${props.price}</span>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default products