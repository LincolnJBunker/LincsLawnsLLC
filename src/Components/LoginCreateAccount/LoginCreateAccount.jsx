import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginCreateAccount.css';
import axios from 'axios';


function LoginCreateAccount() {
    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    // const [customerId, setCustomerId] = useState(null)

    const adminId = useSelector((state) => state.adminId)

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        //need to create my req.body obj

        const bodyObj = {
            adminName: adminName,
            adminPassword: adminPassword
        }

        //now send this data to our /login endpoint to validate
        const res = await axios.post('/api/login', bodyObj)

        // get response and save the userId to the redux store
        if (res.data.success) {
            dispatch({
                type: 'USER_AUTH',
                payload: res.data.adminId
            })
            setAdminName('')
            setAdminPassword('')
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
                payload: res.data.adminId
            })
        }
    }

    useEffect(() => {
        sessionCheck()
    }, [])

  return (
    <>
    {!adminId &&
    <form onSubmit={handleLogin}>
        <input type='text' value={adminName} placeholder='Admin Name' onChange={(e) => setAdminName(e.target.value)} />
        <input type="password" value={adminPassword} placeholder='Password' onChange={(e) => setAdminPassword(e.target.value)}  />
        <button type='submit'>Submit</button>
    </form>

    }
    
    </>
    
      )
    }
    
    export default LoginCreateAccount