import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/STOCK-spoilageReport.css'

function STOCK_spoilageReport() {

  return(
      <div>
        
    <div class = "header">
      
    <h1>Create Spoilage Report</h1>


  </div>

  <div class="form-content">
    <h1>Select a type of ingredient to file a spoilage report</h1>
    <table>


      <tr>
        <td><a href="STOCK-spoilageReportBrand.js">Branded</a></td>
        <td><a href="STOCK-spoilageReportNoBrand.js">Non-Branded</a></td>
      </tr>


    </table>
    




  </div>
</div>
  )
}

export default STOCK_spoilageReport