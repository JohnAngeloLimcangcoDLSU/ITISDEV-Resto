import './App.css';
import Header from './components/Header'
import Sidebar_Manager from './components/Sidebar_Manager'
import MANAGER_viewDish from './pages/MANAGER_viewDish';
import MANAGER_addDish from './pages/MANAGER_addDish';
import MANAGER_deleteDish from './pages/MANAGER_deleteDish';
import MANAGER_addIngredientCategory from './pages/MANAGER_addIngredientCategory';
import MANAGER_createUser from './pages/MANAGER_createUser';
import MANAGER_viewUser from './pages/MANAGER_viewUser';
import Cashier from './pages/Cashier';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar_Manager />
        <Cashier />
        <Routes> 
          <Route path="/" exact component={MANAGER_viewDish }/>

        </Routes>
     
        
      </Router>
    </div>
  );
}

export default App;
