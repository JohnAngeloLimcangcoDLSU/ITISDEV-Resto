import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import '../App.css'

function Registration() {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')

    Axios.defaults.withCredentials = true
    
    const register = () => {
        Axios.post('http://localhost:3001/register',
        {username: usernameReg,
        firstname: firstname,
        lastname: lastname,
        password: passwordReg}
        ).then((response) => {
        console.log(response)
        })
    }

    return (
        <div className='App'>
            <div className='registration'>
                <h1>Registration</h1>
                <label>Username</label>
                <input type='text' onChange={(e) => {setUsernameReg(e.target.value)}}/>
                <label>First Name</label>
                <input type='text' onChange={(e) => {setFirstname(e.target.value)}}/>
                <label>Last Name</label>
                <input type='text' onChange={(e) => {setLastname(e.target.value)}}/>
                <label>Password</label>
                <input type='text' onChange={(e) => {setPasswordReg(e.target.value)}}/>
                
                <button onClick={register}> Register </button>
            </div>
        </div>
    )
}

export default Registration