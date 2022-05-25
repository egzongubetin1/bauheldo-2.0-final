import { Link } from 'react-router-dom';

export default function Info() {
    return (
        <>
        <div className="info-container">
            <div className='info container'>
                <div className='infoBanner'>
                    <h2> Discover your possibilities. </h2>
                    <Link to="offers">Start Now</Link>
                    {/* <img src={require( '../../assets/images/img6.jpeg')}/> */}
                </div>
                <div className='infoImage'>
                    <img src={require( '../../assets/images/img6.jpeg')}/>
                </div>
            </div>
        </div>
        </>
    )
}