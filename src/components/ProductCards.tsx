import { IProducts } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import ImageCard from "./ImageCard"
import Button from "./ui/Button"

interface IProps{
product:IProducts ;
setProductToEdit:(product:IProducts)=>void;
}
const ProductCards = ({product,setProductToEdit}:IProps) => {

const {imageURL,description,title,price,category,colors} = product;

// Render
const renderProductColors=colors.map(color=><CircleColor key={color} color={color}/>)


// ---------------   Handlers   ------------------ //

const toEdit = ()=>{
  setProductToEdit(product)
}

// ---------------   Handlers   ------------------ //

  return (
    <div className='border rounded-md p-2 flex flex-col max-w-sm mx-auto md:max-w-lg  md:mx-0 space-y-3'>
      <ImageCard imageLink={imageURL} alt={"product name"} className="rounded-md object-cover h-52 "/>
      <h3 className='my-2 text-lg font-semibold'>{txtSlicer(title,25)}</h3>
      <p className="text-xs text-gray-500 break-words">
      {txtSlicer(description)}
      </p>
      <div className='flex items-center space-x-2 my-4'>
        {renderProductColors}
      </div>
     <div className='flex items-center justify-between'>
     <span className="text-lg text-indigo-600 font-semibold">${price}</span>
     <ImageCard imageLink={category.imageURL} alt={category.name} className="rounded-full w-10 h-10 object-bottom"/>
     </div>

    <div className='flex items-center justify-between space-x-2 '>
    <Button type="button" className="bg-indigo-600" width="w-full" onClick={toEdit}>EDIT</Button>

    <Button className='bg-red-600' style={{cursor:"pointer"}}>DELETE</Button>

    </div>
    </div>
  )
}

export default ProductCards