interface IProps{
color:string
}
const CircleColor = ({color}:IProps) => {
  return (
    <span className='w-5 h-5 bg-indigo-500 rounded-full cursor-pointer mb-1' style={{background:color}}/>
  )
}

export default CircleColor