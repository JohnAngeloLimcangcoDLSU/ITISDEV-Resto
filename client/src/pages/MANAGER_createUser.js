import React from 'react'
import '../styles/MANAGER_createUser.css'

function MANAGER_createUser() {

    

  return (
  

<div class="form-content">
  <h1>Create New Users in The Restaurant</h1>
  

  <form action="/action_page.php">

    <label for="fName">First Name:</label>
    <input type="text" id="fName" name="fName"/>
    
    <br/><br/>

    <label for="lName">Last Name:</label>
    <input type="text" id="lName" name="lName"/>

    <br/><br/>

    <label for="username">Username:</label>
    <input type="text" id="username" name="username"/>

    <br/><br/>

    <label for="role">Role:</label>
    <select name="role" id="role">
        <option value="manager">Manager</option>
        <option value="stock">Stock Controller</option>
        <option value="cashier">Cashier</option>
    </select>

    <br/><br/>

    <label for="password">Password:</label>
    <input type="text" id="password" name="password"/>

    <br/><br/>

    <label for="password">Confirm Password:</label>
    <input type="text" id="password" name="password"/>

  <br/><br/>

    <input type="submit" value="Submit"/>
  </form> 

  




</div>


  )
}

export default MANAGER_createUser
