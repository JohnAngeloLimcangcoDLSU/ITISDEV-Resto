import React from 'react'
import '../styles/STOCK-restrockIngredient.css'

function STOCK_restockIngredient() {

    return(

        <><div class="header">

            <h1>Restock Ingredients</h1>

        </div><div class="sidebar">

                <div class="sidebar-category">
                    <p>Ingredients</p>
                </div>

                <div class="sidebar-text">
                    <a href="STOCK-inputFirstPurchaseIngredient.js"> <img src="../assets/click-sidebar.png" class="click-sidebar" /> Input First Purchase of Ingredient</a>
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

                <h1>Select a type of ingredient to restock</h1>
                <table>

                    <tr>
                        <td><a href="STOCK-restrockIngredientBrand.js">Branded</a></td>
                        <td><a href="STOCK-restrockIngredientNoBrand.js">Non-Branded</a></td>
                    </tr>


                </table>




            </div></>

    )
}

export default STOCK_restockIngredient