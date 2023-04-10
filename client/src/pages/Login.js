
import React from 'react'
import '../styles/Login.css'

function Login() {
  return (
   
<div class="LogInContent" >
        
        <form id="login-form" action="inventory.html">
                <div class="LogInUsername">
                        <div class="UsernameIcon">
                                <img src="username.png" class="PasswordIcon"/>
                        </div>
                        <input type="text" name="userName" id="userName" class="LogInUsername" placeholder="Username"/>
                        
                </div>
                <br/>
                <div class="LogInPassword">
                        <div class="PasswordIcon">
                                <img src="password.png" class="PasswordIcon"/>
                        </div>
                        <input type="password" name="password" id="password" class="LogInPassword" placeholder="Password"/>
                </div>
                <br/>
                <input type="submit" name="loginbtn" id="loginbtn" class="loginbtn" value="Login"/>
        </form>
</div>
  

  )
}

export default Login
