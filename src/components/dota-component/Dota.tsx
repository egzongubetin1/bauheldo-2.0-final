import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    title1: string,
    description1: string,
    title2: string,
    description2: string,
    title3: string,
    description3: string,
    state: boolean,
    image1: string,
    image2: string,
    image3: string,
    moreString : string,
    moreString2 : string,
    moreString3 : string,
}

const Dota = (props : Props) => {

    const [show , useShow] = useState<boolean>(props.state);


  return (
        <div className="dota-container">
            <div className="dota-container container">
                <div className="dota">
                    <div className="dota-card">
                        <img src={props.image1}></img>
                        <div className="dota-text"></div>
                        <h5>{props.title1}</h5>
                        <p className='dota-description'>{props.description1}</p>
                        {show && 
                        <a href={props.moreString}>More</a>
                        }
                    </div>
                    <div className="dota-card">
                        <img src={props.image2}></img>
                        <div className="dota-text"></div>
                        <h5>{props.title2}</h5>
                        <p className='dota-description'>{props.description2}</p>
                        {show && 
                        <a href={props.moreString2}>More</a>
                        }
                    </div>
                    <div className="dota-card">
                        <img src={props.image3}></img>
                        <div className="dota-text"></div>
                        <h5>{props.title3}</h5>
                        <p className='dota-description'>{props.description3}</p>
                        {show && 
                        <a href={props.moreString3}>More</a>
                        }
                    </div>
                </div>
            </div>
        </div>
  )

}

export default Dota