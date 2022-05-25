import Button from '../button/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from '../../components';


interface Nav{
  param : boolean,
}

const Navbar = () => {

  const onClickCraftsmen = () =>{
    return
  }

  const [toggleMenu , setToggleMenu ] = useState<boolean>(false);

  const handleToggleMenu = (param: boolean | ((prevState: boolean) => boolean)) =>{
     setToggleMenu(!param);
  };

  function scrollTop(){
    window.scrollTo(0, 0);
}

  return (
    <>
    <div className='navbar-container'>
      <div className="navbar-container_all container">
      <div onClick={scrollTop}>
        <Link to='/'><img src={require('../../assets/Bauheldo_Logo.png')} alt="bauheldo" className='navbar-logo'/></Link>
      </div>
      <div className="navbar-content">
        <div className='navbar-routes'>
          <label>
           <div className='navbar-route'>
             
             <Link className="Link" to="/evaluate"><img className='nav-icons' src='../../../assets2/Iconfeather-star.svg'/>Evaluate</Link>
           </div>
           </label>
           <label>
           <div className='navbar-route'>
           <Link className="Link" to="/bookmarks"><img className='nav-icons' src="../../../assets2/Vector.svg"/>Bookmarks</Link>
           </div>
           </label>
           <label>
           <div className='navbar-route'>
           <Link className="Link" to="/register"><img className="nav-icons" src="../../../assets2/Group2.svg"/>Register</Link>
           </div>
           </label>
           <div className='navbar-route_menu'>
           <div  onClick={() => handleToggleMenu(toggleMenu)}>
                  {toggleMenu ? <>
                          <svg id="Capa_1" enable-background="new 0 0 386.667 386.667" height="30"
                                viewBox="0 0 386.667 386.667" width="30" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/>
                          </svg>
                      </> :
                      <>
                          <svg id="Capa_1" viewBox="0 0 100 80" width="30" height="30">
                              <rect width="100" height="10" rx="0"></rect>
                              <rect y="35" width="100" height="10" rx="0"></rect>
                              <rect y="65" width="100" height="10" rx="0"></rect>
                          </svg>
                      </>
                  }

                    <span className='navbar-menu_link'>
                      Menu
                    </span>
                </div>
            </div>
        </div>
        <div className='navbar-btn_container'>
          <Button variant='btn-nav' size="big" children="Rate Craftsmen" onClick={onClickCraftsmen}></Button>
        </div>
      </div>
    </div>
    {toggleMenu && 
    <Menu function={handleToggleMenu}/>
    }
    </div>
    </>
  )
}

export default Navbar