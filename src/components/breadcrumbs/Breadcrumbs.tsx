import { Link } from "react-router-dom"

interface Props{
     name: string,
     link:string,
}


const Breadcrumbs = (props : Props) => {
  return (
    <div className='breadcrumbs-navigate'>
      <Link to='/'><img className="breadcrumbs-home" src='../../../assets2/home-icon.svg'/></Link>
      <img src='../../../assets2/next-home.svg'/>
      <a  href={props.link}>{props.name}</a>
    </div>
  )
}

export default Breadcrumbs