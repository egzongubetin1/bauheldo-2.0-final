

export default function Section3() {
  return(
       <>
      <div id="firstElement" className="block">
          <div className="block-container container">
              <div className="block-container_image">
                  <img src={require('../../assets/images/banner1.png')}></img>
              </div>
              <div className="block-container_text">
                <h2>Simply collect reviews</h2>
                <p>
                Make it easy for you and your customers with our evaluation options: online, by telephone or using the printed evaluation form. Authentic through craft-specific evaluation criteria and of course everything GDPR-compliant.
                </p>
                <a>More Information</a>
                <h4>Particularities</h4>
                <ul>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Online evaluation form</span> for digital collecting</li>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Printed evaluation form </span> to hand out</li>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Widget </span>for your <span className="span">website</span></li>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Evaluation cards</span> in different designs</li>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Individual questions </span> on your evaluation form</li>
               </ul>
            </div>
          </div>
      </div>
      <div className='arrow'>
                <img src={require('../../assets/images/arrow.png')}/>
            </div>
      <div id="secondElement" className="block">
          <div className="block-container container second">
              <div className="block-container_image">
                  <img src={require('../../assets/images/banner2.png')}></img>
              </div>
              <div className="block-container_text">
                <h2>Check reviews professionally</h2>
                <p>
                Better safe than sorry! Retain the sovereignty of opinion about your business on the Internet. All incoming reviews are checked according to strict criteria. Transparent, verified and ISO 20488 compliant (ISO standard for online customer reviews).
                </p>
                <a >More Information</a>
                <h4>Particularities</h4>
                <ul>
                <li><img src={require('../../assets/images/donezi.png')}/>Authenticity check for incoming reviews</li>
                <li><img src={require('../../assets/images/donezi.png')}/>Objection handling for fake reviews</li>
                </ul>
            </div>
          </div>
      </div>
      <div className='arrow'>
                <img src={require('../../assets/images/arrow.png')}/>
            </div>
      <div id="thirdElement" className="block">
          <div className="block-container container">
              <div className="block-container_image">
                  <img src={require('../../assets/images/banner3.png')}></img>
              </div>
              <div className="block-container_text">
                <h2>Share reviews in a targeted manner</h2>
                <p>
                Together with craftsmen, wirsindcraft.de has tested how ratings can be used most effectively. Our products, optimized for trades, can be easily integrated into your online and offline communication. Fast and effective, leaving you more time for your core business.
                </p>
                <a>More Information</a>
                <h4>Particularities</h4>
                <ul>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Sticker</span> for vehicles, construction plans and more</li>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Google stars  </span> for more visibility</li>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Widget </span> for your existing <span className="span">website</span></li>
                <li><img src={require('../../assets/images/done.png')}/><span className="span"> operational profile</span> </li>
                <li><img src={require('../../assets/images/done.png')}/>Integrations for specialist partner searches</li>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Seal of quality</span> for your showroom <span className="span">website</span></li>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Handyman website</span> </li>
                <li><img src={require('../../assets/images/done.png')}/><span className="span">Job advertisment</span> on Google for Jobs </li>
               </ul>
            </div>
          </div>
      </div>
      </>
  )
}