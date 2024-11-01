import React from 'react'

type Props = {}

const ProductCards = (props: Props) => {
  return (
    <div className='border rounded-md p-2 flex flex-col'>
      <img className="rounded-md" src="https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?t=st=1730442991~exp=1730446591~hmac=23a6d343a05f588a32a44d437846a7cb236a8bcd51d9c82b40003826a41c81e6&w=740" alt="product image" />
      <h3 className='my-2'>A white offroader jeep in the parking.</h3>
      <p>
      A white off-road Jeep parked, with a sturdy design and bold black accents.
      </p>
      <div className='flex items-center space-x-2 my-4'>
      <span className='w-5 h-5 bg-indigo-500 rounded-full cursor-pointer'/>
      <span className='w-5 h-5 bg-red-500 rounded-full cursor-pointer'/>
      <span className='w-5 h-5 bg-orange-500 rounded-full cursor-pointer'/>
      </div>
     <div className='flex items-center justify-between'>
     <span>$500.000</span>
      <img className="rounded-full w-10 h-10" src="https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?t=st=1730442991~exp=1730446591~hmac=23a6d343a05f588a32a44d437846a7cb236a8bcd51d9c82b40003826a41c81e6&w=740" alt="product image" />
     </div>
    <div className='flex items-center justify-between space-x-2 mt-5'>
    <button className='bg-indigo-600 text-white p-2 w-full rounded-md'>EDIT</button>
    <button className='bg-red-600 text-white p-2 w-full rounded-md'>REMOVE</button>
    </div>
    </div>
  )
}

export default ProductCards