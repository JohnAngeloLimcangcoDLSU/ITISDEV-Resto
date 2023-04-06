import React from 'react'
import './sidebar.css';

function sidebar_stock() {
  return (
    <div class="sidebar">
        <div class ="sidebar-category">
          <p>Ingredients</p>
        </div>

        <div class ="sidebar-text">
          <a href="STOCK-inputFirstPurchaseIngredient.html"> <img src="click-sidebar.png" class="click-sidebar"/> Input First Purchase of Ingredient</a>
          <br/>
          <a href="STOCK-restrockIngredient.html"> <img src="click-sidebar.png" class="click-sidebar"/> Restock Ingredients</a>
        </div>

        <div class ="sidebar-category">
          <p>Reports</p>
        </div>

        <div class ="sidebar-text">
          <a href="STOCK-viewInventory.html"> <img src="click-sidebar.png" class="click-sidebar"/> View Inventory</a>
        <br/>
          <a href="STOCK-spoilageReport.html"> <img src="click-sidebar.png" class="click-sidebar"/> Create Spoilage Report</a>
          <a href="STOCK-discrepancyReport.html"> <img src="click-sidebar.png" class="click-sidebar"/> Create Discrepancy Report</a>
        </div>

    </div>
  )
}



export default sidebar_stock