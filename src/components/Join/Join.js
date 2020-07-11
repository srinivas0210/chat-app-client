import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { setUserSession } from '../utils/Common';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = (event) => {
        if (!name || !room) {
            event.preventDefault()
        }
    }

    return (
        <div >
            <h1>Login</h1>
            <div>
                Username<br />
                <input type="text" onChange={(event) => setName(event.target.value)} />
            </div>
            <div style={{ marginTop: 10 }}>
                Roomname<br />
                <input type="text" onChange={(event) => setRoom(event.target.value)} />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <Link onClick={handleLogin} to={`/chat?name=${name}&room=${room}`}>
                <button type="submit"  >submit</button>
            </Link>
        </div>
    )
}

export default Join;



