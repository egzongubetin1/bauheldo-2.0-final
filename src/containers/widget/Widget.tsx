import { Link } from 'react-router-dom';
import { Awards, Breadcrumbs, Button, DiscoverCard, Dota, Footer, Package, Questions } from '../../components';

const Widget = () => {

    function widgetClick(){
        return
    }

  return (
    <>
    <div className="widget-container">
        <div className="widget-container_content container">
        <Breadcrumbs name="Products" link="/"/>
            <div className="widget-content1 container">
                
                <div className="widget-content1_left">
                    <div>
                    <h2>Widget</h2>
                  <div>
                      <button className='widget-btn_top1'>Per</button>
                      <button className='widget-btn_top2'>Per Plus</button>
                  </div>
                    </div>
                  
                  <p className='widget-bold_p'>With our digital seal of quality in the starry sky</p>
                  <p>In order to show your well-deserved <span className='widget-bold_span'>stars on your own website</span>, you have the option of installing a so-called “widget” in different variants and formats.
                       The widget is a plugin (module) and acts as a<span className='widget-bold_span'> digital seal of quality, with which you can display your good reputation</span> not only on the start page of your website at first glance ,
                       but also on each of your subpages. Welcome to the starry sky!</p>
                       <div className='widget-btns'>
                       <Link to="/offers"><Button variant='btn-widget1' children="Start now" onClick={widgetClick} /></Link>
                       <Button variant="btn-widget2" children="Arrange an appointment for consultation" onClick={widgetClick}/>
                       </div>
                </div>
                <div className="widget-content1_right">
                    <img src={require('../../assets/Group-142.png')}/>
                </div>


            </div>

            <div className="widget-content2">
              <Dota
               title1='Multifunction plugin'
               title2='Always up to date'
               title3='Privacy compliant'
               description1='Many possibilities with one plugin: Prominent display of your good reputation, faster incentive for end customers to write a review & more '
               description2='The widget records your collected ratings in real time and is therefore always up to date'
               description3='We will provide you with the supplement to your privacy policy'
               state={false}
               image1={require('../../assets/widget-1-1.png')}
               image2={require('../../assets/widget-1-2.png')}
               image3={require('../../assets/widget-1-3.png')}
               moreString=""
               moreString2=''
               moreString3=''
              />
            </div>

            
        </div>
    </div>
    <div className='widget-test'>
      <div className='container'>
        <div className=' widget-margin'>
            <div className='widget-content3'>
              <div className='widget-content3_left'>
                <img src={require("../../assets/widget-2-1.png")}/>
              </div>
              <div className='widget-content3_right'>
                <h2>Website — Widget — Profile</h2>
                <p className='widget-content3_p'>The widget is ideal for creating a <span className='widget-bold_span'>connection between your website and your profile</span> . With one click, your customer is either forwarded immediately to your profile or directly to the evaluation form. It can be created in<span className='widget-bold_span'> different types, formats and sizes .</span></p>
                <p className='widget-content3_p'>With the help of our<span className='widget-bold_span'> widget generator </span> in your wirsindcraft.de dashboard, you can build the widget that meets your needs and best suits your site in no time at all. This can be edited again at any time.</p>
                <p className='widget-content3_p'>In order to embed the widget <span className='widget-bold_span'> on your site, you will receive a code from us that you </span> must insert into the source code of your website. If you need help, we are there for you and will be happy to help you or advise you on the selection.</p>
              </div>
            </div> 

            <div className='widget-content4'>
              <div className='widget-content4_left'>
              <h2>Company widget & Performance widget</h2>
                <p className='widget-content4_p'>We recommend that you include the widget <span className='widget-bold_span'> on at least one other subpage </span> in addition to the start page . In addition to the company widget, which takes into account all the reviews you have ever collected, our performance widget was specially designed for this purpose. This widget only considers the rating of a specific performance category.</p>
                <p className='widget-content4_p'>The <span className='widget-bold_span'>rating stars are displayed in the search results</span> - also on the subpages. This means: If you are only being searched for a specific service and the corresponding sub-page appears in the search results, your stars for the respective service are also visible there.<span className='widget-bold_span'> So the widget makes your page more relevant to Google.</span></p>
                <p className='widget-content4_p'>Thus, the widget not only serves to show your good reputation and encourages your customers to rate you, it also serves to<span className='widget-bold_span'> improve visibility in Google search results.</span></p>
                
              </div>
              <div className='widget-content4_right'>
              <img src={require("../../assets/widget-2-2.png")}/>
              </div>
            </div> 

            <div className='widget-content5'>
              <div className='widget-content5_left'>
                <img src={require("../../assets/widget-2-3.png")}/>
              </div>
              <div className='widget-content5_right'>
                <h2>Our widget generator</h2>
                <p className='widget-content5_p'>You can create a <span className='widget-bold_span'>variety of different widgets .</span> Our widget generator will guide you through the widget creation process. First select one of four possible widgets, depending on whether you would prefer to display the <span className='widget-bold_span'>recommendation percentage or the overall rating .</span></p>
                <p className='widget-content5_p'>You can also decide <span className='widget-bold_span'>how many elements</span> your widget should contain, <span className='widget-bold_span'>how many ratings </span>should be displayed and whether only the <span className='widget-bold_span'>rating</span> number or the rating text should be displayed.<span className='widget-bold_span'> There is a live preview </span>in the generator, so you can try all variants before you decide.</p>
              </div>
            </div> 
      </div>

      <div className='widget-questions'>
        <h2>Frequently Asked Questions</h2>
        <Questions 
        question='Does the widget cost me anything?' 
        answer='No, the widget costs you nothing. However, it is only included in the PRO or PRO PLUS package. Even if you want to create multiple widgets, there are no additional costs.'
        />
        <Questions 
        question='Can I customize the design of the widget, e.g. to the design of my company?'
        answer='No, unfortunately that is not possible. A large number of widgets with different appearances are available for this purpose. We recommend our evaluation cards for individual advertising material.'
        />
        <Questions 
        question='I don’t trust myself to install the widget myself. Can you help me?'
        answer='Of course we are happy to take care of the installation of the widget on your website. Alternatively, you can also connect us directly with the administrator of your site, and we will then clarify everything else with him/her.'
        />
      </div>
      <div className='widget-discover container'>
     
      </div>
      </div>

      
    </div>
    <DiscoverCard title="Discover our packages"/>
    <div className='widget-interested'>
      <div className='widget-interested_content container'>
        <h2>You might also be interested in</h2>
        <div className='widget-packages'>
          <Package title="Craftsman website" src={require("../../assets/widget-3-1.png")} paragraph='' price="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla lorem, rhoncus non tempor sit amet, pellentesque non dolor. Aenean vestibulum gravida libero, at sodales sem imperdiet sed. Etiam pretium elementum metus, " 
          buttonTitle='Learn more' function={widgetClick} types="btn-package" state={false}/>
          <Package title="Google Stars" src={require("../../assets/widget-3-2.png")} paragraph='' price="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla lorem, rhoncus non tempor sit amet, pellentesque non dolor. Aenean vestibulum gravida libero, at sodales sem imperdiet sed. Etiam pretium elementum metus, " 
          buttonTitle='Learn more' function={widgetClick} types="btn-package" state={false}/>
          <Package title="Google for jobs" src={require("../../assets/widget-3-3.png")} paragraph='' price="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla lorem, rhoncus non tempor sit amet, pellentesque non dolor. Aenean vestibulum gravida libero, at sodales sem imperdiet sed. Etiam pretium elementum metus, " 
          buttonTitle='Learn more' function={widgetClick} types="btn-package" state={false}/>
        </div>
      </div>
    </div>
    <Awards />
    <Footer />
    </>
  )
}

export default Widget