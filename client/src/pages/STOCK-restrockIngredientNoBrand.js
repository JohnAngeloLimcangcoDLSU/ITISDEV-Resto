import React from 'react'
import '../styles/STOCK-restrockIngredientNoBrand.css'

function STOCK_restockIngredientNoBrand() {

  return(

    <><div class="header">

      <h1>Restock Ingredients</h1>


    </div><div class="sidebar">

        <div class="sidebar-category">
          <p>Ingredients</p>
        </div>

        <div class="sidebar-text">
          <a href="STOCK-inputFirstPurchaseIngredient.ja"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> Input First Purchase of Ingredient</a>
          <br />
            <a href="STOCK-restrockIngredient.js"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> Restock Ingredients</a>
          </div>

        <div class="sidebar-category">
          <p>Reports</p>
        </div>

        <div class="sidebar-text">
          <a href="STOCK-viewInventory.js"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> View Inventory</a>
          <br />
            <a href="STOCK-spoilageReport.js"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> Create Spoilage Report</a>
            <a href="STOCK-discrepancyReport.js"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> Create Discrepancy Report</a>
          </div>

      </div><div class="form-content">


        <form action="/action_page.php">

          <label for="ingredientName">Ingredient Category:</label>
          <select name="ingredientName" id="ingredientName">
            <option value="banana">Banana</option>
            <option value="apple">Apple</option>
            <option value="tuna">Tuna</option>
            <option value="coke">Coke</option>
          </select>

          <br /><br />

            <label for="quantity">Quantity:</label>
            <input type="text" id="quantity" name="quantity" />

              <select name="unit" id="unit">
                <option value="mg">mg</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="lb">lb</option>
                <option value="oz">oz</option>
                <option value="mL">mL</option>
                <option value="L">L</option>
              </select>

              <br /><br />

                <label for="itemBought">Number of item/s bought:</label>
                <input type="text" id="itemBought" name="itemBought" />

                  <br /><br />

                    <input type="submit" value="Submit" />
        </form>




                  </div></>

  )
}

export default STOCK_restockIngredientNoBrand
