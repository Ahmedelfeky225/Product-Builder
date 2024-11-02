import { ReactNode,ButtonHTMLAttributes } from "react"
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
children : ReactNode;
className?:string;
width?:"w-fit" | "w-full";
}
const Button = ({children,className,width="w-full",...rest}:IProps) => {
    console.log({rest})
  return (
    <button className={`${className} ${width} text-white p-2  rounded-md`} {...rest} >{children}</button>
  )
}

export default Button