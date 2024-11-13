import { ChangeEvent, FormEvent, useState } from 'react'
import ProductCards from './components/ProductCards'
import Modal from './components/ui/Modal'
import {colors, formInputList, productList } from './data'
import  Button  from './components/ui/Button'
import  Input  from './components/ui/Input'
import { IProducts } from './interfaces'
import { productValidation } from './validation'
import ErrorMessage from './components/ErrorMessage'
import CircleColor from './components/CircleColor'


//** */ Render
const App = () => {
  const defaultProduct:IProducts= {
    title:"",
    description:"",
    imageURL:"",
    price:"",
    colors:[],
    category:{
      name:"",
      imageURL:""
  }
}
  const [isOpen, setIsOpen] = useState(false)
  const [product,setProduct]=useState<IProducts>(defaultProduct)
  const [errors,setErrors]=useState({ title:"",description:"",imageURL:"",price:"",})
  const [tempColors,setTempColors] = useState<string[]>([])

console.log(tempColors);

//  -----------> Handlers  <---------------   //

  const openModal=():void =>setIsOpen(true)
  const closeModal=():void=>setIsOpen(false)
  
  const onChangeHandler=(e:ChangeEvent<HTMLInputElement>):void =>{
    const{value,name} =e.target
    setProduct({
      ...product,
      [name]:value
    }
    )
    setErrors({
      ...errors,
      [name] : ""
    })
    }

const onCancel= ():void => {
setProduct(defaultProduct)
closeModal()
}


const onSubmitHandler=(evt:FormEvent<HTMLFormElement>):void =>{
  evt.preventDefault()
  const {title,description,imageURL,price} = product;
  const errors=productValidation({title,description,imageURL,price})
  console.log(errors)

    const hasErrorMsg=Object.values(errors).some(val=>val=== "") && Object.values(errors).every(val=>val=== "") 
    console.log(hasErrorMsg)
    if(!hasErrorMsg){
      setErrors(errors)
    }
    console.log("Send This Product to the Server...");
}

//  -----------> Handlers  <---------------   //

  const RenderList = productList.map(product=><ProductCards key={product.id} openModal={openModal} product={product}/>)
  const renderInputList=formInputList.map(input=> {
    return (
      <div key={input.name} className="flex flex-col">
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-500">{input.label}</label>
      <Input value={product[input.name]} type={input.type} id={input.id} name={input.name} onChange={onChangeHandler}/>
      <ErrorMessage msg={errors[input.name]}/>
  </div>
    )
  }
)
const renderCircleColors=colors.map(color=><CircleColor key={color} color={color} onClick={()=>setTempColors(prev=>[...prev,color])}/>)




  return (
    <div className='container'>
      <div className='flex justify-center'>
      <Button className='bg-indigo-600 px-7 py-2 mt-2 mx-auto hover:bg-indigo-700' width='w-fit' onClick={openModal}>Build Project</Button>
      </div>
     <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-6 gap-2 md:gap-4'>
      {RenderList}
     </div>
     <Modal openStatus ={isOpen} closeModal={closeModal} title={"Add a New Product"}>
     <form className='flex flex-col space-y-3' onSubmit={onSubmitHandler}>
     {renderInputList}
    <div className='flex items-center space-x-1 flex-wrap'>
    {renderCircleColors}
    </div>
     <div className='flex items-center space-x-3'>
      <Button className="bg-indigo-600 hover:bg-indigo-700">Submit</Button>
      <Button className="bg-gray-400 hover:bg-gray-500" onClick={onCancel}>Cancel</Button>
      </div>
     </form>
    
      </Modal>
    </div>
  )
}

export default App
