import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement>{
color:string;
}
const CircleColor = ({color,...rest}:IProps) => {
  return (
    <span className='w-5 h-5 bg-indigo-500 rounded-full cursor-pointer mb-1' style={{background:color}}  {...rest} />
  )
}

export default CircleColor