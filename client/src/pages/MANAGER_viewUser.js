import React from 'react'
import '../styles/MANAGER_viewUser.css'

function MANAGER_viewUser() {

    

  return (
  

<div class="form-content">
  <h1>Remove Users From The Restaurant</h1>
  


  <table>
    <tr>
      <th>Username</th>
      <th>Role</th>
      <th> </th>
    </tr>
    <tr>
      <td>ManagerUser</td>
      <td>Manager</td>
      <td><input type="submit" value="Delete"/></td>

    </tr>
    <tr>
      <td>StockUser </td>
      <td>StockController</td>
      <td><input type="submit" value="Delete"/></td>

    </tr>
    <tr>
      <td>CashierUser</td>
      <td>Cashier</td>
      <td><input type="submit" value="Delete"/></td>

    </tr>

  </table>




</div>


  )
}

export default MANAGER_viewUser
