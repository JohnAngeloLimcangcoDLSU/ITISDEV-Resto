import React from 'react'
import {useState, useEffect} from 'react'
import Axios from 'axios'
import '../styles/MANAGER_addIngredientCategory.css'

function MANAGER_addIngredientCategory() {

  const [category_id, ingredientCategory] = useState('')

  Axios.defaults.withCredentials = true

  const register = () => {
    Axios.post('http://localhost:3306/register',
    {category_id: ingredientCategory}
    ).then((response) => {
    console.log(response)
    })
}


    // useEffect(() => {
    //     Axios.get('http://localhost:3005/login').then((response) => {
    //     if(response.data.loggedIn === true) {
    //         setLoginStatus(response.data.user[0].username)
    //     }
    //     })
    // }, [])



  return (
  



<div className="form-content">
  <h1>Input an new Ingredient Category type below</h1>
  <br/><br/>
  <label htmlFor="ingredientCategory">Ingredient Category Name:</label>
  <input type='text' onChange={(e) => {category_id(e.target.value)}}/>
  <br/><br/>
  <button onClick={register}>Submit</button>

</div>


  )

//   <div class="form-content">
//   <h1>Input an new Ingredient Category type below</h1>
//   <br/><br/>
//   <label for="ingredientCategory">Ingredient Category Name:</label>
//   <input type="text" id="ingredientCategory" name="ingredientCategory" required />
//   <br/><br/>
//   <button type="submit">Submit</button>

// </div>
}

export default MANAGER_addIngredientCategory
