import React, { Component, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import io from 'socket.io-client';
import './Youtube.css';

const ENDPOINT = 'localhost:5000';
let socket;

const Youtube = () => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [feed, setFeed] = useState([]);
    console.log('it is: ', feed);
    socket = io(ENDPOINT);
    const AddUrl = () => {
        console.log(name, url);
        socket.emit('addUrl', { name, url });
        socket.emit('fetchFeed', name);
        setUrl('');
    }
    socket.on('userFeed', (userFeed) => {
        setFeed(userFeed);
    });
    const AddUser = () => {
        setName(name);
        socket.emit('fetchFeed', name);
    }
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={AddUser}>Add User</button>
            </div>
            <div>

                <input name="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={{ width: '50%', marginBottom: '15px', marginTop: '15px' }} />
                <button onClick={AddUrl}>Add Url</button>
            </div>
            <div className="flex-container-youtube">
                {feed.map((video, index) => {
                    return (

                        <div className="flex-item-youtube item-youtube" key={index}>
                            <ReactPlayer url={video.videourl} width="70%" height="240px" />
                        </div>

                    )
                })}
            </div>
        </div>
    );
}

export default Youtube;