import React from 'react'
import '../styles/STOCK-restockIngredient.css'

function STOCK_restockIngredient() {

    return(

        

            <div class="form-content">

                <h1>Select a type of ingredient to restock</h1>
                <table>

                    <tr>
                        <td><a href="STOCK-restrockIngredientBrand.js">Branded</a></td>
                        <td><a href="STOCK-restrockIngredientNoBrand.js">Non-Branded</a></td>
                    </tr>


                </table>

            </div>

    )
}

export default STOCK_restockIngredient