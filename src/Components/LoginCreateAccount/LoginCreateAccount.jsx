import { useState } from 'react';
import './LoginCreateAccount.css';


function LoginCreateAccount() {
    const [action, setAction] = useState("Create Account")

  return (
    <div className='container'>
    <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
        {action === "Login" ? <div></div>:<div className="input">
            <input type="text" placeholder='First Name'/>
        </div>}
        {action === "Login" ? <div></div>:<div className="input">
            <input type="text" placeholder='Last Name'/>
        </div>}
        {action === "Login" ? <div></div>:<div className="input">
            <input type="text" placeholder='Address'/>
        </div>}

        <div className="input">
            <input type="email" placeholder='Email'/>
        </div>
        
        

        <div className="input">
            <input type="password" placeholder='Password'/>
        </div>
    </div>
    {action === "Create Account" ? <div></div>:<div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
    <div className="submit-container">
      <div className={action==="Login"?"submit gray": "submit"} onClick={() => {setAction("Create Account")}}>Create Account</div>
      <div className={action==="Create Account"?"submit gray": "submit"} onClick={() => {setAction("Login")}}>Login</div>
    </div>
</div>
  )
}

export default LoginCreateAccount