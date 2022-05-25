import Slider from "react-slick";

const SliderComponent = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      console.log(settings);

  return (
        <div className="slider-container">
            <div className="slider-container container">
                    <div className="slider">
                        {/* <Slider {...settings}> */}
                        <div className="slider-btn1">Leading platform</div>
                        <div className="slider-btn">Quality convinces</div>
                        <div className="slider-btn">Industry standard</div>
                        <div className="slider-btn">Impress applicants</div>
                        <div className="slider-btn5">No fake reviews</div>
                        {/* </Slider> */}
                    </div>
                </div>
            </div>
  )
}

export default SliderComponent;