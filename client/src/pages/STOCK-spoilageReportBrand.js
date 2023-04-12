import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/STOCK-spoilageReportBrand.css'

function STOCK_spoilageReportBrand() {

  return (

<div>
  <div class = "header">
      
    <h1>Create Spoilage Report</h1>

  </div>

  <div class="sidebar">

    <div class ="sidebar-category">
      <p>Ingredients</p>
    </div>

    <div class ="sidebar-text">
      <a href="STOCK-inputFirstPurchaseIngredient.js"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> Input First Purchase of Ingredient</a>
      <br />
      <a href="STOCK-restrockIngredient.js"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> Restock Ingredients</a>
    </div>

    <div class ="sidebar-category">
      <p>Reports</p>
    </div>

    <div class ="sidebar-text">
      <a href="STOCK-viewInventory.js"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> View Inventory</a>
    <br />
      <a href="STOCK-spoilageReport.js"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> Create Spoilage Report</a>
      <a href="STOCK-discrepancyReport.js"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> Create Discrepancy Report</a>
    </div>

  </div>

  <div class="form-content">
    
    
    <form action="/action_page.php">

      <label for="ingredientName">Ingredient Category:</label>
      <select name="ingredientName" id="ingredientName">
          <option value="banana">Banana</option>
          <option value="apple">Apple</option>
          <option value="tuna">Tuna</option>
          <option value="coke">Coke</option>
      </select>

      <br /><br />

      <label for="brand">Brand:</label>
      <select name="brand" id="brand">
        <option value="centurytuna">Century Tuna 250g</option>
        <option value="delmundo">Del Mundo 300g</option>
    </select>

    <br /><br />

    <label for="itemBought">Number of item/s spoiled:</label>
      <input type="text" id="itemBought" name="itemBought" />

      <br /><br />

      <input type="submit" value="Submit" />
    </form> 

  </div>
</div>
  )
}

export default STOCK_spoilageReportBrand