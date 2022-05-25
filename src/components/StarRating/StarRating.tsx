import React,{ useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function StarRating() {
    // const [rating,setRating] = useState(null);
    // const [hover,setHover] = useState(null);
    // const sendRatingValue = (ratingValue)=>{
    //     setRating(ratingValue)
    //     props.onStarRatingValue(ratingValue)
    // }
    return (
        <div>
            {[...Array(5)].map((star,idx)=>{
                const  ratingValue = idx + 1;
                return (
                    <label className='starRadio' key={idx}>
                        {/*<input*/}
                        {/*    type="radio"*/}
                        {/*    name="rating"*/}
                        {/*    value={ratingValue}*/}
                        {/*    // onClick={()=>setRating(ratingValue)}*/}
                        {/*    onClick={()=>sendRatingValue(ratingValue)}*/}
                        {/*/>*/}
                            <FontAwesomeIcon
                                icon={faStar}
                                // color={ratingValue <= (hover || rating) ? "#EF3636" : "#626262"}
                                color='#E42213'
                                className='star'
                                // onMouseEnter={()=>setHover(ratingValue)}
                                // onMouseLeave={()=>setHover(null)}
                            />
                    </label>
                )
            })}
            <span className='ratingStar'>5,0 von 5</span>
        </div>
    )
}