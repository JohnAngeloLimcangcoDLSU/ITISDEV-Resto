import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MANAGER_viewDish from './pages/MANAGER_viewDish';
import MANAGER_addDish from './pages/MANAGER_addDish';
import MANAGER_deleteDish from './pages/MANAGER_deleteDish';
import MANAGER_addIngredientCategory from './pages/MANAGER_addIngredientCategory';
import MANAGER_createUser from './pages/MANAGER_createUser';
import MANAGER_viewUser from './pages/MANAGER_viewUser';
import STOCK_inputFirstPurchaseIngredient from './pages/STOCK_inputFirstPurchaseIngredient';
import Cashier from './pages/Cashier';
import Units from './pages/Units';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Sidebar /> */}
        <MANAGER_addDish />

      </Router>
    </div>
  );
}

export default App;
