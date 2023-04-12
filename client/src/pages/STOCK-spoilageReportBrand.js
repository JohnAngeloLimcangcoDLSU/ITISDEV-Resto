import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/STOCK-spoilageReportBrand.css'

function STOCK_spoilageReportBrand() {

  return (

<div>
  <div class = "header">
      
    <h1>Create Spoilage Report</h1>

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