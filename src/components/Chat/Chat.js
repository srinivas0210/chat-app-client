import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Messages from '../Messages/Messages';
import Users from '../Users/Users';
import './Chat.css';

let socket;



const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [rooms, setRooms] = useState([]);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { room, name } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        console.log(socket);

        setRoom(room);
        setName(name);

        socket.emit('join', { name, room }, ({ message }) => {
            console.log(message);
        });
        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {

            setMessages([...messages, message]);
            console.log('the messages are: ', messages);
        })
    }, [messages]);
    useEffect(() => {
        socket.on('newuseradded', (userdetails) => {
            console.log('gurram gurram gurram');
            setUsers([...users, userdetails]);
        })
    }, [users]);



    const sendMessage = (event) => {
        event.preventDefault();
        console.log('1here');
        socket.emit('sendMessage', { name, message, room, time }, () => setMessage(''));
    }

    return (
        <div className="flex-item item-2">
            <div className="item-3">
                <h1>{room}</h1>
            </div>
            <div className="item-4">
                <Messages messages={messages} name={name} time={time} />
            </div>
            <div className="item-5">

                <input
                    className="input"
                    value={message}
                    placeholder='type message...'
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null} />
            </div>
        </div>


    )
}

export default Chat;