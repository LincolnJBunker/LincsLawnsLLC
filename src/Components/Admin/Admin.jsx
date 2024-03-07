import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button } from 'react-bootstrap';


function LoginCreateAccount() {
    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    
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
    <nav>
        {adminId ?
            <Button className="button" onClick={handleLogout}>Logout</Button> :
            <Button className="button">Login</Button>
        }

    </nav>
    {!adminId &&
    <form>
        <input type='text' value={adminName} placeholder='Admin Name' onChange={(e) => setAdminName(e.target.value)} />
        <input type="password" value={adminPassword} placeholder='Password' onChange={(e) => setAdminPassword(e.target.value)}  />
        <Button onClick={handleLogin} className="button">Submit</Button>
    </form>
    }
    {adminId &&
        <h3>Welcome admin {adminName}</h3>
    }
    
    </>
    
      )
    }
    
    export default LoginCreateAccount