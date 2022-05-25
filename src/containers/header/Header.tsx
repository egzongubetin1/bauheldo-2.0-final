import { Button } from '../../components';
import { Link } from 'react-router-dom';

const Header = () => {

    const onClickHeader = () =>{
        return
    }

  return (
    <div className='header-container'>
        <div className='header-fix'>
            <div className='header-container container'>
                <div className='header-container_content-wrapper'>
                    <div className='header-container_content'>
                        <h1>Germany’s best recommendation platform for trades.</h1>
                        <p>Your customer reviews: fair, honest, appreciative</p>
                    <Link to="offers"><Button variant='btn-nav' size='medium' children="Start Now" onClick={onClickHeader}></Button></Link>
                    </div>
                </div>
                <img className="header-review_image" src={require('../../assets/review.png')}/>
            </div>

            <div className='header-container_image'>
                    <img className="header-image" src={require('../../assets/workers.png')}/>
            </div>
        </div>   
    </div>
  )
}

export default Header