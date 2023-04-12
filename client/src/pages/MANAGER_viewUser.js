import React, {useEffect, useState} from 'react'
import '../styles/MANAGER_viewUser.css'
import Axios from 'axios'

function MANAGER_viewUser() {

    const [user, setUser] = useState([])

    Axios.defaults.withCredentials = true

    useEffect(() => {
      Axios.get('http://localhost3005/getUser').then((response) => {
        console.log(response)
        setUser(response.data)
      })
    })
    
    return (
  

<div class="form-content">


  <table>
    <tr>
      <th>Username</th>
      <th>Role</th>
  
    </tr>
    {/* <tr>
      <td>ManagerUser</td>
      <td>Manager</td>
   

    </tr>
    <tr>
      <td>StockUser </td>
      <td>StockController</td>
    

    </tr>
    <tr>
      <td>CashierUser</td>
      <td>Cashier</td>


    </tr> */}

  </table>

{user.map((val, key) => {
  return <div key = {val.id} classname="form-content">
      {val.username}
      {val.role_id}

      </div>
})}




</div>


  )
}

export default MANAGER_viewUser
