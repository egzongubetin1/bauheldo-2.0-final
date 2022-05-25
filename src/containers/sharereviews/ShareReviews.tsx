import { Link } from 'react-router-dom';
import { Footer,Awards, Info, Dota, AdvantagesCard, DiscoverCard, Questions } from '../../components';

export default function ShareReviews(){
return(
<>
    <div className="shareriviews">
            <div className="sharereviews-start container">
            <div className='evaluate-navigate'><img src='../../../assets2/home-icon.svg'/><img src='../../../assets2/next-home.svg'/><a href='/'>Digital referral marketing</a><img src='../../../assets2/next-home.svg'/><a>share reviews</a></div>
                <div className="sharereviews-left">
                    <h1>Share reviews</h1>
                    <p>Together with craftsmen, wirsindcraft.de has tested how ratings can be used most effectively. Our products, optimized for trades, can be easily integrated into your online and offline communication. Fast and effective, leaving you more time for your core business.</p>
                    <button><Link className='link-sharereviews' to="/offers">Start Now</Link></button>
                </div>
                <div className="sharereviews-right">
                    <img src={require('../../assets/images/sharere.png')}></img>
                </div>
            </div>
    </div>
  
<Dota 
title1='Advantages'
title2='Products'
title3='Frequently Asked Question'
description1='Maximum visibility for your reviews'
description2='reviews share'
description3='What else you need to know.'
image1={require('../../assets/images/rate.png')}
image2={require('../../assets/images/bllok.png')}
image3={require('../../assets/images/chat.png')}
state={true}
moreString="#advantages"
moreString2="#products"
moreString3="#questions"
/>   

<div id='advantages' className="advantages">
    <div className="advantages-start container">
        <div className="advantages-title">
            <h1>Advantages</h1>
            <p>Increase trust in your craft business by sharing your customer reviews.</p>
        </div>  

        <div className="advantages-left">
            <h1>Why share reviews about wirsindcraft.de?</h1>
            <div className="text">
                <p>
                <span>Effective:</span> We have made it our task to make your customer reviews as visible as possible. 
                We have developed a large number of products for this purpose together with craftsmen. 
                <span>Simple:</span> Our products can be easily integrated into your online and offline communication. 
                <span>Future-proof:</span> We are constantly developing more products. 
                <span>Networked:</span> In contrast to all other evaluation platforms, wirsindcraft.de is well networked in the German trade sector.
                    Benefit from your customer ratings on guild pages, 
                specialist partner searches and specialist partners.
                </p>
            </div>
        </div>
            <div className="advantages-right">
                <img src={require('../../assets/images/advantages-new.png')}></img>
            </div>
    </div>
</div>

    <div id="products" className="products">
        <div className="products-start container">
            <div className="products-title">
                <h1>Products</h1>
                <p>Share reviews in a targeted manner. With products that support you in sharing, analogue and digital.</p>
            </div>
            <div className='share-reviews_advantage1'>
            <AdvantagesCard     
             title= 'Sticker'
             image ={require('../../assets/images/post1.png')}
             description = 'Stickers make your customer ratings visible on construction sites, doors in the entrance area, the POS, your vehicles… Analogue, wherever your customers are.'
             more= 'Test evaluation form'

            />
            <AdvantagesCard     
             title= 'Google Stars'
             image ={require('../../assets/share-advanced2.png')}
             description = 'With our Google integration, you can already benefit from your customer ratings on the Google search results page.'
             more= 'Learn more'

            />
            <AdvantagesCard     
             title= 'Widget for website'
             image ={require('../../assets/share-advanced3.png')}
             description = 'Your customer reviews on your own website. Our so-called widgets are available in many different versions.'
             more= 'Learn more'

            />
            </div>
            <div className='share-reviews_advantage2'>
            <AdvantagesCard     
             title= 'Operational profile'
             image ={require('../../assets/share-advanced4.png')}
             description = 'All content such as customer ratings, contact information … is brought together on your company profile. The heart of your online presence.'
             more= 'Learn more'

            />
            <AdvantagesCard     
             title= 'Specialist partner search'
             image ={require('../../assets/share-advanced5.png')}
             description = 'Present your customer ratings on guild pages, in district craft associations and in specialist partner searches on well-known platforms.'
             more= 'Learn more'

            />
            <AdvantagesCard     
             title= 'Customer Satisfaction Certificate'
             image ={require('../../assets/share-advanced6.png')}
             description = 'Our award for the highest quality craftsmanship. As an analogue certificate for your showroom and digital award on your company profile.'
             more= 'Learn more'

            />
            </div>
            <div className='share-reviews_advantage2'>
            <AdvantagesCard     
             title= 'Handyman website'
             image ={require('../../assets/share-advanced7.png')}
             description = 'Your modern, always up-to-date website. Easy maintenance thanks to automatic synchronization of your customer ratings and all other content.'
             more= 'Learn more'

            />
            <AdvantagesCard     
             title= 'Google for jobs'
             image ={require('../../assets/share-advanced8.png')}
             description = 'Share your vacancies on guild pages, your company profile and on Google for Jobs.'
             more= 'Learn more'

            />
            </div>
        </div>
    </div>



<div id='questions' className='questions'>
    
<div className='container questions-ari'> 
             <div className='questions-header'>
               <h1>Frequently Asked Questions</h1>
            </div>
            <div className='question-egzon2'>
            <Questions 
            question="Can I use the link to my company profile on business cards or similar?" 
            answer="Yes. Your personal page URL on wirsindcraft.de will not change automatically and can also be used for print media. You can adjust your page URL yourself in your profile management under the “Overview” tab."
            />
            <Questions 
            question="Can I publish my current vacancies and advertisements on my profile?" 
            answer="As a PRO and PROPlus customer, you can publish as many job offers and advertisements as you like. To do this, select the “Vacancies” tab in your profile management and complete your offer. At the end of the form you can choose whether your job offer should already be visible on your profile."
            />
            </div>
        </div>
 </div>

<div style={{position:"relative", top:"95px"}}>
    <Dota 
    title1='Collect reviews'
    title2='Check ratings'
    title3='Share reviews'
    description1='easy and fast'
    description2='fair, honest, appreciative'
    description3='anywhere customers can see them'
    state={true}
    image1={require('../../assets/images/img1.png')}
    image2={require('../../assets/images/img2.png')}
    image3={require('../../assets/images/img3.png')}
    moreString="/collectreviews"
    moreString2='/checkratings'
    moreString3='/sharereviews'
    />
 </div>    
 
    <DiscoverCard
    title= "Discover our packages"
    />
    <div style={{paddingTop:'100px', paddingBottom:"20px"}}><Awards /></div>
    <Footer/>
    </>    
)
}