import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/send', {
            name: name,
            emaila: email,
            message: message
        })
        .then((res) => {
            if (res.data.status === 'success') {
                alert('Message Sent.');
                resetForm()
            } else if (res.data.status === 'fail') {
                alert('Message failed to send.')
            }
        })
    }

    function resetForm(){
        setName('')
        setEmail('')
        setMessage('')

    }

        return (
            <form id="contact-form" name="contact-form" onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
        
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
        
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          )
    }



export default ContactForm