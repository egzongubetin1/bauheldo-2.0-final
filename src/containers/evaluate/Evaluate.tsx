import { Breadcrumbs } from '../../components';
import { Footer, SearchLocation } from '../../components';

const Evaluate = () => {
  return (
      <>
      <div className='evaluate-container'>
            <div className='evaluate-container_content container'>
            <div className='evaluate-container_content-img'>
                <div className='evaluate-container_content1 container'>
                    <Breadcrumbs name="Evaluate" link="/evaluate"/>
                    <h1 className='evaluate-title'>Which craft<br /> business would you like to rate?</h1>
                      <SearchLocation 
                      title="Name and location" 
                      placeholder="Name and location of craft business" 
                      input="searchLocation-input"
                      />
                    <div className='evaluate-reasons'>
                        <p className='evaluate-border' />
                        <button className='evaluate-reasons_btn'>3 good reasons for your rating</button>
                        <p className='evaluate-border'/>
                        </div>
                        <div className='evaluate-review_rating'>
                          <img src={require('../../assets/fair.png')}/>
                          <div className='evaluate-review_text1'>
                              <h4>Fair</h4>
                              <p>Your rating supports your craftsman!</p>
                          </div>
                        </div>
                        <div className='evaluate-review_rating'>
                          <img src={require('../../assets/honestly.png')}/>
                          <div className='evaluate-review_text2'>
                              <h4>Honestly</h4>
                              <p>Your review helps other customers!</p>
                          </div>
                        </div>
                        <div className='evaluate-review_rating'>
                          <img src={require('../../assets/appreciative.png')}/>
                          <div className='evaluate-review_text'>
                              <h4>Appreciative</h4>
                              <p>Your rating is valuable for the skilled trades in Germany!</p>
                          </div>
                    </div>
                   
                </div>
                    <div className='evaluate-container_content2'>
                      <img className='evaluate-workers_image' src={require('../../assets/new-workers2.png')}/>
                    </div>
            </div> 
            </div>
            
      </div>
      <Footer />
      </>
    

    
  )
}

export default Evaluate