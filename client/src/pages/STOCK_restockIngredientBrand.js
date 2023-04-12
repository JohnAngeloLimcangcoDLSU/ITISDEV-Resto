import React from 'react'
import '../styles/STOCK-restockIngredientBrand.css'

function STOCK_restockingIngredientBrand() {

    return(
   
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

                            <label for="itemBought">Number of item/s bought:</label>
                            <input type="text" id="itemBought" name="itemBought" />

                            <br /><br />

                                    <input type="submit" value="Submit" />
                </form>

            </div>
                                
        )
}

export default STOCK_restockingIngredientBrand
