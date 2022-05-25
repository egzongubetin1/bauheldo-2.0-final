import { Link } from "react-router-dom";

interface Props {
    title: String,
}

export default function DiscoverCard (props: Props) {
    return(
        <>
        <div className='discover-background'>
        <div className="discover-container">
           <div className='discover container'>
               <div className='discoverBanner'>
                   <h2>{props.title}</h2>
                   <Link to="/offers">Start Now</Link>
               </div>
           </div>
        </div>
   </div> 
   </>
    )
}