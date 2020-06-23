import React from 'react';
import './Messages.css';

const Messages = ({ messages, name }) => {
    return (
        <div className="messages">{
            messages.map((message, i) => {
                console.log('.........................', message);
                if (message.user === name) {
                    return <div key={i} className="right border">
                        <p class="name" >{message.user}</p>
                        <div >{message.text}</div>
                    </div>
                }
                else if (message.user === 'admin') {
                    return <div key={i} className="center border">
                        <p class="name">{message.user}</p>
                        <p >{message.text}</p>
                    </div>
                }
                else {
                    return <div key={i} className="left border">
                        <p class="name">{message.user}</p>
                        <div >{message.text}</div>
                    </div>
                }
            })}
        </div>
    )
}

export default Messages;