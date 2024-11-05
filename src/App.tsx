import { useState } from 'react'
import ProductCards from './components/ProductCards'
import Modal from './components/ui/Modal'
import { productList } from './data'
import  Button  from './components/ui/Button'



//** */ Render
const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  
  function closeModal() {
    setIsOpen(false)
  }
  const RenderList = productList.map(product=><ProductCards key={product.id} openModal={openModal} product={product}/>)

  return (
    <div className='container'>
      <Button className='bg-indigo-600' onClick={openModal}>Add</Button>
     <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-6 gap-2 md:gap-4'>
      {RenderList}
     </div>
     <Modal openStatus ={isOpen} closeModal={closeModal} title={"Add a New Product"}>
      <div className='flex items-center space-x-2'>
      <Button className="bg-indigo-600 hover:bg-indigo-700">Submit</Button>
      <Button className="bg-gray-300 hover:bg-gray-400" onClick={closeModal}>Cancel</Button>
      </div>
      </Modal>
    </div>
  )
}

export default App
