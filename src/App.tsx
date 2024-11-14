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
import {v4 as uuid} from "uuid";
import CustomListbox from './components/CustomListbox'



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
  const [products,setProducts]= useState<IProducts[]>(productList)
  console.log(products);

console.log(tempColors);
console.log(products);

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
      return;
    }
    // console.log("Send This Product to the Server...");
    setProducts(prev=>[{...product,id:uuid(),colors:tempColors},...prev])
    setProduct(defaultProduct)
    setTempColors([])
    closeModal()
}

//  -----------> Handlers  <---------------   //

  const RenderList = products.map(product=><ProductCards key={product.id} openModal={openModal} product={product}/>)
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
const renderProductColors=colors.map(color=><CircleColor key={color} color={color} onClick={()=>{
  if(tempColors.includes(color)){
    setTempColors(prev=>prev.filter(temp=> temp !== color))
    return
  }
  setTempColors(prev=>[...prev,color])
}}/>)


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
    {tempColors.length > 0 && <div className='flex items-center flex-wrap space-x-1'>
      {tempColors.map(color=><span key={color} className='p-1 rounded-md text-white text-xs mr-1 mb-1' style={{background:color}}>{color}</span>)}
    </div>}
    <div className='flex items-center space-x-1 flex-wrap'>
    {renderProductColors}
    </div>
    <CustomListbox/>
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
