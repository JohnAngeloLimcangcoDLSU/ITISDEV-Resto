import React, { useEffect, useState } from 'react'
import '../styles/MANAGER_viewDish.css'
import Axios  from 'axios'

function MANAGER_viewDish() {
  
  const [dish, setDish] = useState([])

  Axios.defaults.withCredentials = true

  useEffect(() => {
    Axios.get("http://localhost:3005/getDish").then((response) => {
      console.log(response)
      setDish(response.data)
    })
  })
  
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
    return <div key = {val.id} classname="form-content">
      {val.id}
      {val.name}

      </div>
  })}

</div>
  )
}

export default MANAGER_viewDish
