import { ChangeEvent, FormEvent, useState } from 'react'
import ProductCards from './components/ProductCards'
import Modal from './components/ui/Modal'
import { categories, colors, formInputList, productList } from './data'
import  Button  from './components/ui/Button'
import  Input  from './components/ui/Input'
import { IProducts } from './interfaces'
import { productValidation } from './validation'
import ErrorMessage from './components/ErrorMessage'
import CircleColor from './components/CircleColor'
import {v4 as uuid} from "uuid";
import CustomListbox from './components/ui/CustomListbox'
import { TProductNames } from './types'



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
  const [selected, setSelected] = useState(categories[0])
  const [validateColor,setValidateColor]= useState("")
  const [productToEdit,setProductToEdit]=useState<IProducts>(defaultProduct)
  const [productToEditIdx,setProductToEditIdx]=useState(0)
  const [isOpenEditModal,setEditOpenModal] = useState(false)
  // console.log(products);
console.log("productToEdit",productToEdit)

console.log(tempColors);
console.log(products);

//  -----------> Handlers  <---------------   //

  const openModal=():void =>setIsOpen(true)
  const closeModal=():void=>setIsOpen(false)

  const openEditModal=():void =>setEditOpenModal(true)
  const closeEditModal=():void=>setEditOpenModal(false)
  
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


 const onChangeEditHandler=(e:ChangeEvent<HTMLInputElement>):void =>{
  const{value,name} =e.target
  setProductToEdit({
    ...productToEdit,
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
      // return;
    }
    if(tempColors.length<1){
      setValidateColor("Please Choose color at least")
      return
    }
    // console.log("Send This Product to the Server...");
    setProducts(prev=>[{...product,id:uuid(),colors:tempColors,category:selected},...prev])
    setProduct(defaultProduct)
    setTempColors([])
    setSelected(categories[0])
    closeModal()
}



const onSubmitEditHandler=(evt:FormEvent<HTMLFormElement>):void =>{
  evt.preventDefault()
  const {title,description,imageURL,price} = productToEdit;
  const errors=productValidation({title,description,imageURL,price})
  console.log(errors)

    const hasErrorMsg=Object.values(errors).some(val=>val=== "") && Object.values(errors).every(val=>val=== "") 
    console.log(hasErrorMsg)
    if(!hasErrorMsg){
      setErrors(errors)
      return;
    }
    // if(tempColors.length<1){
    //   setValidateColor("Please Choose color at least")
    //   return
    // }
    // console.log("Update This Product to the Server...");
// دي طرق شائعه انا عملتها للتعديل علي المنتجات اول طريقه وتاني طريقه انا اللي عملهم 
//اما الطريقه التالته دي طريقه الكورس 
// (1)
// if(productToEdit.id ){
//   setProducts(prev=>prev.map(product=>{
//     if(product.id === productToEdit.id){
//       return productToEdit;
//     }else{
//       return product;
//     }
// }))
// }

// (2)

// setProducts(prev=>prev.map((product,idx)=>idx === indexProductCard ? productToEdit:product))

  // (3)

const updateProducts = [...products]
products[productToEditIdx]= productToEdit
setProducts(updateProducts)

setProductToEdit(defaultProduct)
    setTempColors([])
    setSelected(categories[0])
    closeEditModal()
}
//  -----------> Handlers  <---------------   //

  const RenderList = products.map((product,idx)=><ProductCards  product={product} setProductToEdit={setProductToEdit} openEditModal={openEditModal} idx={idx} setProductToEditIdx={setProductToEditIdx}/>)
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

const renderProductEditWithErrorMsg = (id:string,label:string,name:TProductNames)=>{
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-[2px] text-sm font-medium text-gray-500">{label}</label>
      <Input value={productToEdit[name]} type="text" id={id} name={name} onChange={onChangeEditHandler} />
      <ErrorMessage msg={errors[name]} />
    </div>
  );
}  




 
// --------------> Handlers <------------------  //
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
     {/* Add Modal */}
     <Modal openStatus ={isOpen} closeModal={closeModal} title={"Add a New Product"}>
     <form className='flex flex-col space-y-3' onSubmit={onSubmitHandler}>
     {renderInputList}
     <CustomListbox selected={selected} setSelected={setSelected}/>
    <div className='flex items-center space-x-1 flex-wrap'>
    {renderProductColors}
    </div>
    {tempColors.length > 0 ? <div className='flex items-center flex-wrap space-x-1'>
      {tempColors.map(color=><span key={color} className='p-1 rounded-md text-white text-xs mr-1 mb-1' style={{background:color}}>{color}</span>)}
    </div> : <ErrorMessage msg={validateColor}/>}

     <div className='flex items-center space-x-3'>
      <Button className="bg-indigo-600 hover:bg-indigo-700">Submit</Button>
      <Button className="bg-gray-400 hover:bg-gray-500" onClick={onCancel}>Cancel</Button>
      </div>
     </form>
    
      </Modal>


        {/* Edit Modal */}
     <Modal openStatus={isOpenEditModal} closeModal={closeEditModal} title={"Edit This Product"}>
     <form className='flex flex-col space-y-3' onSubmit={onSubmitEditHandler}>
    {renderProductEditWithErrorMsg("title","Product Title","title")}
    {renderProductEditWithErrorMsg("description","Product Description","description")}
    {renderProductEditWithErrorMsg("imageURl","Product image URL","imageURL")}
    {renderProductEditWithErrorMsg("price","Product Price","price")}
     

     {/* <CustomListbox selected={selected} setSelected={setSelected}/> */}
    {/* <div className='flex items-center space-x-1 flex-wrap'>
    {renderProductColors}
    </div>
    {tempColors.length > 0 ? <div className='flex items-center flex-wrap space-x-1'>
      {tempColors.map(color=><span key={color} className='p-1 rounded-md text-white text-xs mr-1 mb-1' style={{background:color}}>{color}</span>)}
    </div> : <ErrorMessage msg={validateColor}/>} */}

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
