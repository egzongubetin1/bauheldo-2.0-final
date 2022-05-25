import { Link } from 'react-router-dom';
import { Footer } from '../../components';

const Error = () => {
  return (
      <>
    <div className="error-container">
      <div className="error-content container">
          <h2>ERROR 404</h2>
          <h3>Page not found</h3>
          <p>Oops! Looks like the page you were looking for doesn't exist or has been moved. Make sure you've provided the correct URL.</p>
          <Link to="/">To home page.</Link>
      </div>        
    </div>
    <Footer />
    </>
  )
}

export default Error