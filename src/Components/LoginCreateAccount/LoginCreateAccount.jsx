import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginCreateAccount.css';
import axios from 'axios';


function LoginCreateAccount() {
    const [action, setAction] = useState("Create Account")
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');

    // const [customerId, setCustomerId] = useState(null)

    const customerId = useSelector((state) => state.customerId)

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        //need to create my req.body obj

        const bodyObj = {
            firstName: firstName,
            email: email
        }

        //now send this data to our /login endpoint to validate
        const res = await axios.post('/api/login', bodyObj)

        // get response and save the userId to the redux store
        if (res.data.success) {
            dispatch({
                type: 'USER_AUTH',
                payload: res.data.customerId
            })
            setFirstName('')
            setEmail('')
        } 
        
        alert(res.data.message)

    }

    const handleLogout = async () => {
        const res = await axios.post('/api/logout')

        if(res.data.success) {
            dispatch({
                type: 'LOGOUT'
            })
        }
    }

    const sessionCheck = async () => {
        const res = await axios.post('/api/session-check')

        if (res.data.success) {
            dispatch({
                type: 'USER_AUTH', 
                payload: res.data.customerId
            })
        }
    }

    useEffect(() => {
        sessionCheck()
    }, [])

  return (
    <>
    {!customerId &&
    <form onSubmit={handleLogin}>
        <input type='text' value={firstName} placeholder='Name' onChange={(e) => setFirstName(e.target.value)} />
        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}  />
        <button type='submit'>Submit</button>
    </form>

    }
    
    </>
    
      )
    }
    
    export default LoginCreateAccount
    //     <div className='container'>
    //     <div className="header">
    //         <div className="text">{action}</div>
    //         <div className="underline"></div>
    //     </div>
    //     <div className="inputs">
    //         {action === "Login" ? <div></div>:<div className="input">
    //             <input type="text" placeholder='First Name'/>
    //         </div>}
    //         {action === "Login" ? <div></div>:<div className="input">
    //             <input type="text" placeholder='Last Name'/>
    //         </div>}
    //         {action === "Login" ? <div></div>:<div className="input">
    //             <input type="text" placeholder='Address'/>
    //         </div>}
    
    //         <div className="input">
    //             <input type="email" placeholder='Email'/>
    //         </div>
            
            
    
    //         <div className="input">
    //             <input type="password" placeholder='Password'/>
    //         </div>
    //     </div>
    //     {action === "Create Account" ? <div></div>:<div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
    //     <div className="submit-container">
    //       <div className={action==="Login"?"submit gray": "submit"} onClick={() => {setAction("Create Account")}}>Create Account</div>
    //       <div className={action==="Create Account"?"submit gray": "submit"} onClick={() => {setAction("Login")}}>Login</div>
    //     </div>
    // </div>