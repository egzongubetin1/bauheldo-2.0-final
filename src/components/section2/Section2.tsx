


export default function Section2() {
    return (
      <>
      <div className="section2-container">
      <div className="informationBlock container">
          <h2>3 steps to your good reputation</h2>
          <h3>The unique wirsindcraft.de evaluation management</h3>
          <div className="informationCards">
              <div className="informationCard">
                  <img src={require('../../assets/images/img1.png')}/>
                  <div className="informationCard-text">
                  <h4>Collect reviews</h4>
                  <h5>easy and fast</h5>
                  <a href="#firstElement">more</a>
                  </div>
              </div>
              <div className="informationCard">
                  <img src={require('../../assets/images/img2.png')}/>
                  <h4>Check ratings</h4>
                  <h5>fair, honest, appreciative</h5>
                  <a href="#secondElement">more</a>
              </div>
              <div className="informationCard">
                  <img src={require('../../assets/images/img3.png')}/>
                  <h4>Share reviews</h4>
                  <h5>anywhere customers can see them</h5>
                  <a href="#thirdElement">more</a>
              </div>
          </div>
      </div>
      </div>
  </>
  )
  }