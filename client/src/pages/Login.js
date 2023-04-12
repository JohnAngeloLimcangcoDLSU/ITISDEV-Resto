import React from 'react'
import {useState, useEffect} from 'react'
import Axios from 'axios'
import '../App.css'

function Registration() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState('')

    Axios.defaults.withCredentials = true

    const login = () => {
        Axios.post('http://localhost:3001/login',
        {username: username,
        password: password}
        ).then((response) => {
        if (response.data.message) {
            setLoginStatus(response.data.message)
        }
        else {
            setLoginStatus(response.data[0].username)
        }
        console.log(response.data)
        })
    }

    useEffect(() => {
        Axios.get('http://localhost:3001/login').then((response) => {
        if(response.data.loggedIn === true) {
            setLoginStatus(response.data.user[0].username)
        }
        })
    }, [])

    return (
        <div className='App'>
            <div className='login'>
                <h1>Log In</h1>
                <input type='text' placeholder='Username...' onChange={(e) => {setUsername(e.target.value)}}/>
                <input type='password' placeholder='Password...' onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={login}> Log In </button>
            </div>

            <h1>{loginStatus}</h1>
        </div>
    )
}

export default Registration