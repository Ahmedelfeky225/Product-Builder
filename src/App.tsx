import React from 'react'
import ProductCards from './components/ProductCards'
import { productList } from './data'

//** */ Render
const RenderList = productList.map(product=><ProductCards key={product.id} product={product}/>)
const App = () => {
  return (
    <div>
     <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-6 gap-3'>
      {RenderList}
     </div>
    </div>
  )
}

export default App
