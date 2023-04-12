import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/STOCK-viewInventory.css'

function STOCK_viewInventory() {

  const [inventory, setInventory] = useState([])

  Axios.defaults.withCredentials = true

  useEffect(() => {
    Axios.get('http://localhost:3005/getInventory').then((response) => {
      console.log(response)
      setInventory(response.data)
    })
  })

  return (

      <div class="form-content">
        <h1>Available Ingredients in Stock</h1>

        {inventory.map((val, key) => {
          return <div key = {val.id} classname="form-content">
            {val.name}
            {val.category_id}
            {val.quantity}
            {val.unit_id} 
            
          </div>
        })}
        {/* <table>
          <tr>
            <th>Name<img src="../assets/arrowDown.png" class="arrowIcon" /></th>
            <th>Category<img src="../assets/arrowDown.png" class="arrowIcon" /></th>
            <th>Quantity</th>
            <th>Unit</th>

          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table> */}


      </div>

  ) 
}

export default STOCK_viewInventory