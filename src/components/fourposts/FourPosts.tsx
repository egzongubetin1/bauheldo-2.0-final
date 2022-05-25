export default function FourPosts() {
    return (
       <>
       <div className="fourposts-maincontainer">
       <div className="fourposts-container container">
            <div className='fourPost-Text'>
                <h2>News</h2>
                <a href="#">More</a>
            </div>
           <div className='posts'>
               <div className='post'>
                    <div className='imgBackground'>
                        <a href="#"><img src={require('../../assets/images/fp1.png')}/></a>
                    </div>
                    <h4>Kooperation mit dem Digital A-team
                    </h4>
                </div>
               <div className='post'>
                   <div className='imgBackground'>
                   <a href="#">  <img src={require('../../assets/images/fp2.png')}/></a>
                   </div>
                   <h4>Bewetungen auf Google, Facebook & Co. - Was spricht d...
                   </h4>
               </div>
               <div className='post'>
                   <div className='imgBackground'>
                   <a href="#"> <img src={require('../../assets/images/fp3.png')}/></a>
                   </div>
                   <h4>9 Tipps fur ein erfolgreiches Betriebsprofil auf wirsindha...
                   </h4>
               </div>
               <div className='post'>
                   <div className='imgBackground'>
                   <a href="#">   <img src={require('../../assets/images/fp4.png')}/></a>
                   </div>
                   <h4>Trinkwasser- Weihanchtsbaum basteln - Immobilienboom
                   </h4>
               </div>
           </div>
               <div className='fourPost-Text'>
              <h2>Top Profile</h2>
              <a href="#">More</a>
          </div>
         <div className='posts'>
             <div className='post'>
                  <div className='imgBackground'>
                  <a href="#">  <img src={require('../../assets/images/tp1.png')}/> </a>
                  </div>
                  <br></br><img src={require('../../assets/images/ylli.PNG')}></img>
                  <h4>Viverra pulvinar malesuada
                  </h4>
                  <br></br><p>78345 Moos (Lake Constance) Masonry, conrete, stone & screed</p>
              </div>
             <div className='post'>
                 <div className='imgBackground'>
                 <a href="#">  <img src={require('../../assets/images/tp2.png')}/></a>
                 </div>
               <br></br>  <img src={require('../../assets/images/ylli.PNG')}></img>
                 <h4>Viverra pulvinar malesuada
                 </h4>
               <br></br>  <p>78345 Moos (Lake Constance) Masonry, conrete, stone & screed</p>
             </div>
             <div className='post'>
                 <div className='imgBackground'>
                 <a href="#"> <img src={require('../../assets/images/tp3.png')}/> </a>
                 </div>
                 <br></br> <img src={require('../../assets/images/ylli.PNG')}></img>
                 <h4>Viverra pulvinar malesuada
                 </h4>
               <br></br>  <p>78345 Moos (Lake Constance) Masonry, conrete, stone & screed</p>
             </div>
             <div className='post'>
                 <div className='imgBackground'>
                 <a href="#"> <img src={require('../../assets/images/tp4.png')}/></a>
                 </div>
                 <br></br><img src={require('../../assets/images/ylli.PNG')}></img>
                 <h4>Viverra pulvinar malesuada </h4>
                 <br></br><p>78345 Moos (Lake Constance) Masonry, conrete, stone & screed</p>
             </div>
         </div>
         </div>
         </div>
       </>
    )
}