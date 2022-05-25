
interface Props{
  image : string,
  date : string,
  description : string,
}

const IsoNews = (props : Props) => {
  return (
    <div className="IsoNews-container">
      <img src={props.image}/>
      <p>{props.date}</p>
      <h3>{props.description}</h3>
    </div>
  )
}

export default IsoNews