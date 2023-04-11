import React from 'react'
import {useState, useEffect} from 'react'
import Axios from 'axios'
import '../styles/STOCK-inputFirstPurchaseIngredient.css'

function STOCK_inputFirstPurchaseIngredient() {

    Axios.defaults.withCredentials = true

    const [category, ingredientCategory] = useState('')
 


    //   const getCategory = () => {
    //     console.log("inside makeIngCat")
    //     Axios.get('http://localhost:3001/getCategory')
    //     .then((response) => {
    //     console.log(response)
    //     })
    // }

    
    useEffect(() => {
        getCategory();
        console.log(getCategory)
      },[])

    const getCategory = () => {
        console.log("inside getCategory")
        Axios.get('http://localhost:3001/getCategory')
        .then((response) => {
        const allCategory = response.data.category.allCategory;
        ingredientCategory (allCategory)
        })

        .catch(error => console.error('Error: ${error}'));

        
    }
  
    

    return (

        

        <div className="form-content">
            <h1>Input first purchase of ingredients to the list</h1>
            <br />

            <form action="/action_page.php">

                <label htmlFor="ingredientName">Ingredient Category:</label>
                <select name="ingredientName" id="ingredientName">
                <option value="1">{getCategory}</option>
                 
                </select>

                <br /><br />

                <label htmlFor="brand">Brand:</label>
                <input type="text" id="brand" name="brand" /><br /><br />

                    <label htmlFor="quantity">Quantity per item:</label>
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

                            <label htmlFor="itemBought">Number of item/s bought:</label>
                            <input type="text" id="itemBought" name="itemBought" />

                                <br /><br />

                                    <input type="submit" value="Submit" />
                                    </form>




                </div>

    )
}

export default STOCK_inputFirstPurchaseIngredient