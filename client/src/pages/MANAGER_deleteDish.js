import React from 'react'
import '../styles/MANAGER_deleteDish.css'

function MANAGER_deleteDish() {
  return (
    
<div class="form-content">
  <h1>Available Dishes in the Menu</h1>
  

 
  <table>
    <tr>
      <th>Dish Name  </th>
      <th> </th>
    </tr>
    <tr>
      <td>Adobo</td>
      <td><input type="submit" value="Delete"/></td>

    </tr>
    <tr>
      <td>Kaldareta </td>
      <td><input type="submit" value="Delete"/></td>

    </tr>
    <tr>
      <td>Coke Float</td>
      <td><input type="submit" value="Delete"/></td>

    </tr>

  </table>

  




</div>
  )
}

export default MANAGER_deleteDish
