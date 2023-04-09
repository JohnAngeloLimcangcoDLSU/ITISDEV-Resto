import React from 'react'
import '../styles/STOCK-viewInventory.css'

function STOCK_viewInventory() {

  return (

      <div class="form-content">
        <h1>Available Ingredients in Stock</h1>


        <table>
          <tr>
            <th>Ingredients    <img src="../assets/arrowDown.png" class="arrowIcon" /></th>

            <th>Quantity  <img src="../assets/arrowDown.png" class="arrowIcon" /></th>
            <th>Unit</th>

          </tr>
          <tr>
            <td>Banana</td>
            <td>1000</td>
            <td>g</td>
          </tr>
          <tr>
            <td>Tuna</td>
            <td>125</td>
            <td>g</td>
          </tr>
          <tr>
            <td>Rice</td>
            <td>125</td>
            <td>g</td>
          </tr>

        </table>


      </div>

  ) 
}

export default STOCK_viewInventory