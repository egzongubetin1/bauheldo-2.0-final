import { useEffect } from "react";
import './App.scss';
import { Navbar, Register, Bookmarks, Footer, Login, RegisterName } from './components';
import { CheckRatings, CollectReviews, Evaluate, Iso, Main, Offers, Scoring, Widget, Error } from './containers';
import { Routes , Route, useLocation } from 'react-router-dom';
import ShareReviews from './containers/sharereviews/ShareReviews';

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='app-container'>
      <Navbar />
      <div className='app-routes'>
      <Routes>
        <Route index element={<Main />} />
        <Route path="register" element={<Register />} />
        <Route path="evaluate" element={<Evaluate />} />
        <Route path='bookmarks' element={<Bookmarks />} />
        <Route path='offers' element={<Offers />} />
        <Route path="sharereviews" element={<ShareReviews />} />
        <Route path="collectreviews" element={<CollectReviews />}/>
        <Route path="widget" element={<Widget />}/>
        <Route path="iso" element={<Iso />} />
        <Route path="scoring" element={<Scoring />} />
        <Route path="checkratings" element={<CheckRatings />} />
        <Route path="login" element={<Login />} />
        <Route path="registerName" element={<RegisterName />} />
        <Route path="error" element={<Error />} />
      </Routes>
      </div>
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
