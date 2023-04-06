import './App.css';
import Header from './components/Header'
import sidebar_stock from './components/sidebar_stock'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <sidebar_stock />
      </Router>
    </div>
  );
}

class App extends Component{
  render(){
    return(
      <div className="App">
        <header/>
        <sidebar/>
        
      </div>
    );
  }
}

export default App;
