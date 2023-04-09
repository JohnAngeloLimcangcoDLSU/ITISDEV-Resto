import React from "react"
import '../stles/STOCK-mainmenu.css'

function STOCK_mainmenu() {

    return(

        <div>

            <br />
            <br />
                <h2>Select Option</h2>

                <table>
                    <tr>
                        <th>Ingredients</th>
                        <th>Reports</th>
                    </tr>
                    <tr>
                        <td><a href="STOCK-inputFirstPurchaseIngredient.js">Input First Purchase of Ingredient</a></td>
                        <td><a href="STOCK-viewInventory.js">View Inventory</a></td>
                    </tr>
                    <tr>
                        <td><a href="STOCK-restrockIngredient.js">Restock Ingredients</a></td>
                        <td><a href="STOCK-spoilageReport.js">Create Spoilage Report</a></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><a href="STOCK-discrepancyReport.js">Create Discrepancy Report</a></td>
                    </tr>
                    </table>


        </div>

        
    )
}

export default STOCK_mainmenu