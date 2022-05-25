import { useEffect } from "react";

export default function SecondPartners() {

    useEffect(() =>{
        function scrollTrigger(selector :any){
            let els = document.querySelectorAll(selector)
            Array.from(els).forEach(el => {
              addObserver(el)
            })
          }
          function addObserver(el :any){
              let observer = new IntersectionObserver((entries, observer) => { 
                entries.forEach(entry => {
                if(entry.isIntersecting) {
                  entry.target.classList.add('active')
                  observer.unobserve(entry.target)
                }
              })
            })
            observer.observe(el)
          }
          scrollTrigger('.partners-row_container')

    },[])

    useEffect(() => {
        var leftItem = document.getElementById('row-top');
        var rightItem = document.getElementById('row-bottom');
        var element = document.getElementById("scrolling-div")

        // console.log('test', document.getElementById("scrolling-div")?.offsetTop)
        // console.log("---------", leftItem)
        // console.log(rightItem)

      var throttle = function(type : string, name :string,obj:any){
        var obj = obj || window;
        var running = false;
        var func = function(){
          if (running){ return; }
          running = true;
          requestAnimationFrame(function(){
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
          });
        };
        obj.addEventListener(type, func);
      };
      
      throttle("scroll", "optimizedScroll", window);
    var scroll = 0;
    var lastSroll = 0;
        window.addEventListener("optimizedScroll", function(){
            if(window.pageYOffset >= element!.offsetTop - window.innerHeight){
                // console.log(window.pageYOffset)
                leftItem!.style.transform = "translate(" + scroll + "px)";
                rightItem!.style.transform = "translate(-" + scroll  + "px)";
                if(lastSroll != 0 && lastSroll < window.pageYOffset){
                    scroll+=4;
                }else {
                    scroll-=4;
                }
                // console.log("Scroll");
                

            } else {
                leftItem!.style.transform = "translate(0px)";
                rightItem!.style.transform = "translate(0px)";
                scroll = 0;
            }
        
            lastSroll = window.pageYOffset;
        })
    }, [])

     
    return (
        <>
        <div className='partners'>
            <div className='topPartners container'>
                    <h2>The industry standard in German craftsmanship</h2>
                    <div className='informationCards'>
                        <div className='informationCard'>
                            <img src={require('../../assets/images/pat1.png')}/>
                            <h4>Thousands of artisans</h4>
                            <h5>from all trades rely on bauheldo</h5>
                        </div>
                        <div className='informationCard'>
                            <img src={require('../../assets/images/pat2.png')}/>
                            <h4>Partnerships</h4>
                            <h5>with leading industrial brands from the trade</h5>
                        </div>
                        <div className='informationCard'>
                            <img src={require('../../assets/images/pat3.png')}/>
                            <h4>Partnerships</h4>
                            <h5>with guilds, district craftsmen’s association, state and central associations</h5>
                        </div>
                        <div className='informationCard'>
                            <img src={require('../../assets/images/pat4.png')}/>
                            <h4>Made in Germany</h4>
                            <h5>for German handicrafts - funded by the state</h5>
                        </div>
                    </div>
                    <div className='partners-row_container' id='scrolling-div'>
                        <div id='row-top' className="partners-item"><img src={require('../../assets/images/logorow-top.png')}/><br></br></div>
                        <div id='row-bottom' className="partners-item"> <img src={require('../../assets/images/logorow-bottom.png')}/><br></br></div>
                   </div>
                    <a className="secondPartners-ourpartners">Our partners</a>
                     </div>
               </div>
             
               </>
    )
}

