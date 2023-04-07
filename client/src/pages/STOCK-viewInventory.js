import React from 'react'
import '../styles/STOCK-viewInventory.css'

function MANAGER_viewInventory() {

  return (

<div class = "header">
    
  <h1>View Inventory</h1>


</div>

<div class="sidebar">

  <div class ="sidebar-category">
    <p>Ingredients</p>
  </div>

  <div class ="sidebar-text">
    <a href="STOCK-inputFirstPurchaseIngredient.html"> <img src="click-sidebar.png" class="click-sidebar"> Input First Purchase of Ingredient</a>
    <br>
    <a href="STOCK-restrockIngredient.html"> <img src="click-sidebar.png" class="click-sidebar"> Restock Ingredients</a>
  </div>

  <div class ="sidebar-category">
    <p>Reports</p>
  </div>

  <div class ="sidebar-text">
    <a href="STOCK-viewInventory.html"> <img src="click-sidebar.png" class="click-sidebar"> View Inventory</a>
   <br>
    <a href="STOCK-spoilageReport.html"> <img src="click-sidebar.png" class="click-sidebar"> Create Spoilage Report</a>
    <a href="STOCK-discrepancyReport.html"> <img src="click-sidebar.png" class="click-sidebar"> Create Discrepancy Report</a>
  </div>

</div>

<div class="form-content">
  <h1>Available Ingredients in Stock</h1>
  

  <table>
    <tr>
      <th>Ingredients    <img src="arrowDown.png" class="arrowIcon"> </th>
   
      <th>Quantity  <img src="arrowDown.png" class="arrowIcon">  </th>
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

export default STOCK-MANAGER_viewInventory