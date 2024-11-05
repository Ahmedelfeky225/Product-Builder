import { InputHTMLAttributes } from "react"

interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {
  className?:string;
}
const Input = ({...rest}:InputProps ) => {
  return (
    <input className="border-2 border-gray-300" {...rest}/>
  )
}

export default Input;