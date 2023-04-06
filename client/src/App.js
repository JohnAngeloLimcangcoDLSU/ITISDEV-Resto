import './App.css';
import Header from './components/Header'
import Sidebar_Manager from './components/Sidebar_Manager'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar_Manager />
      </Router>
    </div>
  );
}

export default App;
