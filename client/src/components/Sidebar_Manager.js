import React from 'react'
import '../styles/Sidebar.css'

function Sidebar() {
  return (
    <div class="sidebar">

  <div class ="sidebar-category">
    <p>Ingredients</p>
  </div>

  <div class ="sidebar-text">
    <a href="MANAGER-addIngredientCategory.html"> <img src="click-sidebar.png" class="click-sidebar"/> Create New Ingredient Category</a>
    <br/><br/>
  </div>

  <div class ="sidebar-category">
    <p>Menu</p>
  </div>

  <div class ="sidebar-text">
    <a href="MANAGER-viewDish.html"> <img src="click-sidebar.png" class="click-sidebar"/> View All Dishes</a>
    <br/><br/>
    <a href="MANAGER-addDish.html"> <img src="click-sidebar.png" class="click-sidebar"/> Add Dish</a>
    <br/><br/>
    <a href="MANAGER-deleteDish.html"> <img src="click-sidebar.png" class="click-sidebar"/> Delete Dish</a>
    <br/><br/>
  </div>

  
  <div class ="sidebar-category">
    <p>Reports</p>
  </div>

  <div class ="sidebar-text">
    <a href="MANAGER-viewInventory.html"> <img src="click-sidebar.png" class="click-sidebar"/> View Inventory Report</a>
   <br/><br/>
    <a href="MANAGER-viewInventoryHistory.html"> <img src="click-sidebar.png" class="click-sidebar"/> View Inventory History Report</a>
    <br/><br/>
    <a href="MANAGER-viewSpoilage.html"> <img src="click-sidebar.png" class="click-sidebar"/> View Spoilage Report</a>
    <br/><br/>
    <a href="MANAGER-viewDiscrepancy.html"> <img src="click-sidebar.png" class="click-sidebar"/> View Discrepancy Report</a>
    <br/><br/>
    <a href="MANAGER-viewCashier.html"> <img src="click-sidebar.png" class="click-sidebar"/> View Cashier Report</a>
    <br/><br/>
  </div>

  <div class ="sidebar-category">
    <p>Users</p>
  </div>

  <div class ="sidebar-text">
    <a href="MANAGER-viewUser.html"> <img src="click-sidebar.png" class="click-sidebar"/> View All Users</a>
    <br/><br/>
    <a href="MANAGER-createUser.html"> <img src="click-sidebar.png" class="click-sidebar"/> Add User</a>
   <br/><br/>
   <a href="MANAGER-deleteUser.html"> <img src="click-sidebar.png" class="click-sidebar"/> Delete User</a>
   <br/><br/>
  </div>

</div>
  )
}

export default Sidebar