import { Button } from '../../components';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react';

const Login = () => {

    const [username , setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [loginStatus, setLoginStatus] =useState<string>('');

    const login = () =>{
        Axios.post("", {
          username: username,
          password: password,
        }).then((response) =>{
            if(response.data.message > 0){
                setLoginStatus(response.data.message);
            }else{
                setLoginStatus(response.data[0].username);
            }
          
        });
      };

  function onClickLogin(){
    return
  }

  return (
    <div className="login-container">
        <div className="login-containers container">
          <div className="login-container_module">
            <div className='login-container_module-content'>
              <h2 className='login'>Login</h2>
              <div className='login-inputs'>
                <input onChange={(e) => setUsername(e.target.value)} className='login-input' placeholder='E-mail'/>
                <p className='login-public'>Not publicly visible</p>
              </div>
              <div className='login-inputs'>
              <input onChange={(e) => setPassword(e.target.value)} type="password" className='login-input' placeholder='Password'/>
              <p className='login-public'>Not publicly visible</p>
              </div>
              {/* <div className='login-top_text'><p>By clicking on “Complete registration with e-mail” I accept the <span>data protection guidelines</span></p></div> */}
              <Button variant='btn-nav' size='ft-size_register' children="Login" onClick={login}></Button>
              <div className='borders2'><div className='border'></div><p className='or'>or</p><div className='border'></div></div>
             <div className='login-bottom_text'><p>Dont have an account yet</p><Link to="/register" className='login-important_text2'>Register for free.</Link></div>
            </div>
          </div>
        </div>
        <div>{loginStatus}</div>
    </div>
  )
}

export default Login;
