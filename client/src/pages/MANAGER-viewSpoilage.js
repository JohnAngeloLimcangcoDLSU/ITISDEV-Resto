import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/MANAGER-viewSpoilage.css'

function MANAGER_viewSpoilage() {

  const [spoilage, setSpoilage] = useState([])

  Axios.defaults.withCredentials = true

  useEffect(() => {
    Axios.get('http://localhost:3005/getManagerSpoilage').then((response) => {
      console.log(response)
      setSpoilage(response.data)
    })
  })

  return (
    <div>

      <div class="form-content">
      <h1>Sort by Date Range</h1>

      <center>
        <input type="date" id="startDate" name="date-start" /> -
        <input type="date" id="endDate" name="date-end" />
      </center>


      <table>
      <tr>
      <th>Ingredients</th>
      <th>Spoiled Quantity</th>
      <th>Unit</th>
      <th>Date</th>
      </tr>
      {/* <tr>
      <td>Apple</td>
      <td>50</td>
      <td>g</td>
      <td>2/3/2023</td>
      </tr>
      <tr>
      <td>Tuna</td>
      <td>500</td>
      <td>g</td>
      <td>2/4/2023</td>
      </tr>
      <tr>
      <td>Coke</td>
      <td>5</td>
      <td>mL</td>
      <td>2/5/2023</td>
      </tr> */}

      </table>

      {spoilage.map((val, key) => {
        return <div key = {val.id} classname="form-content">
          {val.spoil_name}
          {val.spoil_quantity}
          {val.inventory_id}

          </div>
      })}




      </div>
    </div>
  )
}