import React from 'react';
import './Users.css';

const Users = ({users,name}) => {
    return (
        <div className="users">{
            users.map((user, i) => {
                console.log('.........................', user);
                if (user.name === name) {
                    return <div key={i} >
                        
                        <div >You</div>
                    </div>
                }
                else {
                    return <div key={i} >
                        
                    <div >{user.name} from {user.room}</div>
                </div>
                }
            })}
        </div>
    )
}

export default Users;