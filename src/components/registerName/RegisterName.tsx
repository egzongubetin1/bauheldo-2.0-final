import { Button } from '../../components';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';

const RegisterName = () => {

  const [usernameNam, setUsernameNam] = useState<string>('');
  // const [passwordNam, setPasswordNam] = useState<string>('');

  const [registerNameStatus, setregisterNameStatus] = useState<string>('');

  const registerName = () => {
    Axios.post("register", {
      username: usernameNam,
    }).then((response) => {
      if (response.data.message > 0) {
        setregisterNameStatus(response.data.message);
      } else {
        setregisterNameStatus(response.data[0].username);
      }

    });
  };

  function onClickregisterName() {
    return
  }

  return (
    <div className="registerName-container">
      <div className="registerName-containers container">
        <div className="registerName-container_module">
          <div className='registerName-container_module-content'>
            <h2 className='registerName'>Last step</h2>
            <p className='registerName-p'>Give yourself a publicly visible username and provide a few details so we can tailor your dashboard to you.</p>
            <div className='registerName-inputs'>
              <input onChange={(e) => setUsernameNam(e.target.value)} className='registerName-input' placeholder='Username' />
              <p className='registerName-public'>Not publicly visible</p>
            </div>
            {/* <div className='registerName-top_text'><p>By clicking on “Complete registration with e-mail” I accept the <span>data protection guidelines</span></p></div> */}
            <Link to="/error"><Button variant='btn-nav' size='ft-size_register' children="Start now" onClick={registerName}></Button></Link>
            <div className='borders2'><div className='border'></div><p className='or'>or</p><div className='border'></div></div>
            <div className='registerName-bottom_text'><p>Have an account already?</p><Link to="/login" className='registerName-important_text2'>Login.</Link></div>
          </div>
        </div>
      </div>
      <div>{registerNameStatus}</div>
    </div>
  )
}

export default RegisterName;