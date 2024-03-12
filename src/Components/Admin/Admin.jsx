import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button, Alert } from 'react-bootstrap';


function LoginCreateAccount() {
    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [show, setShow] = useState(true);
    const [alertMessage, setAlertMessage] = useState('');
    
    const adminId = useSelector((state) => state.adminId)
    const name = useSelector((state) => state.adminName)
    
    
    const dispatch = useDispatch();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        
        //need to create my req.body obj
        
        const bodyObj = {
            adminName: adminName,
            adminPassword: adminPassword
        }
        console.log(bodyObj)
        
        //now send this data to our /login endpoint to validate
        const res = await axios.post('/api/login', bodyObj)
        
        // get response and save the userId to the redux store
        if (res.data.success) {
            dispatch({
                type: 'USER_AUTH',
                payload: {
                    adminId: res.data.adminId,
                    adminName: adminName
                }
            })
            setAdminName('')
            setAdminPassword('')
        } 
        // setAlertMessage(res.data.message)
        // setShow(true)
        alert(res.data.message)
        
    }
    
    const handleLogout = async () => {
        const res = await axios.get('/api/logout')
        
        if(res.data.success) {
            dispatch({
                type: 'LOGOUT'
            })
        }
    }
    
    const sessionCheck = async () => {
        const res = await axios.get('/api/session-check')
        console.log(res)
        
        if (res.data.success) {
            dispatch({
                type: 'USER_AUTH', 
                payload: res.data.adminId,
            })
        }
    }
    
    useEffect(() => {
        sessionCheck()
    }, [])
    
    return (
        <>
    <nav className='login-nav'>
        {adminId ?
            <Button className="login-btn" onClick={handleLogout}>Logout</Button> :
            <Button className="login-btn" onClick={() => setShow(true)}>Login</Button>
        }

    </nav>
    {!adminId &&
    <form className='login-form'>
        <div className="login-inputs">
            <input type='text' value={adminName} placeholder='Admin Name' onChange={(e) => setAdminName(e.target.value)} />
            <input type="password" value={adminPassword} placeholder='Password' onChange={(e) => setAdminPassword(e.target.value)}  />
        </div>
        <Button onClick={handleLogin} className="button">Submit</Button>
    </form>
    }
    {adminId &&
        <h3 className='welcome-admin'>Welcome admin {adminName}</h3>
    }
    
    </>
    
      )
    }
    
    export default LoginCreateAccount