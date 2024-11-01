interface IProps{
imageLink:string;
alt:string;
className:string;
}
const ImageCard = ({imageLink,alt,className}:IProps) => {
  return (
    <img className={className} src={imageLink} alt={alt} />
  )
}

export default ImageCard
