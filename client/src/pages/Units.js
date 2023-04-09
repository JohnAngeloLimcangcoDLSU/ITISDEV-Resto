import React from 'react'
import '../styles/Units.css'

function Units() {

  return(

      <div className="form-content">


        <form action="/action_page.php">

          <p>Create custom units of measurement</p>


                <label for="unit">Unit Name:</label>
                <input type="text" id="unit" name="unit" />

                  <br /><br />

                  <label for="unitRate">Conversion rate (sample = 1g) :</label>
                <input  type="number" id="unitRate" name="unitRate" />

                    <input type="submit" value="Submit" />
        </form>




                  </div>

  )
}

export default Units
