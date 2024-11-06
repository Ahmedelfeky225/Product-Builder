import { InputHTMLAttributes } from "react"

interface InputProps  extends InputHTMLAttributes<HTMLInputElement> {
  className?:string;
}
const Input = ({...rest}:InputProps ) => {
  return (
    <input className="px-3 py-3 rounded-lg shadow-md border-[1px] border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-300 text-base" {...rest}/>
  )
}

export default Input;