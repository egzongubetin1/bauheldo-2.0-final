import { Button } from '../../components';

interface Props {
    title: string,
    price: string,
    class: string,
    li1 : string,
    class2: string,
}

function subscriptionHandler() {
    return
}

const Subscription = (props : Props) => {
  return (
    <div className='subscription-container'>
      <div className='subscription-content'>
        <h2 className='subscription-title'>{props.title}</h2>
        <span className='subscription-span'><h1>{props.price}</h1><p>month</p></span>
        <Button variant={props.class} children="Choose" onClick={subscriptionHandler}/>
        <div className='subscription-container_options'> 
        <ul className='subscription-ul'>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
            <li className={props.class2}><img src={props.li1}/></li>
        </ul>
        </div>
        <Button variant={props.class} children="Choose" onClick={subscriptionHandler}/>
        </div>
        
    </div>
  )
}

export default Subscription