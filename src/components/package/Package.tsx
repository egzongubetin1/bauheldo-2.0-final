import { Button } from '../../components';
import { useState } from 'react';

interface Props {
    title: string,
    src:  string,
    paragraph: string,
    price: string,
    buttonTitle: string,
    function: () => void,
    types: string,
    state: boolean,
}

const Package = (props : Props) => {

  const [ show , useShow ] = useState<boolean>(props.state)

  return (
    <div className="package-container">
        <div className="package-container_content">
            <h2>{props.title}</h2>
            <img src={props.src}/>
            <p>{props.paragraph}</p>
        </div>
        { show &&
        <div className="package-container_content2">
          <h2>{props.price}</h2>
          <Button variant={props.types} onClick={props.function} children={props.buttonTitle} />
        </div>
        }
        {!show &&
         <div className='package-container_content3'>
           <p>{props.price}</p>
           <Button variant={props.types} onClick={props.function} children={props.buttonTitle} />
         </div>
        }
    </div>
  )
}

export default Package