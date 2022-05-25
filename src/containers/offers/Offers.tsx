import { Button, Package, Subscription, Dota } from '../../components';
import { Footer, Awards } from '../../components';

const Offers = () => {

    function onClickOffer() {
        return
    }

    function packageHandler() {
        return
    }

  return (
      <>
        <div className="offers-container_all">
        <div className='offers-background_img'></div>
            <div className="offers-container container">
                <div className='offers-container_content1'>
                    {/* <img className='offers-background_img' src={require('../../assets/register.png')}/> */}

                    <h1 className='offers-title'>Secure a competitive advantage now through customer testimonials</h1>
                    <div className='offers-container_content1_offers'>
                        <div className='offers-container_module'>
                            <div className='offers-container_firstOffer'>
                                <h2>BASE</h2>
                                <p>Free company profile with basic functions.</p>
                                <div className='offers-prices'><h1>0 €</h1><p>/ month</p></div>
                                <Button variant='btn' size='medium' children="Choose" onClick={onClickOffer}/>
                            </div>
                            <div className='offers-container_secondOffer'>
                                    <button className='offers-tip'>TIPP</button>
                                    <h2>PER</h2>
                                    <p>Show the quality of your work to the outside world and impress customers, trainees and specialists.</p>
                                    <div className='offers-prices'><h1>39 €</h1><p>/ month</p></div>
                                    <Button variant='btn-nav' size='medium' children="Choose" onClick={onClickOffer}/>
                            </div>
                            <div className='offers-container_thirdOffer'>
                                    <h2>PER PLUS</h2>
                                    <p>Everything from PRO as a service with personal contacts</p>
                                    <div className='offers-prices'><h1>99 €</h1><p>/ month</p></div>
                                    <Button variant='btn' size='medium' children="Choose" onClick={onClickOffer}/>
                            </div>
                        </div>
                       
                    </div>
                    <a className='offers-overview'>to overview</a>
                </div>
                <div className='offers-container_content2'>
                  <div className='offer-container_contents'>
                      <img className="offer-images" src={require('../../assets/offers1.png')}/>
                      <p>All packages with a fixed price. No hidden costs.</p>
                  </div>
                  <div className='offer-container_contents'>
                      <img className="offer-images" src={require('../../assets/offers2.png')}/>
                      <p>GDPR compliant. No privacy issues.</p>
                  </div>
                  <div className='offer-container_contents'>
                      <img className="offer-images" src={require('../../assets/offers3.png')}/>
                      <p>Strict evaluation criteria. Against fake reviews.</p>
                  </div>
                  <div className='offer-container_contents'>
                      <img className="offer-images" src={require('../../assets/offers4.png')}/>
                      <p>Contact person. We are here for you!</p>
                  </div>
                </div>
                <div className='offers-container_content3'>
                    <div className='offers-container_main'>
                    <ul className='offers-container_ul'>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg'/><span className="offers-span">Collect Reviews</span> Verified customers </li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg'/><span className="offers-span">Modern company profile </span>Stars in google search results </li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg' /><span className="offers-span">Digital sealf of quality</span> <span className="span">(widget)</span></li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg'/><span className="offers-span">Individual assetment </span> documments</li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg' /><span className="offers- span"></span> advestising material</li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg' /><span className="offers- span">Certificats  </span> advestising material</li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg' /><span className="offers- span">Certificats  </span> advestising material</li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg'/><span className="offers-span">Collect Reviews</span> Verified customers </li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg'/><span className="offers-span">Modern company profile </span>Stars in google search results </li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg' /><span className="offers-span">Digital sealf of quality</span> <span className="span">(widget)</span></li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg'/><span className="offers-span">Individual assetment </span> documments</li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg' /><span className="offers- span"></span> advestising material</li>
                        <li className='offers-container_li'><img src='../../../assets2/offers-arrow.svg' /><span className="offers- span">Certificats  </span> advestising material</li>
                     </ul>
                     <div className='offers-subscriptions'>
                     <Subscription 
                     title="BASE" 
                     price="0 €/" 
                     class="btn-subscriptions1" 
                     li1="../../../assets2/orange-tick.svg" 
                     class2="subscription-li"
                     />
                     <Subscription 
                     title="PER" 
                     price="39 €/" 
                     class="btn-subscriptions2" 
                     li1="../../../assets2/orange-tick.svg"
                     class2="subscription-li2"
                     />
                     <Subscription 
                     title="PER PLUS" 
                     price="99 € /" 
                     class="btn-subscriptions1" 
                     li1="../../../assets2/orange-tick.svg"
                     class2="subscription-li"
                     />
                     </div>
                    </div>
                </div>
                <div className='offers-container_content4'>
                    <div className='offers-container_content4'>
                        <h2 className='offers-container_content4-title'>Additional packages</h2>
                        <p className='offers-container_content4-paragraph'>In addition to your selected service package, you can book optional add-on packages.</p>
                        <div className='offers-package'>
                        <Package title="Job postings on Google for Jobs" 
                        types="btn-package"
                        buttonTitle="Learn More"
                        function={packageHandler}
                        src={require("../../assets/packet1.png")} 
                        paragraph='Use your wirsindcraft company profile and “Google for Jobs” for your personnel search'
                        price="0 euro /month"
                        state={true}
                        />
                        <Package title="Grooming service" 
                        types="btn-package"
                        buttonTitle="Learn More"
                        function={packageHandler}
                        src={require("../../assets/packet2.png")} 
                        paragraph='We support you in entering your existing content'
                        price="249 euro /month"
                        state={true}
                        />
                        <Package title="Handyman website" 
                        types="btn-package"
                        buttonTitle="Learn More"
                        function={packageHandler}
                        src={require("../../assets/packet3.png")} 
                        paragraph='Book your individual website. Always modern and synchronized with website.'
                        price="249+49 euro /month"
                        state={true}
                        />
                       
                        </div>
                        <div className='offers-package2'>
                        <Package title="Thermregio bathroom planner" 
                        types="btn-package"
                        buttonTitle="Learn More"
                        function={packageHandler}
                        src={require("../../assets/packet4.png")} 
                        paragraph='professional online tool for bathroom renovation with exact and fast price information - easy to configure - can be used immediately!'
                        price="49 euro /month"
                        state={true}
                        />
                        </div>
                    </div>
                </div>
                <div className='offers-container_content5'>
                    <div className='offers-content5'>
                        <div className='offers-content5_title'> 
                            <h2>You have further </h2>
                            <h2>questions</h2>
                            <Button variant='btn-offers_arrange' children="Arrange a telephone Appointment" onClick={packageHandler} />
                        </div>
                        <div className='offers-border'><div className='border'></div><span>or</span><div className='border'></div></div>
                        <a>07531 / 584 640</a>
                    </div>
                    <img className='offers-content5_img' src={require("../../assets/oldwoman.png")} />
                </div>
            </div>
        </div>
        {/* <Dota 
            title1='1'
            title2='1'
            title3='1'
            description1='1'
            description2='1'
            description3='1'
            state={true}
            image1="../../assets/packet1.png"
            image2=""
            image3=""
        /> */}
        <Awards/>
        <Footer />
      </>  
  )
}

export default Offers