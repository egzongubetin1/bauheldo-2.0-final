import { Button } from '../../components';
import { Link } from 'react-router-dom';

const Footer = () => {

    const onClickFooter = () =>{
        return
    }

  return (
    <div className="footer-container">
        <div className="footer-container container">
            <div className='footer-container_content'>
                <div className="footer-container_content1">
                    <Link to="/"><img className='footer-logo' src={require('../../assets/Bauheldo_White.png')}/></Link>
                    <div className="footer-buttons">
                        <Button variant='btn-footer' size='ft-size_big' children="Create craftsman profile" onClick={onClickFooter}></Button>
                        <Button variant='btn-footer' size='ft-size_small' children="Rate craftsman" onClick={onClickFooter}></Button>
                    </div>
                </div>
                <div className="footer-container_content2"> 
                        <p className='footer-follow'>Follow us on:</p>
                        <div className='footer-socials'>
                            <a href='https://www.instagram.com/'><img className='footer-socials1' src='../../../assets2/instagram-bauheldo.svg'/></a>
                            <a href='https://www.facebook.com/'><img className='footer-socials2' src='../../../assets2/facebook-bauheldo.svg'/></a>
                        </div>
                </div>
                <div className='footer-container_content3'>
                    <p className='footer-contact'>Contact bauheldo:</p>
                    <div className='footer-tel'>
                        <p>Whatsapp</p>
                        <p>+49 (0) 1579 – 235 3813</p>
                    </div>
                    <div className='footer-tel'>
                        <p>Email</p>
                        <p>info@bauheldo.de</p>
                    </div>
                    <div className='footer-tel'>
                        <p>Telefon</p>
                        <p>+49 (0) 7531 – 584 640</p>
                    </div>
                    <div className='footer-tel'>
                        <p>Fax</p>
                        <p>+49 (0) 7531 – 584 6499</p>
                    </div>
                </div>
                <div className='footer-container_content4'>
                    <div className='footer-digital'>
                        <p className='footer-digital_title'>Digital referral marketing</p>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Collect reviews</a>
                            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Check ratings</a>
                            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Share reviews</a>
                            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Packages & Prices</a>
                            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Scoring Policies</a>
                            <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>ISO standard</a>
                    </div>
                    <div className='footer-digital'>
                    <p className='footer-digital_title'>Products</p>
                    <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Widget</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Printed evaluation form</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Rating cards</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Outdoor stickers</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Customer statisfaction Certificate</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Google stars</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Google for jobs</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Operational profile</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Handyman website</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Individual questions</a>
                    </div>
                    <div className='footer-digital'>
                    <p className='footer-digital_title'>Resources</p>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Blog</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>FAQ's</a>
                        <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Study: Digitization barometer</a>
                    </div>
                    <div className='footer-digital'>
                    <p className='footer-digital_title'>Customer information</p>
                    <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Imprint</a>
                    <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Privacy</a>
                    <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Conditions</a>
                    <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Terms of Use</a>
                    <img className='footer-digital_img' src='../../../assets2/footer-arrow.svg'/><a className='f-a'>Contact</a>
                    </div>
                </div>
                <div className='footer-container_content5'>
                    <p>2022 Bauheldo GmbH</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer