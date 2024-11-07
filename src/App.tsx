import { ChangeEvent, useState } from 'react'
import ProductCards from './components/ProductCards'
import Modal from './components/ui/Modal'
import { formInputList, productList } from './data'
import  Button  from './components/ui/Button'
import  Input  from './components/ui/Input'
import { IProducts } from './interfaces'


//** */ Render
const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [product,setProduct]=useState<IProducts>({
    title:"",
    description:"",
    imageURL:"",
    price:"",
    colors:[],
    category:{
      name:"",
      imageURL:""
  }
  })
  const openModal=() =>setIsOpen(true)
  const closeModal=()=>setIsOpen(false)
  
  const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    const{value,name} =e.target
    setProduct({
      ...product,
      [name]:value
    }
    )
    }
  const RenderList = productList.map(product=><ProductCards key={product.id} openModal={openModal} product={product}/>)
  const renderInputList=formInputList.map(input=> {
    return (
      <div key={input.name} className="flex flex-col">
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-500">{input.label}</label>
      <Input value={product[input.name]} type={input.type} id={input.id} name={input.name} onChange={onChangeHandler}/>
  </div>
    )
  }
)
console.log(product)

  return (
    <div className='container'>
      <Button className='bg-indigo-600' onClick={openModal}>Add</Button>
     <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-6 gap-2 md:gap-4'>
      {RenderList}
     </div>
     <Modal openStatus ={isOpen} closeModal={closeModal} title={"Add a New Product"}>
     <form className='flex flex-col space-y-3'>
     {renderInputList}
     <div className='flex items-center space-x-3'>
      <Button className="bg-indigo-600 hover:bg-indigo-700">Submit</Button>
      <Button className="bg-gray-400 hover:bg-gray-500" onClick={closeModal}>Cancel</Button>
      </div>
     </form>
    
      </Modal>
    </div>
  )
}

export default App
