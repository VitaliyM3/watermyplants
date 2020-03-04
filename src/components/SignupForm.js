import React, { useState } from 'react';
import { axiosWithAuth } from "./axiosWithAuth";


const SignupForm = (props) => {
    const [users, setUsers] = useState({
        username: '',
        password: '',
        phoneNumber: ''
    });

    const changeHandler = e => {
        setUsers({ ...users,[e.target.name]: e.target.value  });
    };

    const submitHandler = e => {
        e.preventDefault();
        console.log(users, 'users from the submithandler');
        axiosWithAuth()
            .post("https://webpt9-water-my-plants.herokuapp.com/api/auth/register", users)
            // .then(res => console.log(res))
            .then(res => console.log(res))
            .catch(err => {
                console.log(err, "error didnot post registration")
            })

    };

    return (
        <form onSubmit={submitHandler} >
            <h2>Sign Up for Water My Plants</h2>

            <div>
                <label className="user-name">Username</label>
                <input
                    type="text"
                    name="username"
                    value={users.username}
                    onChange={changeHandler}
                />
                <label className="user-password" >Password</label>
                <input
                    type="password"
                    name="password"
                    value={users.password}
                    onChange={changeHandler}
                />
                <label className="user-phone" >Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={users.phoneNumber}
                    onChange={changeHandler}
                />
            </div>

            <div>
                <button type="submit" >Sign Up</button>
            </div>
            
        </form>
    );
};

export default SignupForm;
