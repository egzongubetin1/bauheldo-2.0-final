import { Footer, IsoNews } from '../../components';
import Slider from "react-slick";

const news = [
  {
    image : require("../../assets/news-1.png"),
    date : "11/11/2022",
    description : "Vivamus ornare maximus"
  },
  {
    image : require("../../assets/news-2.png"),
    date : "11/11/2022",
    description : "Lectus morbi ultricies"
  },
  {
    image : require("../../assets/news-3.png"),
    date : "11/11/2022",
    description : "Porttitor fermentum"
  },
  {
    image : require("../../assets/news-2.png"),
    date : "11/11/2022",
    description : "Convallis vehicula nullam"
  },
  {
    image : require("../../assets/news-3.png"),
    date : "11/11/2022",
    description : "Convallis vehicula nullam"
  },
  {
    image : require("../../assets/news-1.png"),
    date : "11/11/2022",
    description : "Convallis vehicula nullam"
  },
  {
    image : require("../../assets/news-1.png"),
    date : "11/11/2022",
    description : "Convallis vehicula nullam"
  },
  {
    image : require("../../assets/news-1.png"),
    date : "11/11/2022",
    description : "Convallis vehicula nullam"
  }

];

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};


const Iso = () => {
  return (
    <>
    <div className="iso-container">
        <div className="iso-container_content container2">
            <div className="iso-breadcrumb"><img src="../../../assets2/Iso-arrow.svg" /><p>Go to the blog home page</p></div>
            <div className="iso-container_content1">
                <h1>The ISO 20488 standard – the most important things in brief</h1>
                <div className="iso-box"> <span>News</span> <p>April/24/2022</p></div>
                <p>Since online reviews of companies today have a decisive influence on customer opinion and thus on whether a company can win new customers,
                     the ISO 20488 standard was created to regulate the handling of customer reviews by rating portals. 
                     Online review portals provide customers with a platform to express their opinions about a company’s products and services. Due to the high influence of these customer opinions on the reputation and performance of a company,
                      the ISO 20488 standard provides measures for how portals should ensure that customer reviews are real and genuine and therefore actually valuable for other potential customers.
                     This includes, among other things, excluding false reviews, be they positive or negative.</p>
                <h2>The ISO standard follows 7 basic principles:</h2>
                <div className="iso-principles">
                  <div className="iso-principles_rules"><span className="iso-numbers">1</span><p>Integrity: the opinions presented are those of the users, not those of the review site itself</p></div>
                  <div className="iso-principles_rules"><span className="iso-numbers">2</span><p>Appropriateness: The way customer ratings are recorded, moderated and published ensures that they are reasonable, up-to-date and not misleading</p></div>
                  <div className="iso-principles_rules"><span className="iso-numbers">3</span><p>Protection of privacy: Protection of the personal information of the reviewer</p></div>
                  <div className="iso-principles_rules"><span className="iso-numbers">4</span><p>Security: Use of systems that protect against internal and external fraud and misuse of personal data</p></div>
                  <div className="iso-principles_rules"><span className="iso-numbers">5</span><p>Transparency: The handling of customer ratings, personal or company-related information, guidelines, decisions and methods by the rating portal must be visible to the users of the portal</p></div>
                  <div className="iso-principles_rules"><span className="iso-numbers">6</span><p>Accessibility: This refers to the ease of finding information on the review page itself, which should be presented in a clear and legible manner</p></div>
                  <div className="iso-principles_rules"><span className="iso-numbers">7</span><p>Responsiveness: The review site responds to requests from consumers, suppliers, or other stakeholders without undue delay</p></div>
                </div>

                <h2>Implementation</h2>
                <p className='gray'>ISO 20488 stipulates that the principles described above come into play in the general terms of use of the review portal and thus regulate how the portal deals with reviews from its users.
                   In particular, the general terms of use should describe the consequences of non-compliance with these terms of use 
                ,such as the extent to which non-compliance with the provisions contained therein can lead to the deletion of the respective rating.</p>

                <h2>Reviews Guidelines</h2>
                <p className='gray'>To comply with the ISO 20488 standard, the review portal must ensure that reviews meet the following criteria:</p>
                <ul className='gray iso-ul'>
                  <li>It must be ensured that a review describes a customer’s personal experience with a product or service</li>
                  <li>Furthermore, it must be ensured that the information contained therein is true to the knowledge of the author</li>
                  <li>Slanderous language is to be excluded</li>
                  <li>Potential conflicts of interest should be explicitly mentioned</li>
                  <li>Personally identifiable information or information that could allow other users to identify or contact private individuals may not be included in a review. This includes, for example, addresses, e-mail addresses and telephone numbers</li>
                  <li>The content of the review must also not contain any financial information such as credit card details or bank account numbers. The publication of such data can lead to significant misuse</li>
                  <li>The review must not contain any marketing materials. All in all, ISO 20488 offers customers and companies a higher level of security, as compliance with the standard ensures that ratings actually correspond to a real customer opinion and are therefore valuable to other users. The ISO 20488 standard is therefore an important basis for this very important means of communication and online marketing </li>
                </ul>
            </div>
        </div>
    </div>
    <div className='iso-container2'>
      <div className='iso-container_content2 container'>
        <div className='iso-container_newsTitle'>
          <h2>More articles from "News"</h2>
          <p>Show all items in this category ({news.length})</p>
        </div>
        <div className='iso-news'>
          <Slider {...settings}>
          {
            news.map((e) =>{
              return <IsoNews image={e.image} date={e.date} description={e.description} />
            })
          }
          </Slider>
        </div>
        <div className='iso-news_navigation-container'>
        <div className='iso-news_navigation'><div className='iso-nav-arrows'><img src='../../../assets2/iso-arrow-left.svg'/>Previous article</div><div className='iso-blog_button'><img src='../../../assets2/blog-home.svg' />Go to blog home page</div> <div className='iso-nav-arrows'> Next articles<img src='../../../assets2/iso-arrow-right.svg' /></div></div>
        </div>
      </div>
    </div>
    <div className='iso-footer'>
    <Footer />
    </div>
    </>
  )
}

export default Iso