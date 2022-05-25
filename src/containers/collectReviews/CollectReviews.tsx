import { Footer,Awards, Info, Dota, AdvantagesCard, DiscoverCard, Questions } from '../../components';

// let dota1: {
//     title1:'Advantages',
//     title2:'Products',
//     title3:'Frequently Asked Question',
//     description1:'Simple, DSVGO compliant and future-proof collect',
//     description2:'Digital and analogue reviews collect',
//     description3:'What else you need to know.',
//     image1:'../../assets/images/rate.png',
//     image2:'../../assets/images/bllok.png',
//     image3:'../../assets/images/chat.png',
//     state: true,
// }

export default function CollectReviews(){
return(
    <>
<div className="shareriviews">
    <div className="sharereviews-start container">
       <div className='evaluate-navigate2'><img src='../../../assets2/home-icon.svg'/><img src='../../../assets2/next-home.svg'/><a href='/'> Collect reviews</a></div>
            <div className="sharereviews-left">
                <h1>Collect reviews</h1>
                <p>Customers want to share their experiences. And you benefit if your good reputation is shown online. So make it easy for your customers to rate you! Online, by phone or via a printed evaluation form. Authentic through craft-specific evaluation criteria and of course everything GDPR-compliant.</p>
            </div>
            <div className="sharereviews-right">
                 <img src={require('../../assets/Image-21.png')} /> 
            </div>
       </div>
</div>
  
<Dota 
title1='Advantages'
title2='Products'
title3='Frequently Asked Question'
description1='Simple, DSVGO compliant and future-proof collect'
description2='Digital and analogue reviews collect'
description3='What else you need to know.'
image1={require('../../assets/images/rate.png')}
image2={require('../../assets/images/bllok.png')}
image3={require('../../assets/images/chat.png')}
state={true}
moreString="#advantages"
moreString2='#products'
moreString3='#questions'
/>   

<div id="advantages" className="advantages">
    <div className="advantages-start container">
        <div className="advantages-title">
            <h1>Advantages</h1>
            <p>wirsindcraft.de supports you in collecting reviews, analogue and digital, DSVGO compliant and future-proof.</p>
        </div>      
   
        <div className="advantages-left">
            <h1>Why collect reviews at wirsindcraft.de?</h1>
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
            <img src={require('../../assets/Image-25.png')} />
        </div>
    </div>
</div>
    <div id="products" className="products">
        <div className="products-start container">
            <div className="products-title">
                <h1>Products</h1>
                <p>Increase the number of your reviews. With products that support you in collecting, analogue and digital..</p>
            </div>
            <div className='share-reviews_advantage1'>
            <AdvantagesCard     
             title= 'Review link'
             image ={require('../../assets/advanced1.png')}
             description = 'Share the link to your rating form with a rating request in e-mails, a messenger service (e.g. Whatsapp) or in a news article on your website.'
             more= 'Test evaluation form'

            />
            <AdvantagesCard     
             title= 'Widget for website'
             image ={require('../../assets/advanced2.png')}
             description = 'Use your own website to collect more reviews.'
             more= 'Learn more'

            />
            <AdvantagesCard     
             title= 'Printed evaluation form'
             image ={require('../../assets/advanced3.png')}
             description = 'Particularly suitable for customers who are not digitally savvy or for people who like to “have something in their hands”. Print out the evaluation form and give it to your customers.'
             more= 'Learn more'

            />
            </div>
            <div className='share-reviews_advantage2'>
            <AdvantagesCard     
             title= 'Ratings card'
             image ={require('../../assets/advanced1.png')}
             description = 'Simply hand it over personally at the end of the project or e.g. B. enclose and send with the invoice. Use one of our templates.'
             more= 'Test evaluation form'

            />
            <AdvantagesCard     
             title= 'Individual questions'
             image ={require('../../assets/advanced2.png')}
             description = 'Complete your evaluation form with up to 3 additional questions. Find out what excites your customers.'
             more= 'Learn more'

            />
            </div>

        </div>
    </div>

<div id="questions" className='questions'>    
    <div className='container'> 
                <div className='questions-header'>
                <h1>Frequently Asked Questions</h1>
                </div>
                <div className='question-egzon'>
                <Questions 
                question="How do I get a review?" 
                answer="Each company on wirsindcraft.de can be rated by a registered user. A user account consisting of a username, email address and password is required to submit a review."
                />
                <Questions  
                question="Will I be notified when my business is rated?" 
                answer="As a registered tradesman, you will receive an email to the email address you have on file with us as soon as a user has rated your company. Please make sure that your e-mail address is checked regularly and that our e-mails do not end up in the spam folder."
                />
                <Questions 
                question="Where can I see reviews made for my business?" 
                answer="Log in with your access data at www.wirsindcraft.de/login. In your personal dashboard under the item “Reviews” you can see the overview page of your reviews. Clicking on a specific rating takes you to the detailed view. Here you have additional functions and interaction options, such as “Comment” or “Report rating”."
                />
                <Questions 
                question="Can a user rate a craftsman more than once?" 
                answer="No. To prevent rating manipulation, each user can only rate a specific craftsman once."
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
      moreString2="/checkratings"
      moreString3="/sharereviews"
 />
 </div>    
    <DiscoverCard
    title= "Discover our packages"
    />

    <div style={{paddingTop:'100px', paddingBottom:"20px"}}>
        <Awards />
    </div>
    <Footer/>
</>    
)
}