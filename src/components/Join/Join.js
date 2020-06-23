import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div >
            <input placeholder="name" type="text" onChange={(event) => setName(event.target.value)} />
            <input placeholder="room" type="text" onChange={(event) => setRoom(event.target.value)} />
            <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button type="submit"  >submit</button>

            </Link>
        </div>
    )
}

export default Join;