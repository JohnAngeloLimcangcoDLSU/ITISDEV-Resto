import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/MANAGER-viewDiscrepancy.css'

function MANAGER_viewDiscrepancy() {
  
  const [discrepancy, setDiscrepancy] = useState([])

  Axios.defaults.withCredentials = true

  useEffect(() => {
    Axios.get('http://localhost:3005/getInventory').then((response) => {
      console.log(response)
      setDiscrepancy(response.data)
    })
  })

  return(
    <div>
    <center>
      <input type="date" id="startDate" name="date-start" /> -
      <input type="date" id="endDate" name="date-end" />
    </center>
    

    <table>
      <tr>
        <th>Ingredients</th>
        <th>System Quantity</th>
        <th>On-Site Quantity</th>
        <th>Difference</th>
        <th>Unit</th>
        <th>Date</th>
      </tr>
      {/* <tr>
        <td>Apple</td>
        <td>50</td>
        <td>49</td>
        <td>1</td>
        <td>g</td>
        <td>2/3/2023</td>
      </tr>
      <tr>
        <td>Tuna</td>
        <td>500</td>
        <td>490</td>
        <td>10</td>
        <td>g</td>
        <td>2/4/2023</td>
      </tr>
      <tr>
        <td>Coke</td>
        <td>5</td>
        <td>2</td>
        <td>3</td>
        <td>mL</td>
        <td>2/5/2023</td>
      </tr> */}

    </table>



  </div>

  )
}

  export default MANAGER_viewDiscrepancy