import './App.css';
import ProtectedRoutes from './ProtectedRoutes';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import MANAGER_Register from './pages/MANAGER_Register'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Sidebar />
        <Routes>
          
          <Route path='/' element={<Login/>} />
          <Route element={<ProtectedRoutes/>}>
            <Route path='/register' element={<MANAGER_Register/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
