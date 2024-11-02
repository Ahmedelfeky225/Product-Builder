import { ReactNode,ButtonHTMLAttributes } from "react"
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
children : ReactNode;
className?:string;
}
const Button = ({children,className,...rest}:IProps) => {
    console.log({rest})
  return (
    <button className={`${className} text-white p-2 w-full rounded-md`} {...rest} >{children}</button>
  )
}

export default Button