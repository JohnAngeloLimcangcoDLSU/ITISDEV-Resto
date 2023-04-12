import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import '../App.css'
import Select from 'react-select'

function Registration() {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [role, setRole] = useState('')

    const [roles, setRoles] = useState([])

    Axios.defaults.withCredentials = true
    
    const register = () => {
        Axios.post('http://localhost:3001/register',
        {username: usernameReg,
        firstname: firstname,
        lastname: lastname,
        password: passwordReg,
        role_id: role}
        ).then((response) => {
        console.log(response)
        })
    }

    const getRoles = () => {
        Axios.get('http://localhost:3005/roles').then((response) => {
            console.log(response)
            setRoles(response.data)
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
                <label>Role</label>
                <input type='text' onChange={(e) => {setRole(e.target.value)}}/>
                <select>
                    <option>Manager</option>
                    <option>Stock Controller</option>
                    <option>Cashier</option>
                </select>

                <button onClick={register}> Register </button>
            </div>
        </div>
    )
}

export default Registration