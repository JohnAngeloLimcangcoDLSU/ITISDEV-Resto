import React from 'react'
import '../styles/Cashier.css'

function Cashier() {

    
let addedDishes = [];
// Get the "Add" buttons from the "available dishes" list
const addButtons = document.querySelectorAll('.availableDish li button');

// Add an event listener to each "Add" button
addButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the name and price of the selected dish
    const dishName = button.nextElementSibling.innerText;
    const dishPrice = button.nextElementSibling.nextElementSibling.innerText;

	// Check if the dish has already been added
	if (addedDishes.includes(dishName)) {
	alert(`${dishName} has already been added to the current orders.`);
	return;
    }
    
    // Add the dish name to the array of added dishes
    addedDishes.push(dishName);
    
    // Create a new row in the "current orders" table
    const table = document.querySelector('.currentOrder table tbody');
    const newRow = table.insertRow();
    
    // Add the dish details to the new row
    const dishCell = newRow.insertCell();
    dishCell.innerText = dishName;
    
    const priceCell = newRow.insertCell();
    priceCell.innerText = dishPrice;
    
    const quantityCell = newRow.insertCell();
    quantityCell.innerHTML = `
      <button className="button">-</button>
      <span>1</span>
      <button className="button">+</button>
    `;
    
    const totalCell = newRow.insertCell();
    totalCell.innerText = dishPrice;
    
    const actionCell = newRow.insertCell();
    actionCell.innerHTML = '<button className="remove-button">Remove</button>';
    
	// Update the total cost of the order
	const totalCostCell = document.querySelector('#totalCostCell');
	const currentTotal = parseFloat(totalCostCell.innerText.substring(1));
	const dishCost = parseFloat(dishPrice.substring(1));
	totalCostCell.innerText = 'P' + (currentTotal + dishCost).toFixed(2);

	// Update the total cost in the paragraph element
	const totalCostParagraph = document.querySelector('#totalCostParagraph');
	totalCostParagraph.innerText = 'P' + (currentTotal + dishCost).toFixed(2);


		// Add an event listener to the "-" button of the new row
	const minusButton = newRow.querySelector('button:first-of-type');
	minusButton.addEventListener('click', (event) => {
	event.stopPropagation();
	
	
	const quantity = parseInt(event.target.nextElementSibling.innerText);
	if (quantity > 1) {
		event.target.nextElementSibling.innerText = quantity - 1;
		const newTotal = (dishCost * (quantity - 1));
		totalCell.innerText = 'P' + newTotal;
		totalCostCell.innerText = 'P' + (newTotal   - currentTotal);
		totalCostParagraph.innerText = 'P' + (newTotal - currentTotal);
		
	}
	});

	// Add an event listener to the "+" button of the new row
	const plusButton = newRow.querySelector('button:last-of-type');
	plusButton.addEventListener('click', (event) => {
	event.stopPropagation();
	const quantity = parseInt(event.target.previousElementSibling.innerText);
	event.target.previousElementSibling.innerText = quantity + 1;
	const newTotal = (dishCost * (quantity + 1));
	totalCell.innerText = 'P' + newTotal;
	totalCostCell.innerText = 'P' + (currentTotal  + newTotal);
	totalCostParagraph.innerText = 'P' + (currentTotal  + newTotal);
	});

	const removeButtons = document.querySelectorAll('.remove-button');
	
	removeButtons.forEach(button => {
  	button.addEventListener('click', () => {
    // Get the parent element of the button, which is the row element
    const row = button.parentNode.parentNode;
	const newTotal = (dishCost)

		// Remove the row element
		row.remove();
		totalCostCell.innerText = 'P' + (newTotal - currentTotal);
		totalCostParagraph.innerText = 'P' + (newTotal - currentTotal);
		// if (totalCostCell<0 && totalCostParagraph<0){
		// 	totalCostCell.innerText = 'P' + 0.00;
		// 	totalCostParagraph.innerText = 'P' + 00;
		// }
		});
	});

  });
  
});


  return (
  

<div className="form-content">

  
<div className="availableDish">

  <h1>Available Dishes</h1>
  
  <ul>
  <li>
    <button className="button">Add</button>
    <span>Item 1</span>
    <span>P10.00</span>
  </li>
  <li>
    <button className="button">Add</button>
    <span>Item 2</span>
    <span>P15.00</span>
  </li>
  <li>
    <button className="button">Add</button>
    <span>Item 3</span>
    <span>P20.00</span>
  </li>
  <li>
    <button className="button">Add</button>
    <span>Item 4</span>
    <span>P25.00</span>
  </li>
  <li>
    <button className="button">Add</button>
    <span>Item 5</span>
    <span>P30.00</span>
  </li>
</ul>

</div>

<div className="currentOrder">

  <h1>Current Orders</h1>
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    
          
  </tbody>
  <tfoot>
    <tr>
      <th colSpan="3">Total</th>
      <th id="totalCostCell">P0.00</th>
      <th></th>
    </tr>
  </tfoot>
</table>

  <button classNameName="button">Checkout </button>

</div>

<p>Total cost: <span id="totalCostParagraph">P0.00</span></p>

</div>


  )
  
}

export default Cashier
