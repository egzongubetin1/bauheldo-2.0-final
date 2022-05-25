import { Footer, Awards, Info, Dota, AdvantagesCard, DiscoverCard, Questions, DiscoverCard2 } from '../../components';
import { Link } from 'react-router-dom';
export default function CheckRatings() {
    return (
        <>
            <div className="checkRatings">
                <div className="checkRatings-start container">
                    <div className='evaluate-navigate'><img src='../../../assets2/home-icon.svg' alt="" /><img src='../../../assets2/next-home.svg' alt="" /><a href='/'>Digital referral marketing</a><img src='../../../assets2/next-home.svg' /><a>Check ratings</a></div>
                    <div className="checkRatings-left">
                        <h1>Check reviews</h1>
                        <div className='checkRatings-paragraph'>
                            <p>We take incoming reviews very seriously, after all, recommendation is the most important marketing tool in the trade. That’s why we have a strict screening process for incoming reviews. The substructure results from:</p>
                        </div>
                        <div className="checkRatings_list">
                            <ul>
                                <li><img src={require('../../assets/images/donezi.png')} alt="" />Legal requirements, such as the protection of personal rights or the General Data Protection Regulation (GDPR)</li>
                                <li><img src={require('../../assets/images/donezi.png')} alt="" /><span className="span">Printed evaluation form </span> to hand out</li>
                                <li><img src={require('../../assets/images/donezi.png')} alt="" /><span className="span">Widget </span>for your <span className="span">website</span></li>
                                <li><img src={require('../../assets/images/donezi.png')} alt="" /><span className="span">Evaluation cards</span> in different designs</li>
                                <li><img src={require('../../assets/images/donezi.png')} alt="" /><span className="span">Individual questions </span> on your evaluation form</li>
                            </ul>
                        </div>
                        <div className='checkRatings-paragraph_two'>
                            <p>Here, too, we act strictly according to our credo: fair, honest, appreciative. That’s why we want to make the test procedure below as transparent as possible.</p>
                        </div>
                    </div>
                    <div className='checkRatings-button'>
                        <button><Link className='link-sharereviews' to="/offers">Start Now</Link></button>
                    </div>
                    <div className="checkRatings-right">
                        <img src={require('../../assets/images/checkRatings-banner.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className='checkRatings-dota1'>
                <Dota
                    title1='Touchstones for evaluations'
                    title2='After the exam'
                    title3='Frequently Asked Question'
                    description1=''
                    description2=''
                    description3=''
                    image1={require('../../assets/images/rate.png')}
                    image2={require('../../assets/images/bllok.png')}
                    image3={require('../../assets/images/chat.png')}
                    state={true}
                    moreString="#secondElement"
                    moreString2='#thirdElement'
                    moreString3='#checkratings-questions'
                />
            </div>
            <DiscoverCard2
                title="Our testing process – consisting of 5 touchstones"
                paragraph="Incoming ratings are checked by us on a random basis and on an occasion basis before publication in order to prevent so-called “fake ratings”. The following touchstones come into play here."
                paragraph2=""
            />

<div id="secondElement" className="block-second">
                <div className="block-second_container container second">
                    <div className="block-container_image-second">
                        {/* <img src={require('../../assets/images/banner2.png')}></img> */}
                    </div>
                    <div className="block-container_text-second">
                        <h2>1. Conspicuousness check</h2>
                        <p>
                            <strong>Are there any anomalies to be found in relation to the assessment? </strong> The content of the respective rating does not play a role here, rather information and data (metadata) for the rating. Some examples are:
                        </p>
                        <div className='checkRatings_list-second'>
                            <ul>
                                <li>Providing a fake email address or a disposable email address.</li>
                                <li>User name used (e.g. rating in the name of the craft business itself or offensive formulations).</li>
                                <li>Evaluated establishment does not exist (after online research and/or contact with the relevant chamber).</li>
                                <li>Many reviews in a very short time for the same establishment.</li>
                            </ul>
                        </div>
                        <div className='checkblock-paragraph2'>
                            <p>his in our<span> General Terms of Use</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="thirdElement" className="block-second">
                <div className="block-second_container container">
                    <div className="block-container_image-second">
                        <img src={require('../../assets/images/contentcheck.png')}></img>
                    </div>
                    <div className="block-container_text-second">
                        <h2>2. Content check</h2>
                        <p>
                            The key question here is: does the content of the rating (stars and text) require further action? In <strong>addition to avoiding fake ratings</strong> , the content check is also about <strong> clearing up any misunderstandings, protecting personal rights </strong> and, in the case of very critical ratings , <strong> pointing out potential for improvement </strong> for the craft business.
                        </p>
                        <div className='checkRatings_list-second'>
                            <p>Some negative examples:</p>
                            <ul>
                                <li>No reference to a specific craft performance recognizable</li>
                                <li>Mention of individual employees (apart from the owner)</li>
                                <li>Very critical star rating without sufficient explanation in the text</li>
                                <li>Very positive text with highly critical star rating</li>
                                <li>Other violations of <span>our review guidelines</span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <DiscoverCard2
                title="Anonymous reviews"
                paragraph2=""
                paragraph="When submitting the rating, you will be asked whether the rating should be submitted anonymously. This means that the username only will not be displayed in the public display. Our review management has the option of contacting the author for each review. If the contact is no longer valid, the alert check fails."
            />
            <div id="secondElement" className="block">
                <div className="block-container container second">
                    <div className="block-container_image">
                        {/* <img src={require('../../assets/images/banner2.png')}></img> */}
                    </div>
                    <div className="block-container_text">
                        <h2>Pre-Verification</h2>
                        <p>
                            To increase the credibility of an evaluation, appropriate <strong>evidence of the service provided</strong> can be uploaded. If this is <strong>already done when submitting the review, this</strong> is a pre-verification. These proofs are treated in the same way as with regular verification (see below).
                        </p>
                    </div>
                </div>
            </div>
            <div id="thirdElement" className="block">
                <div className="block-container container second">
                    <div className="block-container_image">
                        <img src={require('../../assets/images/checkimage2.png')}></img>
                    </div>
                    <div className="block-container_text">
                        <h2>1. Conspicuousness check</h2>
                        <p>
                            <strong>If our review management can give the green light for a review, it will be published without further identification.</strong> At this point in time, a notification will be sent to the specified email address as well as to the rated craft business. This is guaranteed to happen at registered companies. This cannot be guaranteed in the case of non-registered companies, for example if they do not have an email address.
                        </p>
                        <p>The notifications only contain the information that is also publicly visible in the review. Email addresses will not be passed on.</p>
                    </div>
                </div>
            </div>
            <DiscoverCard2
                title="Spot checks"
                paragraph="Reviews are randomly selected for verification prior to publication. This is another security measure."
                paragraph2=""
            />
            <div id="secondElement" className="block">
                <div className="block-container container second">
                    <div className="block-container_image">
                        {/* <img src={require('../../assets/images/banner2.png')}></img> */}
                    </div>
                    <div className="block-container_text-second">
                        <h2>4. Rework</h2>
                        <p>
                            If there were questions or complaints in the exams and these can also be improved, a message will be sent to the email address provided. This includes the specific reason for the complaint, an opportunity for rectification and the request for verification (if no valid preliminary verification is available).
                        </p>
                    </div>
                </div>
            </div>
            <div id="thirdElement" className="block-second">
                <div className="block-second_container container ">
                    <div className="block-container_image-second">
                        <img src={require('../../assets/images/verificationimage.png')}></img>
                    </div>
                    <div className="block-container_text-second">
                        <h2>5. Verification</h2>
                        <p>
                            Ratings on wirsindcraft.de must relate to a specific craft service and there must have been a business relationship between the person making the rating and the craft business. As a rule, this can be proven by corresponding invoices or order confirmations. If there is still no valid (preliminary) verification, the request for this proof can either be initiated by our assessment management - after tests or by random sampling - or by a report from the assessed craft business.
                        </p>
                        <div className='verification-paragraph2'>
                            <p>Specifically, the evidence is provided by sending/uploading a scan, photo or PDF file with a request to black out the data protection relevant areas. The submitted documents are checked for plausibility. The three main criteria for a valid verification are:</p>
                        </div>
                        <div className="checkRatings_list-second">
                            <ul>
                                <li>Is it an invoice or an order confirmation?</li>
                                <li>Is the craft business clearly recognizable from it?</li>
                                <li>Do the listed works/services match the assessment?</li>
                            </ul>
                        </div>
                        <div className='checkblock-paragraph2'>
                            <p>If the answer to these three questions is yes, the verification is valid. When a verified rating is activated, it is marked as “verified”.</p>
                        </div>
                    </div>
                </div>
            </div>
            <DiscoverCard2
                title="Deadlines & Cycle"
                paragraph="There is currently a period of 14 days for improvements and verifications . If there is no (valid) feedback within this time, the rating will be permanently removed."
                paragraph2=" If a response is invalid (e.g. no verifiable documents or insufficient textual correction), the process is repeated again. If that also fails, the review will be permanently removed."
            />
            <div id='checkratings-questions' className='checkrating-questions'>
            <Questions
                question='How do I get a review?'
                answer='Each company on wirsindcraft.de can be rated by a registered user. A user account consisting of a username, email address and password is required to submit a review.'
            />
            <Questions
                question='Will I be notified when my business is rated?'
                answer='As a registered tradesman, you will receive an email to the email address you have on file with us as soon as a user has rated your company. Please make sure that your e-mail address is checked regularly and that our e-mails do not end up in the spam folder.'
            />
            <Questions
                question='Where can I see reviews made for my business?'
                answer='Log in with your access data at www.wirsindcraft.de/login. In your personal dashboard under the item “Reviews” you can see the overview page of your reviews. Clicking on a specific rating takes you to the detailed view. Here you have additional functions and interaction options, such as “Comment” or “Report rating”.'
            />
            <Questions
                question='Can a user rate a craftsman more than once?'
                answer='no To prevent rating manipulation, each user can only rate a specific craftsman once.'
            />
            <DiscoverCard2
                title="After the exam"
                paragraph="Increase the number of your reviews. With products that support you in collecting – analogue and digital."
                paragraph2=""
            />
            </div>
            <div style={{ position: "relative", top: "165px" }}>
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
                title="Discover our packages"
            />
            <div style={{ paddingTop: '100px', paddingBottom: "20px" }}>
                <Awards />
            </div>
            <Footer />
        </>
    )
}