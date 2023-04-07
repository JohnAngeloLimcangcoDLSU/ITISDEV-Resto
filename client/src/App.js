import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
