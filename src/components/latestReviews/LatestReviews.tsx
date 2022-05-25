import StarRating from '../StarRating/StarRating';

export default function LastestReview() {
    return (
        <>
        <div className="latest">
                <div className='lastReview container'>
                    <h2>Latest Reviews</h2>
                <div className='rateItems'>
                    <div className='rateItem image'>
                        <StarRating/>
                        <h3 className='titleItem'>
                        Viverra pulvinar malesuada
                        </h3>
                        <p>
                        “Great performance fair price”
                        </p>
                    </div>
                    <div className='rateItem image'>
                    <StarRating/>
                        <h3 className='titleItem'>
                        Quis sed viverra
                        </h3>
                        <p>
                        “Good work”
                        </p>
                    </div>
                    <div className='rateItem image'>
                    <StarRating/>
                        <h3 className='titleItem'>
                        Etiam sodales rhoncus
                        </h3>
                        <p>
                        “Great”
                        </p>
                    </div>
                    <div className='rateItem image'>
                    <StarRating/>
                        <h3 className='titleItem'>
                        Lectus vivamus molestie
                        </h3>
                        <p>
                        “Clean nice work”
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}