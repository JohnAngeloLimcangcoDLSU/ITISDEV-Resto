import React, {useEffect} from 'react'
import '../styles/MANAGER_addDish.css'

function MANAGER_addDish() {

  useEffect(() => {



    // Get the "Add Ingredient" button and the ingredient row
    const addRowBtn = document.querySelector(".add-row-btn");
    const ingredientRow = document.querySelector(".ingredient-row");
  
    // Add event listener to "Add Ingredient" button
    addRowBtn.addEventListener("click", () => {
      // Create a new ingredient row by cloning the existing one
      const newRow = ingredientRow.cloneNode(true);
  
      // Clear the values of the cloned row's inputs
      newRow.querySelector("#ingredient").value = "";
      newRow.querySelector("#quantity").value = "";
      newRow.querySelector("#unit").value = "";
  
      // Add the new row to the form
      ingredientRow.parentNode.insertBefore(newRow, addRowBtn);
    });
  
    // Add event listener to "Remove Row" buttons
    const removeRowBtns = document.querySelectorAll(".remove-row-btn");
    removeRowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.parentNode.remove();
      });
    });

  })

    

    //Doesnt fully work, sometimes makes the whole screen empty. When it does works, adding ingredient prints itself twice and the delete button doesnt work

  return (
    
<div className="form-content">
  <h1>Available Dishes in the Menu</h1>
  <br/><br/>
  
  <div className="create-dish-form">
    <form/>
      <div className="form-group">
        <label htmlFor="dish-name">Dish Name:</label>
        <input type="text" id="dish-name" name="dish-name" required />
        <br/><br/>
      </div>
      <div className="form-group">
        <label htmlFor="dish-price">Dish Price:</label>
        <input type="number" id="dish-price" name="dish-price" step="0.01" min="0" required />
        <br/>
      </div>
      <hr/>
      <h4>Ingredients:</h4>
      <div className="ingredient-row">
        <div className="form-group">
          <label htmlFor="ingredient">Ingredient:</label>
          <select id="ingredient" name="ingredient">
            <option value="tomatoes">Tomatoes</option>
            <option value="onions">Onions</option>
            <option value="lettuce">Lettuce</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" step="0.01" min="0" required />
        </div>
        <div className="form-group">
          <label htmlFor="unit">Unit:</label>
          <select id="unit" name="unit">
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
            <option value="L">L</option>
          </select>
        </div>
        <button className="remove-row-btn">Remove</button>
      </div>
      <button className="add-row-btn">Add Ingredient</button>
      <hr/>
      <button type="submit">Create Dish</button>
    <form/>
  </div>
  
</div>


  )
}

export default MANAGER_addDish
