import React from "react"
import '../styles/STOCK-inputFirstPurchaseIngredient.css'

function STOCK_inputFirstPurchaseIngredient() {

    return (

        <div class="form-content">
            <h1>Input first purchase of ingredients to the list</h1>
            <br />

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
                <input type="text" id="brand" name="brand" /><br /><br />

                    <label for="quantity">Quantity per item:</label>
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




                </div>

    )
}

export default STOCK_inputFirstPurchaseIngredient