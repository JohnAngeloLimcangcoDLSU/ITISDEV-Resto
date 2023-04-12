import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/STOCK-spoilageReport.css'

function STOCK_spoilageReport() {

  return(
      <div>
        
    <div class = "header">
      
    <h1>Create Spoilage Report</h1>


  </div>

  <div class="sidebar">

    <div class ="sidebar-category">
      <p>Ingredients</p>
    </div>

    <div class ="sidebar-text">
      <a href="STOCK-inputFirstPurchaseIngredient.ja"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> Input First Purchase of Ingredient</a>
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
    <h1>Select a type of ingredient to file a spoilage report</h1>
    <table>


      <tr>
        <td><a href="STOCK-spoilageReportBrand.js">Branded</a></td>
        <td><a href="STOCK-spoilageReportNoBrand.js">Non-Branded</a></td>
      </tr>


    </table>
    




  </div>
</div>
  )
}
