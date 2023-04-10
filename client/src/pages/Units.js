import React from 'react'
import {useState, useEffect} from 'react'
import Axios from 'axios'
import '../styles/Units.css'

function Units() {

    // const [userCreate, idInput] = useState('')
  const [unitCreate, unitInput] = useState('')
  const [unitNameCreate, unitNameInput] = useState('')


  // idInput = Math.random()
var idNum;

idNum = Math.floor(Math.random() * 999) + 1
 
  const [id, SetID] = useState('')
  const [unit, setUnit] = useState('')
  const [unit_name, setUnitName] = useState('')


  Axios.defaults.withCredentials = true

  const makeUnits = () => {
    console.log("inside makeUnits")
    Axios.post('http://localhost:3001/makeUnits',
    {id: idNum,unit: unitCreate, unit_name: unitNameCreate}
    ).then((response) => {
    console.log(response)
    })
}

  return(

      <div className="form-content">


  

          <p>Create custom units of measurement</p>


                <label htmlFor="unitNameInput">Unit Name:</label>
                <input type='text' onChange={(e) => {unitNameInput(e.target.value)}}/>

                  <br /><br />

                  <label htmlFor="unitInput">Conversion rate (sample = 1g) :</label>
                  <input type='text' onChange={(e) => {unitInput(e.target.value)}}/>

                  <button onClick={makeUnits}>Submit</button>
      




                  </div>

  )
}

export default Units
