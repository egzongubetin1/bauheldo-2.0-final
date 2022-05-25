import {SliderComponent, Footer, Section2, Section3, LatestReviews,SecondPartners, Video, Awards, FourPosts, Info } from '../../components';
import { Firms , Header } from '../../containers';


const Main = () => {
  return (
    <div className="main">
        <Header />
        <SliderComponent />
        <Firms />
        <Section2 />
        <Section3 />
        <LatestReviews />
        <SecondPartners />
        <Video />
        <Info />
        <FourPosts />
        {/* <AdvantagesCard title="veveqvrqev" image="../../assets/logo.png" more="Lorem ipsum dolar" description="Lorem ipsumdolar"/> */}
        <Awards />
        <Footer />
    </div>
  )
}

export default Main