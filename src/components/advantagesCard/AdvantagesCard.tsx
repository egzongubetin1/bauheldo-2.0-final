
interface Props {
    title: string,
    image: string,
    description: string,
    more: string,
   }

   const AdvantagesCard = (props : Props) => {

      return(
       <div className='advantages-cards'>
           <div className='advantages-cards_row'>
               <div className='advantages-card_container'>
                   <div className='advantages-card_header'>
                        <h3>{props.title}</h3>
                   </div>
                   <div className='advantages-card_body'>
                       <div className='advantages-card_image'>
                            {/* <img src={require('../../assets/images/block-product1.png')}></img> */}
                            <img src={props.image} />
                       </div>
                       <div className='advantages-card_description'>
                       <p>{props.description}</p>
                        </div>
                   </div>
              <div className='advantages-card_footer'>
                   <a>{props.more}</a>
                   <div className='advantages-card_footer-arrow'>
                   <i><img className="advantages-card_img122" src='../../../assets2/Group-122.svg'/></i>
                       </div>
                   </div>
              </div>
           </div>
       </div>
      )
       }
   export default AdvantagesCard;