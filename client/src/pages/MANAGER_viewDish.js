import React from 'react'
import '../styles/MANAGER_viewDish.css'

function MANAGER_viewDish() {
  return (
    
<div class="form-content">
  <h1>Available Dishes in the Menu</h1>
  

  <table>
    <tr>
      <th>Dish Name  </th>
      <th>Price </th>
    </tr>
    {/* <tr>
      <td>Adobo</td>
      <td>PHP 100</td>

    </tr>
    <tr>
      <td>Kaldareta </td>
      <td>PHP 125</td>

    </tr>
    <tr>
      <td>Coke Float</td>
      <td>PHP 125</td>

    </tr> */}

  </table>

  {dish.map((val, key) => {
    return <div key = {val.id}>
      {val.id}
      {val.name}

      </div>
  })}

</div>
  )
}

export default MANAGER_viewDish
