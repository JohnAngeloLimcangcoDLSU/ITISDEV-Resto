import './App.css';
import Login from './pages/Login'
import MANAGER_Register from './pages/MANAGER_Register'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/manager/register' element={<MANAGER_Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
