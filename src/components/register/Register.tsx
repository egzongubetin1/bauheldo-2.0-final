import { Button } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../axios/axios';

const Register = () => {

  const navigate = useNavigate();

  const [emailReg, setEmailReg] = useState<string>('');
  const [passwordReg, setPasswordReg] = useState<string>('');


  const payload ={
    email: emailReg,
    password : passwordReg
  }

  const register = () =>{

    api.post("register", payload).then((response) =>{
      navigate('/registerName', {replace: true})
      console.log(response);
    })

  }

  function onClickRegister(){
    return
  }

  console.log(emailReg);
  console.log(passwordReg);

  return (
    <div className="register-container">
        <div className="register-containers container">
          <div className="register-container_module">
            <div className='register-container_module-content'>
              <h2 className='register'>Register</h2>
              <div className='register-inputs'>
                <input onChange={(e) => setEmailReg(e.target.value)} className='register-input' placeholder='E-mail*'/>
                <p className='register-public'>Not publicly visible</p>
              </div>
              <div className='register-inputs'>
              <input onChange={(e) => setPasswordReg(e.target.value)} type="password" className='register-input' placeholder='Password*'/>
              <p className='register-public'>Not publicly visible</p>
              </div>
              <div className='register-top_text'><p>By clicking on “Complete registration with e-mail” I accept the <span>data protection guidelines</span></p></div>
              <Link to="/registerName">
                <Button variant='btn-nav' size='ft-size_register' children="Complete registration with email" onClick={register}></Button>
                </Link>
              <div className='borders2'><div className='border'></div><p className='or'>or</p><div className='border'></div></div>
             <div className='register-bottom_text'><p>Already have an account?</p><Link to="/login" className='register-important_text2'>Login.</Link></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register
