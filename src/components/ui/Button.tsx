import { ReactNode,ButtonHTMLAttributes } from "react"
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
children : ReactNode;
className?:string;
width?:"w-fit" | "w-full";
}
const Button = ({children,className,width="w-full",...rest}:IProps) => {
    // console.log({rest})
  return (
    <button className={`${className} ${width} text-white px-3 py-[0.7rem] font-medium duration-200 rounded-lg cursor-pointer`} {...rest} >{children}</button>
  )
}

export default Button