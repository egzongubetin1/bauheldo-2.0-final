import { Link } from 'react-router-dom';

interface Props {
    function :  any,
}

const Menu = (props :Props) => {
  return (
      <>
      <div className="" style={{backgroundColor: "#F8F8F9", width: "100%"}}>
      <div onClick={props.function} className="menu-container">
          
    <div   className='menu-container container'>
        <div   className="menu-content">
        <div   className='menu-digital'>
            <p className='menu-digital_title'>Digital referral marketing</p>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><Link to="/collectreviews" className='m-a'>Collect reviews</Link>
                <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><Link to="/checkratings" className='m-a'>Check ratings</Link>
                <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><Link  to="/sharereviews" className='m-a'>Share reviews</Link>
                <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><Link to="/offers" className='m-a'>Packages & Prices</Link>
                <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><Link to="/scoring" className='m-a'>Scoring Policies</Link>
                <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><Link to="/iso" className='m-a'>ISO standard</Link>
        </div>
        <div  className='menu-digital'>
        <p className='menu-digital_title'>Products</p>
        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><Link to="/widget" className='m-a'>Widget</Link>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Printed evaluation form</a>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Rating cards</a>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Outdoor stickers</a>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Customer statisfaction Certificate</a>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Google stars</a>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Google for jobs</a>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Operational profile</a>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Handyman website</a>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Individual questions</a>
        </div>
        <div  className='menu-digital'>
        <p className='menu-digital_title'>Resources</p>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Blog</a>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>FAQ's</a>
            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Study: Digitization barometer</a>
        </div>
        <div  className='menu-digital'>
        <p className='menu-digital_title'>Customer information</p>
        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Imprint</a>
        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Privacy</a>
        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Conditions</a>
        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Terms of Use</a>
        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='m-a'>Contact</a>
        </div>
    </div> 
    </div>
    </div>
    <div onClick={props.function}  className="menu-container_buttons-all">
    <div className="menu-container_buttons">
    <button className="menu-btn">Create craftsman profile</button>
    <button className="menu-btn2">Rate Craftsmen</button>
    </div>
    </div>
    </div>

    </>
  )
}

export default Menu