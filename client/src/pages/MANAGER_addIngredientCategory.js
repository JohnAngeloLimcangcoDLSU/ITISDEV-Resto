import React from 'react'
import '../styles/MANAGER_addIngredientCategory.css'

function MANAGER_addIngredientCategory() {

    

  return (
  
<div class="form-content">
  <h1>Input an new Ingredient Category type below</h1>
  <br/><br/>
  <label for="ingredientCategory">Ingredient Category Name:</label>
  <input type="text" id="ingredientCategory" name="ingredientCategory" required />
  <br/><br/>
  <button type="submit">Submit</button>

</div>


  )
}

export default MANAGER_addIngredientCategory
