import { Footer, Questions,Button } from '../../components';

const Scoring = () => {

    function scoringHandler(){
        return
    }

    function scrollTop(){
        window.scrollTo(0, 0);
    }

  return (
    <>
    <div className='scoring-maincontainer'>
        <div className='scoring-maincontainer_content'>
            <div className='container'>
                <div className='scoring-infobox'>
                    <h2>Rate your handyman</h2>
                    <span>Share your experience with artisans online</span>
                    <p>Perhaps you have already gained experience with craftsmen yourself. On wirsindcraft.de you can share your experience and rate craft businesses. In return, you benefit from the ratings of other users.</p>
                    <p>In order to ensure the high quality of our reviews, the following rules apply to writing a good review.</p>
                </div>
            </div>
        </div>
    </div>
    <div className='scoring-container2'>
        <div className='scoring-content2 container'>
            <div className='scoring-content2_left'>
                <span>How to write</span>
                <h2>a good review</h2>
                <div className='scoring-checkmark_text'><img src="../../../assets2/scoring-checkmark.svg"/><p>Formulate your personal opinion and describe your own experiences with the respective craftsman</p></div>
                <div className='scoring-checkmark_text'><img src="../../../assets2/scoring-checkmark.svg"/><p>Evaluate differentiated according to the various evaluation criteria</p></div>
                <div className='scoring-checkmark_text'><img src="../../../assets2/scoring-checkmark.svg"/><p>Give constructive feedback that gives the craftsman the chance to improve himself and his crafting performance</p></div>
                <div className='scoring-checkmark_text'><img src="../../../assets2/scoring-checkmark.svg"/><p>Please always remain factual, fair and honest, even with critical reviews</p></div>
            </div>
            <div className='scoring-content2_right'>
                    <span>What does</span>
                    <h2>not belong in a review</h2>
                    <div className='scoring-checkmark_text'><img src="../../../assets2/scoring-checkmark.svg"/><p>Avoid exaggerations and refrain from insults</p></div>
                    <div className='scoring-checkmark_text'><img src="../../../assets2/scoring-checkmark.svg"/><p>Do not include any third-party information (name, phone number, financial information) in your review that can be used to identify or identify an individual</p></div>
                    <div className='scoring-checkmark_text'><img src="../../../assets2/scoring-checkmark.svg"/><p>Refrain from self-promotion, inappropriateness and offensive, discriminatory or illegal allusions.</p></div>
            </div>
        </div>

       
    </div>
    <div className='scoring-container3'>
            <div className='scoring-content3 container'>
                <div className='scoring-content3_left'>
                    <span>How can you</span>
                    <h2>make your review stand out?</h2>
                    <p>Verify your rating for even more visibility and credibility.
                         Your rating will be particularly highlighted. In order to verify your rating, you have the option of providing evidence (e.g. an invoice that has been made illegible in places relevant to data protection)
                         for the craftsman service actually provided by the rated craft business.</p>
                </div>
                <div className='scoring-content3_right'>
                    <img src={require("../../assets/scoring-content1.png")}/>
                </div>
            </div>
    </div>

    <div className='scoring-container4'>
            <div className='scoring-content4 container'>
                <div className='scoring-content4_left'>
                    <img src={require("../../assets/scoring-content2.png")}/>
                </div>
                <div className='scoring-content4_right'>
                    <span>When is a review</span>
                    <h2>not published by us…</h2>
                    <p>Ratings are checked by our rating team based on these rating criteria and according to our credo “fair, honest, appreciative”. We can only publish reviews if they comply with our review policy and there are no review exclusions. You can find out more about this in our General <br/>Terms of Use.</p>
                    <p>We will not publish a review with offensive, inappropriate, privacy-violating or demonstrably false content</p>
                </div>
            </div>
    </div>

    <div className='scoring-container5'>
        <div className='scoring-content5 container'>
            <h2>Tips for writing a good review</h2>
            <div className='scoring-questions'>
            <Questions 
            question='State your subjective opinion and avoid statements of fact.' 
            answer='Example: The work was faulty and not professional. Better: In my opinion, the following work was not carried out professionally.'/>
            <Questions 
            question='Avoid overdoing it.' 
            answer='Example: It is about the worst craftsman in the whole city.'/>
            <Questions 
            question='Avoid personal attacks.' 
            answer='Example: The craftsman was slow-witted and of inferior intelligence.'/>
            <Questions 
            question='Avoid names and personal descriptions.' 
            answer='Example: Mr. Meyer …, The red-haired craftsman with glasses …,'/>
            </div>
        </div>
    </div>

    <div className='scoring-container6'>
            <div className='scoring-content6 container'>
                <div className='scoring-content6_left'>
                    <img src={require("../../assets/scoring-content3.png")}/>
                </div>
                <div className='scoring-content6_right'>
                    <h2>Legal requirements for craftsman ratings</h2>
                    <p>As a neutral craft and rating platform, Wirsindcraft has committed itself to giving craftsmen the opportunity to have their ratings verified.</p>
                    <p>In the case of a critical evaluation in particular, it can happen that a craftsman reports the evaluation and asks for verification. In this case, the evaluator will receive an e-mail from us and will be asked to provide proof of the described craftsman’s service. If the reviewer cannot provide this proof, the review will be removed.</p>
                </div>
            </div>
    </div>

    <div className='scoring-container7'>
        <div className='scoring-content7'>
            <h2>Rate now</h2>
            <div className='scoring-content7_p'>
            <p>Share your expiriences with other craftsman portal and</p>
            <p>ensure transparacy in the local craftsmen market.</p>
            </div>
            <Button variant="btn-scoring_rate" onClick={scoringHandler} children="Rate craftsmen now"/>
        </div>
    </div>

    <div className='scoring-container8'>
        <div className='scoring-content8 container'>
            <div className='scoring-scroll' onClick={scrollTop}><img src='../../../assets2/scoring-arrow-up.svg'/></div>
            <Button variant='btn-scoring_contact' onClick={scoringHandler} children="Contact"/>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Scoring