

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
    const [email, setEmail] = useState('');
    const [message, setmessage] = useState('');
    const [loading, setLoading] = useState(false);

    const subscribe = async () => {
        setLoading(true);
        try {
            
            await axios.post('https://custon-aleart-system.onrender.com/api/subscribers/', { email });
            alert('Subscribed successfully');
            setmessage('Subscribed successfully');
            
        } catch (error) {
            alert('Error subscribing kuch to gadbad hai');
            setmessage('Subscribed is not successful user already exist or input is empty');
        }
        setLoading(false);
    };

    const sendAlert = async () => {
        setLoading(true);
        try {
            
            await axios.post('https://custon-aleart-system.onrender.com/api/alerts');
            alert('Alert sent');
            setmessage('Alert sent');
            setLoading(false);
        } catch (error) {
            alert('Error sending alert');
           setmessage('Alert is not sent there is a problem');
        }
        
    };

    return (
        <div className='body'>
<div className='container'>
            <h1 className='heading'>Custom Alert System</h1>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
             className='input'/>
            <button onClick={subscribe} className='subs'>Subscribe</button>
            <button onClick={sendAlert} className='alert'>Send Alert</button>
            {loading && <div className="spinner"></div>} 
            <p>{message}</p>
        </div>
        </div>
        
    );
};

export default App;

