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
import MANAGER_deleteUser from './pages/MANAGER_deleteUser';
import STOCK_inputFirstPurchaseIngredient from './pages/STOCK_inputFirstPurchaseIngredient';
import Cashier from './pages/Cashier';
import Units from './pages/Units';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/viewmenu' element={<MANAGER_viewDish />} />
          <Route path='/addDish' element={<MANAGER_addDish />} />
          <Route path='/deleteDish' element={<MANAGER_deleteDish />} />
          <Route path='/ingredientCategory' element={<MANAGER_addIngredientCategory />} />
          <Route path='/adduser' element={<MANAGER_createUser />} />
          <Route path='/viewusers' element={<MANAGER_viewUser />} />
          <Route path='/deleteuser' element={<MANAGER_deleteUser />} />
          <Route path='/inputFirstPurchaseIngredient' element={<STOCK_inputFirstPurchaseIngredient />} />
          <Route path='/cashier' element={<Cashier />} />
          <Route path='/units' element={<Units />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
