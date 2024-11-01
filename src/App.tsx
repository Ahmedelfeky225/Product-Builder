import React from 'react'
import ProductCards from './components/ProductCards'

const App = () => {
  return (
    <div>
     <div className='border-2 border-red-600 grid grid-cols-4 m-6 p-1 bg-red-400 rounded-md gap-3'>
     <ProductCards/>
      <ProductCards/>
      <ProductCards/>
      <ProductCards/>
      <ProductCards/>
      <ProductCards/>
     </div>
    </div>
  )
}

export default App